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