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

