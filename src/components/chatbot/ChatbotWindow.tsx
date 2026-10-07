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