'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User, Loader2, MessageSquare, MapPin, Calendar, Award, Phone, Mail } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "🌟 Welcome to Agence Kouki! I'm here to help you discover amazing language learning adventures. With 20+ years of experience and 2000+ happy travelers, we're ready to make your journey unforgettable!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickOptions, setShowQuickOptions] = useState(true);
  const messagesEndRef = useRef(null);

  const predefinedQuestions = [
    {
      icon: '🇬🇧',
      text: "Tell me about the London program",
      question: "Can you tell me about your London linguistic stay program?"
    },
    {
      icon: '💰',
      text: "Program pricing",
      question: "What are the prices for your programs?"
    },
    {
      icon: '📅',
      text: "Available dates",
      question: "What are the available dates for your programs?"
    },
    {
      icon: '🏆',
      text: "Certifications",
      question: "What certifications and achievements do you have?"
    },
    {
      icon: '📞',
      text: "Contact information",
      question: "How can I contact you for booking?"
    },
    {
      icon: '🎓',
      text: "Available programs",
      question: "What language programs do you offer?"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced website context for humanized responses
  const websiteContext = `
  You are a friendly customer service representative for Agence Kouki, a Tunisian travel and language learning agency. 

  RESPONSE STYLE GUIDELINES:
  - Write in natural, conversational paragraphs like a human would speak
  - No emojis, bullet points, or special formatting
  - Keep responses warm, friendly, and personal
  - Ask follow-up questions to engage the customer
  - Use short, brief answers that feel natural
  - Speak as if you're having a friendly conversation
  - Show genuine interest in helping the customer

  COMPANY INFORMATION:
  Agence Kouki is located in Ennasr, Tunisia and has been helping people learn languages through travel for over 20 years since 2012. You can reach us at +216 20 268 908 during business hours Monday to Friday from 9AM to 6PM, or email us anytime at Taoufik.kouki@hotmail.fr for 24/7 support. Our website is https://agence-kouki-aylo.vercel.app/

  We've helped over 2000 happy travelers have life-changing experiences across 3 different countries. We're proud to be accredited by the British Council and certified by Trinity College, which shows our commitment to quality education.

  PROGRAMS WE OFFER:
  We have five main programs: English Immersion, Summer Intensive, Cultural Exchange, Business English, and our popular London Kookies program which has a 4.9 rating.

  OUR LONDON PROGRAM:
  Our flagship program is a 7-day linguistic stay in London from December 17-23. What makes this special is that Mr. Kouki personally guides the trip, and it's the only program like this in Tunisia. The best part is there are no lessons - it's pure tourism and cultural discovery.

  The program includes full-board accommodation with all meals, private single bedrooms with ensuite bathrooms, and all food is prepared according to halal standards. We arrange full-day excursions for comprehensive sightseeing, special visits to Oxford and Brighton, and you'll get to experience London's magical Christmas markets. All transfers and site entries are included, and parents can track activities in real-time.

  STUDENT SUCCESS:
  One of our recent success stories is Sara Bellili from Ardmore Language Schools who achieved very good to excellent performance with a final assessment of 74/100 and speaking score of 63/100. She completed her program in August 2024 and showed outstanding classroom participation.

  RESPONSE APPROACH:
  - Answer naturally as if speaking to a friend
  - Keep responses conversational and brief
  - Ask questions to understand their needs better
  - Show enthusiasm for helping them find the right program
  - When they ask for booking information, warmly direct them to contact us
  - Make them feel welcome and valued as a potential customer
  `;

  const handleQuickQuestion = (question) => {
    setShowQuickOptions(false);
    const userMessage = {
      id: messages.length + 1,
      content: question,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    sendMessageToAPI(question);
  };

  const sendMessageToAPI = async (messageContent) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-4-scout-17b-16e-instruct',
          messages: [
            {
              role: 'system',
              content: websiteContext
            },
            ...messages.slice(-5).map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.content
            })),
            {
              role: 'user',
              content: messageContent
            }
          ],
          max_tokens: 400,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const botResponse = {
        id: messages.length + 2,
        content: data.choices[0].message.content,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        content: "🔧 I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly:\n\n📞 +216 20 268 908\n📧 Taoufik.kouki@hotmail.fr",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = inputMessage;
    setInputMessage('');
    setShowQuickOptions(false);
    
    await sendMessageToAPI(messageToSend);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content) => {
    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      {/* Enhanced Chat Bubble Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-300 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse opacity-75"></div>
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </motion.div>

      {/* Enhanced Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden"
          >
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Agence Kouki</h3>
                  <p className="text-blue-200 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Online • 20+ Years Experience
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-blue-200 hover:text-white transition-colors p-1 rounded-full hover:bg-blue-600"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 shadow-lg' 
                        : 'bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl p-4 shadow-md ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
                    }`}>
                      <p className="text-sm leading-relaxed">{formatMessage(message.content)}</p>
                      <p className={`text-xs mt-2 ${
                        message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick Options */}
              {showQuickOptions && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-sm text-gray-600 font-medium mb-3">💡 Quick questions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {predefinedQuestions.map((item, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuickQuestion(item.question)}
                        className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-xs text-gray-700 hover:text-blue-700 transition-all duration-200 border border-blue-200 hover:border-blue-300"
                      >
                        <span className="mr-1">{item.icon}</span>
                        {item.text}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-md p-4 shadow-md border border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                        <span className="text-sm text-gray-600">Typing...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about our programs..."
                    className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-black placeholder-gray-500 bg-gray-50 hover:bg-white transition-all duration-200"
                    disabled={isLoading}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 shadow-md"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Footer info */}
              <div className="mt-3 flex items-center justify-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  +216 20 268 908
                </span>
                <span className="flex items-center">
                  <Mail className="w-3 h-3 mr-1" />
                  24/7 Support
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;