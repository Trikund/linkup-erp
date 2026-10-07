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
        text: "Hi! 👋 I'm the LinkUp Assistant.\n\nI can help you learn about LinkUp, our School, College and Corporate solutions, features, pricing, and how to get started.\n\nWhat would you like to know?",
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
        text: `${LinkUpKnowledge.school.overview}\n\nKey capabilities include:\n• ${LinkUpKnowledge.school.features.join('\n• ')}`,
        suggestions: ["Attendance", "Exams & Results", "Fees"],
        actions: [{ label: "School Login", actionType: "navigate", value: "/school/login" }]
      };
    }

    // College
    if (text.includes('college') || text.includes('university') || text.includes('semester') || text.includes('cgpa') || text.includes('placement')) {
      return {
        text: `${LinkUpKnowledge.college.overview}\n\nKey capabilities include:\n• ${LinkUpKnowledge.college.features.join('\n• ')}`,
        suggestions: ["CGPA", "Placements", "Internships", "Library"],
        actions: [{ label: "College Login", actionType: "navigate", value: "/college/login" }]
      };
    }

    // Corporate
    if (text.includes('corporate') || text.includes('company') || text.includes('employee') || text.includes('hr') || text.includes('manager')) {
      return {
        text: `${LinkUpKnowledge.corporate.overview}\n\nKey capabilities include:\n• ${LinkUpKnowledge.corporate.features.join('\n• ')}`,
        suggestions: ["Employees", "HR", "Attendance", "Performance"],
        actions: [{ label: "Corporate Login", actionType: "navigate", value: "/corporate/login" }]
      };
    }

    // General LinkUp
    if (text.includes('what is linkup') || text.includes('about linkup') || text.includes('how does linkup work') || text.includes('features')) {
      return {
        text: `${LinkUpKnowledge.general.about}\n\nWe offer tailored ERP solutions for Schools, Colleges, and Corporate environments.`,
        suggestions: ["School ERP", "College ERP", "Corporate ERP"]
      };
    }

    // Off-topic / Fallback
    return {
      text: "I'm the LinkUp Assistant. While I might not have the answer to that specific question, I'd be happy to help you explore our School, College, or Corporate platforms.\n\nHow can I assist you with LinkUp today?",
      suggestions: ["What is LinkUp?", "Pricing", "Get Started"]
    };
  }
};