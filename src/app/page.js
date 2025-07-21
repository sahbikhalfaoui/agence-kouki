'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, Users, Award, BookOpen, MessageCircle, 
  Send, X, Globe, Star, Clock, CheckCircle, Phone, Mail, 
  ArrowRight, Play, Sparkles, Target, Zap, Heart, Plane,
  Camera, Mountain, Compass, Sun, Menu, Home, Briefcase, 
  User, ChevronRight, Circle
} from 'lucide-react';
import FeaturedCollection from './components/FeaturedCollection';
import HeroSection from './components/HeroSection';
import TripPrograms from './components/TripPrograms';
import Accreditations from './components/Accreditations';
import SummerProgram from './components/SummerProgram';
import ChatBot from './components/ChatBot';

// Loading Component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div className="text-center">
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl"
      >
        <Plane className="w-8 h-8 text-white" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-4xl font-bold text-blue-900 mb-4"
      >
        Agence Kouki
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
        className="text-blue-600 text-lg font-medium mb-6"
      >
        Your Journey Begins Here
      </motion.p>
      
      <div className="flex justify-center space-x-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [1, 1.5, 1],
              backgroundColor: ["#3B82F6", "#1E40AF", "#3B82F6"]
            }}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="w-2 h-2 bg-blue-500 rounded-full"
          />
        ))}
      </div>
    </div>
  </div>
);

// Enhanced Side Navigation Component
const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, description: 'Welcome & Overview' },
    { id: 'featured', label: 'Featured', icon: Star, description: 'Featured Collection' },
    { id: 'trips', label: 'Programs', icon: BookOpen, description: 'Trip Programs' },
    { id: 'accreditations', label: 'Accreditations', icon: Award, description: 'Our Certifications' },
    { id: 'summer', label: 'Summer', icon: Sun, description: 'Summer Program' },
    { id: 'contact', label: 'Contact', icon: Phone, description: 'Get In Touch' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  // Sidebar variants for animation
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: {
      x: -320,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: -20,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      {/* Mobile/Desktop Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-white/95 backdrop-blur-xl border border-blue-100' 
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className={`w-5 h-5 ${isScrolled || isOpen ? 'text-blue-600' : 'text-white'}`} />
          ) : (
            <Menu className={`w-5 h-5 ${isScrolled || isOpen ? 'text-blue-600' : 'text-white'}`} />
          )}
        </motion.div>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Side Navigation */}
      <motion.nav
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        className="fixed left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl border-r border-blue-100 shadow-2xl z-40"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="p-8 border-b border-blue-100"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Agence Kouki
                </h1>
                <p className="text-sm text-blue-500">Language Travel Agency</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex-1 py-6 px-4 overflow-y-auto">
            <motion.div className="space-y-2">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full group relative overflow-hidden rounded-xl p-4 text-left transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                        : 'hover:bg-blue-50 text-blue-800'
                    }`}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background Animation */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBackground"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    <div className="relative flex items-center space-x-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/20' 
                          : 'bg-blue-100 group-hover:bg-blue-200'
                      }`}>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-blue-800'}`}>
                            {item.label}
                          </h3>
                          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                            isActive 
                              ? 'text-white/70 transform translate-x-1' 
                              : 'text-blue-400 group-hover:translate-x-1'
                          }`} />
                        </div>
                        <p className={`text-sm mt-1 ${
                          isActive ? 'text-white/80' : 'text-blue-500'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute right-0 top-1/2 w-1 h-8 bg-white rounded-l-full transform -translate-y-1/2"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="p-6 border-t border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50"
          >
            <div className="text-center">
              <div className="flex justify-center space-x-2 mb-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      backgroundColor: ["#3B82F6", "#6366F1", "#3B82F6"]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 bg-blue-500 rounded-full"
                  />
                ))}
              </div>
              <p className="text-xs text-blue-600 font-medium">
                Ready for your next adventure?
              </p>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-4 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl" />
        <div className="absolute bottom-32 left-4 w-16 h-16 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-lg" />
      </motion.nav>

      {/* Progress Indicator */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed left-6 bottom-6 z-50"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-full px-4 py-2 shadow-lg border border-blue-100">
              <div className="flex items-center space-x-2">
                <Circle className="w-3 h-3 text-blue-600" />
                <span className="text-xs font-medium text-blue-800">
                  Section: {navigationItems.find(item => item.id === activeSection)?.label}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

 // Contact Component
 const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900">
            Get in Touch
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Ready to embark on your language learning adventure? We re here to help you every step of the way
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Phone, 
              title: "Call Us", 
              info: "+216 20 268 908", 
              description: "Mon-Fri 9AM-6PM",
              color: "from-green-400 to-green-600"
            },
            { 
              icon: Mail, 
              title: "Email Us", 
              info: "Taoufik.kouki@hotmail.fr", 
              description: "24/7 Support",
              color: "from-blue-400 to-blue-600"
            },
            { 
              icon: MapPin, 
              title: "Visit Us", 
              info: "Ennasr, Tunisia", 
              description: "Central Location",
              color: "from-purple-400 to-purple-600"
            }
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{contact.title}</h3>
              <p className="text-blue-600 font-semibold text-lg mb-2">{contact.info}</p>
              <p className="text-blue-500">{contact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
 };
 
 // Footer Component
 const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Agence Kouki</h3>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Transforming language learning through immersive travel experiences since 2012.
            </p>
          </div>
          
          <div>
            
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-blue-200">
              <li>English Immersion</li>
              <li>Summer Intensive</li>
              <li>Cultural Exchange</li>
              <li>Business English</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-blue-200">
              <p>+216 20 268 908 </p>
              <p>Taoufik.kouki@hotmail.fr</p>
              <p>Ennasr, Tunisia</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200">
            © 2025 Agence Kouki. All rights reserved. | Designed with ❤️ 
          </p>
        </div>
      </div>
    </footer>
  );
 };
 
 // Main App Component
 const App = () => {
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
 
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SideNavigation />
          <HeroSection />
          <FeaturedCollection />
          <TripPrograms />
          <Accreditations />
          <SummerProgram />
          <Contact />
          <Footer />
        </motion.div>
      )}
      <ChatBot />
    </div>
  );
 };
 export default App;