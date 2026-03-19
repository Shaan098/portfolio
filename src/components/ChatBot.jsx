import React, { useState } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

/**
 * ChatBot Component - Floating AI Assistant
 */
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! 👋 I\'m Shaan\'s AI Assistant. Ask me anything about my portfolio, skills, or projects!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // FAQ responses
  const responses = {
    'hello': 'Hey there! 👋 How can I help you today?',
    'hi': 'Hello! 👋 What would you like to know?',
    'projects': 'I\'ve worked on several projects including:\n1. Online Multi-Language Compiler\n2. AR Educational Content Viewer\n3. Appointment System\n\nWould you like details about any specific project?',
    'skills': 'My main skills include React, Node.js, MongoDB, JavaScript, C++, and more! Check the Skills section for a complete breakdown.',
    'experience': 'I\'ve completed virtual experiences with EA and AWS, focusing on system design and cloud architecture.',
    'contact': 'You can reach me at shaansaurav633@gmail.com or +91 6204566381. I\'m also on LinkedIn and GitHub!',
    'resume': 'You can download my resume from the hero section. Click the "Download Resume" button!',
    'education': 'I\'m a B.Tech CSE student at Lovely Professional University, graduating in 2026.',
    'default': 'That\'s interesting! Feel free to ask about my projects, skills, experience, or how to contact me.'
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    for (const [key, value] of Object.entries(responses)) {
      if (message.includes(key)) {
        return value;
      }
    }
    
    return responses['default'];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating ChatBot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-sky-500 to-purple-600 text-white rounded-full shadow-lg shadow-sky-500/50 flex items-center justify-center hover:scale-110 transition-transform z-30 animate-bounce"
          aria-label="Open chat"
        >
          <FaRobot className="w-8 h-8" />
        </button>
      )}

      {/* ChatBot Window */}
      {isOpen && (
        <div className="fixed bottom-8 left-8 w-96 max-w-[calc(100vw-2rem)] h-[600px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl shadow-sky-500/20 z-40 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-white font-bold">Shaan's AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-sky-500 text-white rounded-br-none'
                      : 'bg-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-slate-700 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-lg transition-all disabled:opacity-50"
              >
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">💬 Type a question or scroll to explore the portfolio</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
