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