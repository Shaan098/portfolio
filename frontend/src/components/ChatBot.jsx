import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 Hi! I\'m Shaan\'s AI assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const quickReplies = [
    { text: 'Tell me about yourself', response: 'I\'m a B.Tech CSE student at LPU, passionate about full-stack development. I love building scalable applications and solving problems with code!' },
    { text: 'Your tech stack?', response: 'I work with React, Node.js, Express, MongoDB, and AWS. I\'m proficient in C++, JavaScript, and continuously learning new technologies!' },
    { text: 'Recent projects?', response: 'I\'ve built an Online Multi-Language Compiler, AR Educational Viewer, and Appointment System. All using the MERN stack!' },
    { text: 'Contact info?', response: 'You can reach me at shaansaurav633@gmail.com or +91 6204566381. Connect with me on GitHub and LinkedIn too!' },
  ];

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    setMessages([...messages, { type: 'user', text }]);

    // Simulate bot response
    setTimeout(() => {
      const reply = quickReplies.find(
        (q) => q.text.toLowerCase() === text.toLowerCase()
      );
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: reply ? reply.response : "That's interesting! Feel free to ask me anything about Shaan's skills and projects.",
        },
      ]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiMessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-24 right-8 w-96 glass p-6 rounded-lg shadow-xl z-40 flex flex-col h-96"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Shaan's Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'glass text-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="mb-4 space-y-2">
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(reply.text)}
                  className="w-full text-left px-3 py-2 text-sm rounded-lg glass hover:bg-white/20 transition-colors text-gray-300 truncate"
                >
                  {reply.text}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 text-sm"
            />
            <button
              onClick={() => handleSendMessage(input)}
              className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <FiSend size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ChatBot;
