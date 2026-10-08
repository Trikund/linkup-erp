const fs = require('fs');
let c = fs.readFileSync('src/components/chatbot/ChatbotWindow.tsx', 'utf8');
c = c.replace(/Public assistant .* Don't share/g, "Public assistant • Don't share");
fs.writeFileSync('src/components/chatbot/ChatbotWindow.tsx', c);
