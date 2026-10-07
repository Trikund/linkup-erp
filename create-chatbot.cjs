const fs = require('fs');
const path = require('path');

const files = {
  'src/chatbot/chatbotTypes.ts': `
export interface ChatAction {
  label: string;
  actionType: 'navigate' | 'send_message' | 'link';
  value: string;
}

export interface ChatMessageData {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  actions?: ChatAction[];
  suggestions?: string[];
}
  `,

  'src/chatbot/chatbotKnowledge.ts': `
export const LinkUpKnowledge = {
  general: {
    about: "LinkUp is a unified management platform designed for Schools, Colleges, and Corporate organizations. Our platform streamlines administration, communication, and learning/working processes into a single, modern interface.",
    tagline: "One Platform. Every Organization."
  },
  school: {
    overview: "LinkUp's School ERP is built to connect students, teachers, parents, and administrators.",
    features: [
      "Attendance & Exam Tracking",
      "Homework & Assignments",
      "Parent Communication",
      "Timetable & Notices",
      "Fee Management"
    ]
  },
  college: {
    overview: "LinkUp's College ERP handles higher-education complexities with ease.",
    features: [
      "Department & Program Management",
      "CGPA & SGPA Tracking",
      "Placement & Internship Portals",
      "Faculty Management",
      "Library Management"
    ]
  },
  corporate: {
    overview: "LinkUp's Corporate ERP streamlines employee operations and HR.",
    features: [
      "Employee Records & HR",
      "Attendance & Leave Management",
      "Performance & Task Tracking",
      "Team Management"
    ]
  },
  pricing: "LinkUp pricing hasn't been finalized yet. You can contact our team to discuss the right plan for your organization.",
  contact: "Our contact details haven't been configured yet. You can use the Contact section on this website to reach the LinkUp team."
};
  `,

  'src/services/chatbot/chatbotService.ts': `
import { ChatMessageData, ChatAction } from '../../chatbot/chatbotTypes';
import { LinkUpKnowledge } from '../../chatbot/chatbotKnowledge';

export const chatbotService = {
  async processMessage(content: string): Promise<Partial<ChatMessageData>> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 500));
    
    const text = content.toLowerCase();
    
    // Greeting
    if (/^(hi|hello|hey|greetings)/.test(text) && text.length < 15) {
      return {
        text: "Hi! 👋 I'm the LinkUp Assistant.\\n\\nI can help you learn about LinkUp, our School, College and Corporate solutions, features, pricing, and how to get started.\\n\\nWhat would you like to know?",
        suggestions: ["What is LinkUp?", "School ERP", "College ERP", "Corporate ERP", "Pricing", "Get Started"]
      };
    }

    // Pricing
    if (text.includes('price') || text.includes('pricing') || text.includes('cost') || text.includes('fee')) {
      return {
        text: LinkUpKnowledge.pricing,
        actions: [{ label: "Contact Sales", actionType: "navigate", value: "#contact" }],
        suggestions: ["Features", "Get Started"]
      };
    }

    // Contact
    if (text.includes('contact') || text.includes('support') || text.includes('email') || text.includes('phone')) {
      return {
        text: LinkUpKnowledge.contact,
        actions: [{ label: "Go to Contact", actionType: "navigate", value: "#contact" }]
      };
    }

    // Get Started
    if (text.includes('start') || text.includes('create account') || text.includes('demo') || (text.includes('i want') && text.includes('linkup'))) {
      return {
        text: "Absolutely. You can get started by selecting your organization type and choosing Get Started.",
        actions: [
          { label: "School", actionType: "navigate", value: "/select-organization" },
          { label: "College", actionType: "navigate", value: "/select-organization" },
          { label: "Corporate", actionType: "navigate", value: "/select-organization" },
          { label: "Get Started", actionType: "navigate", value: "/select-organization" }
        ]
      };
    }

    // Login
    if (text.includes('login') || text.includes('sign in') || text.includes('log in')) {
      return {
        text: "You can securely log in to your portal by selecting your organization type below:",
        actions: [
          { label: "School Login", actionType: "navigate", value: "/school/login" },
          { label: "College Login", actionType: "navigate", value: "/college/login" },
          { label: "Corporate Login", actionType: "navigate", value: "/corporate/login" }
        ]
      };
    }

    // School
    if (text.includes('school') || text.includes('student') || text.includes('parent') || text.includes('teacher')) {
      return {
        text: \`\${LinkUpKnowledge.school.overview}\\n\\nKey capabilities include:\\n• \${LinkUpKnowledge.school.features.join('\\n• ')}\`,
        suggestions: ["Attendance", "Exams & Results", "Fees"],
        actions: [{ label: "School Login", actionType: "navigate", value: "/school/login" }]
      };
    }

    // College
    if (text.includes('college') || text.includes('university') || text.includes('semester') || text.includes('cgpa') || text.includes('placement')) {
      return {
        text: \`\${LinkUpKnowledge.college.overview}\\n\\nKey capabilities include:\\n• \${LinkUpKnowledge.college.features.join('\\n• ')}\`,
        suggestions: ["CGPA", "Placements", "Internships", "Library"],
        actions: [{ label: "College Login", actionType: "navigate", value: "/college/login" }]
      };
    }

    // Corporate
    if (text.includes('corporate') || text.includes('company') || text.includes('employee') || text.includes('hr') || text.includes('manager')) {
      return {
        text: \`\${LinkUpKnowledge.corporate.overview}\\n\\nKey capabilities include:\\n• \${LinkUpKnowledge.corporate.features.join('\\n• ')}\`,
        suggestions: ["Employees", "HR", "Attendance", "Performance"],
        actions: [{ label: "Corporate Login", actionType: "navigate", value: "/corporate/login" }]
      };
    }

    // General LinkUp
    if (text.includes('what is linkup') || text.includes('about linkup') || text.includes('how does linkup work') || text.includes('features')) {
      return {
        text: \`\${LinkUpKnowledge.general.about}\\n\\nWe offer tailored ERP solutions for Schools, Colleges, and Corporate environments.\`,
        suggestions: ["School ERP", "College ERP", "Corporate ERP"]
      };
    }

    // Off-topic / Fallback
    return {
      text: "I'm the LinkUp Assistant. While I might not have the answer to that specific question, I'd be happy to help you explore our School, College, or Corporate platforms.\\n\\nHow can I assist you with LinkUp today?",
      suggestions: ["What is LinkUp?", "Pricing", "Get Started"]
    };
  }
};
  `,

  'src/components/chatbot/ChatbotButton.tsx': `
import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatbotButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export function ChatbotButton({ onClick, isOpen }: ChatbotButtonProps) {
  if (isOpen) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-linkup-blue text-white shadow-lg shadow-linkup-blue/30 border border-white/20 transition-all hover:shadow-xl"
      aria-label="Open LinkUp Assistant"
    >
      <div className="relative">
        <MessageCircle size={28} strokeWidth={2} />
        <Sparkles size={12} className="absolute -top-1 -right-2 text-blue-200" />
      </div>
    </motion.button>
  );
}
  `,

  'src/components/chatbot/TypingIndicator.tsx': `
import React from 'react';
import { motion } from 'framer-motion';

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 p-4 bg-slate-50 text-slate-500 rounded-2xl rounded-tl-sm w-fit shadow-sm border border-slate-100">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 bg-slate-400 rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
  `,

  'src/components/chatbot/ChatMessage.tsx': `
import React from 'react';
import { ChatMessageData } from '../../chatbot/chatbotTypes';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ChatMessageProps {
  message: ChatMessageData;
  onSuggestionClick: (text: string) => void;
}

export function ChatMessage({ message, onSuggestionClick }: ChatMessageProps) {
  const isBot = message.sender === 'bot';
  const navigate = useNavigate();

  const handleActionClick = (action: any) => {
    if (action.actionType === 'navigate') {
      if (action.value.startsWith('#')) {
        const el = document.querySelector(action.value);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(action.value);
      }
    } else if (action.actionType === 'send_message') {
      onSuggestionClick(action.value);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex flex-col mb-4 max-w-[85%]", isBot ? "items-start" : "items-end ml-auto")}
    >
      <div
        className={cn(
          "px-4 py-3 rounded-2xl shadow-sm text-[15px] leading-relaxed whitespace-pre-wrap",
          isBot 
            ? "bg-slate-50 text-slate-800 rounded-tl-sm border border-slate-100" 
            : "bg-linkup-blue text-white rounded-tr-sm"
        )}
      >
        {message.text}
      </div>

      {message.actions && message.actions.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {message.actions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => handleActionClick(action)}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-slate-200 text-linkup-blue hover:bg-slate-50 shadow-sm transition-colors"
            >
              {action.label}
            </button>
          ))}
        </div>
      )}

      {message.suggestions && message.suggestions.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {message.suggestions.map((sug, idx) => (
            <button
              key={idx}
              onClick={() => onSuggestionClick(sug)}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
            >
              {sug}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
  `,

  'src/components/chatbot/ChatbotWindow.tsx': `
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Trash2, MessageCircle } from 'lucide-react';
import { ChatMessageData } from '../../chatbot/chatbotTypes';
import { chatbotService } from '../../services/chatbot/chatbotService';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';

interface ChatbotWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatbotWindow({ isOpen, onClose }: ChatbotWindowProps) {
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      sendInitialGreeting();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendInitialGreeting = async () => {
    setIsTyping(true);
    const response = await chatbotService.processMessage('hi');
    setIsTyping(false);
    
    setMessages([{
      id: Date.now().toString(),
      sender: 'bot',
      text: response.text!,
      timestamp: new Date(),
      actions: response.actions,
      suggestions: response.suggestions
    }]);
  };

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim()) return;
    
    const userMsg: ChatMessageData = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const response = await chatbotService.processMessage(text);
    
    const botMsg: ChatMessageData = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: response.text || "I'm not sure how to answer that.",
      timestamp: new Date(),
      actions: response.actions,
      suggestions: response.suggestions
    };

    setIsTyping(false);
    setMessages(prev => [...prev, botMsg]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([]);
    sendInitialGreeting();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-32px)] md:w-[400px] h-[calc(100vh-100px)] md:h-[600px] max-h-[800px] bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-slate-100 shadow-sm z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linkup-blue/10 flex items-center justify-center text-linkup-blue">
                <MessageCircle size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-[15px]">LinkUp Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <p className="text-xs text-slate-500 font-medium">Online</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={clearChat} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors" aria-label="Clear chat" title="Clear Chat">
                <Trash2 size={16} />
              </button>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors" aria-label="Close chat">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} onSuggestionClick={handleSend} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me about LinkUp..."
                className="w-full resize-none bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-linkup-blue/50 focus:border-linkup-blue transition-all"
                rows={1}
                style={{ minHeight: '48px', maxHeight: '120px' }}
                aria-label="Chat input"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-linkup-blue text-white rounded-lg disabled:opacity-50 disabled:bg-slate-200 disabled:text-slate-400 transition-colors"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-center mt-3">
              <span className="text-[10px] text-slate-400 font-medium">Public assistant • Don't share sensitive personal information.</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
  `,

  'src/components/chatbot/LinkUpAssistant.tsx': `
import React, { useState } from 'react';
import { ChatbotButton } from './ChatbotButton';
import { ChatbotWindow } from './ChatbotWindow';

export function LinkUpAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatbotButton isOpen={isOpen} onClick={() => setIsOpen(true)} />
      <ChatbotWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(__dirname, filePath), content.trim());
});

console.log('Chatbot files created successfully!');
