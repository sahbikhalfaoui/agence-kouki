'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, Users, Award, BookOpen, MessageCircle, 
  Send, X, Globe, Star, Clock, CheckCircle, Phone, Mail, 
  ArrowRight, Play, Sparkles, Target, Zap, Heart, Plane,
  Camera, Mountain, Compass, Sun
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

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-blue-100' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Agence Kouki
            </h1>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Trips', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-blue-800 hover:text-blue-600 transition-colors font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Section Component

<FeaturedCollection />
// Trip Programs Component

// Accreditations Component

// Summer Program Component
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
          <Navigation />
          <HeroSection />
          <FeaturedCollection />
         
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
