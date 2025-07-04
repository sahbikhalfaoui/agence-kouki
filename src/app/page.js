'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, Users, Award, BookOpen, MessageCircle, 
  Send, X, Globe, Star, Clock, CheckCircle, Phone, Mail, 
  ArrowRight, Play, Sparkles, Target, Zap, Heart, Plane,
  Camera, Mountain, Compass, Sun
} from 'lucide-react';

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
            {['Home', 'Trips', 'About', 'Contact'].map((item, index) => (
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
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-1/3 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -100, 0],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-blue-500 rounded-full opacity-15"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold shadow-lg">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Discover Your Next Adventure
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
              Explore the World
            </span>
            <br />
            <span className="text-blue-900">Through Language</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-700 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Immerse yourself in authentic cultural experiences while mastering new languages across breathtaking destinations
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="group flex items-center text-blue-800 hover:text-blue-600 transition-colors font-medium"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors shadow-lg">
                <Play className="w-5 h-5 text-blue-600" />
              </div>
              Watch Our Story
            </motion.button>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, number: "2000+", label: "Happy Travelers", color: "from-blue-500 to-blue-700" },
              { icon: Globe, number: "25+", label: "Countries", color: "from-blue-600 to-blue-800" },
              { icon: Award, number: "12+", label: "Years Experience", color: "from-blue-700 to-blue-900" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</h3>
                <p className="text-blue-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Featured Collection Component
const FeaturedCollection = () => {
  return (
    <section id="collection" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900">
            Featured Collection
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Discover our latest and most innovative travel experiences
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 overflow-hidden shadow-2xl">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-blue-500/30 rounded-full blur-xl"
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-blue-600 bg-white px-4 py-2 rounded-full shadow-lg"
                >
                  2025
                </motion.span>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-500 fill-current animate-pulse" />
                  <span className="text-yellow-600 font-semibold bg-yellow-100 px-3 py-1 rounded-full">Latest</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Enhanced Cultural Immersion</h3>
              <p className="text-blue-700 mb-6 text-lg leading-relaxed">
                Revolutionary travel experience combining cutting-edge technology with authentic cultural immersion across the stunning landscapes of the British Isles.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Users, label: "Participants", value: "150 Travelers", color: "bg-blue-100 text-blue-600" },
                  { icon: MapPin, label: "Destinations", value: "UK, Ireland, Malta", color: "bg-blue-100 text-blue-600" },
                  { icon: Zap, label: "Innovation", value: "Powered", color: "bg-blue-100 text-blue-600" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-lg"
                  >
                    <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 font-medium">{item.label}</p>
                      <p className="font-semibold text-blue-900">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Trip Programs Component
const TripPrograms = () => {
  return (
    <section id="trips" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900">
            Our Trip Programs
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Immersive experiences designed to transform your language learning journey
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-3xl" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">Intensive English Immersion</h3>
                <p className="text-blue-700">Complete language transformation in stunning destinations</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <span className="text-3xl font-bold text-blue-600">€2,500</span>
                <p className="text-blue-500">All inclusive</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                {[
                  { icon: Clock, text: "4 weeks intensive", color: "text-blue-600" },
                  { icon: MapPin, text: "London, UK", color: "text-blue-600" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-blue-800 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-4">
                {["Native speakers", "Cultural activities", "Accommodation", "Certification"].map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Explore This Program
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Accreditations Component
const Accreditations = () => {
  return (
    <section id="accreditations" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900">
            Accreditations & Certifications
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Recognized and certified by leading language institutions worldwide
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border border-yellow-200 text-center shadow-2xl">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">Cambridge English Authorized Center</h3>
            <p className="text-yellow-700 mb-4 font-medium">Official certification partner since 2017</p>
            <p className="text-yellow-600 font-semibold bg-yellow-200 px-4 py-2 rounded-full inline-block">
              Cambridge Assessment English
            </p>
            
            <div className="mt-8 flex items-center justify-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center shadow-lg"
              >
                <Target className="w-6 h-6 text-yellow-600" />
              </motion.div>
              <div className="text-left">
                <p className="text-sm text-yellow-600 font-medium">Certification Rate</p>
                <p className="font-bold text-yellow-800 text-lg">98% Success</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Summer Program Component
const SummerProgram = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="summer" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900">
            Join Our Summer Program
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Limited spots available for our flagship summer intensive program
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-2xl relative overflow-hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/40 to-blue-300/40 rounded-full blur-2xl"
            />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Summer Intensive English Program</h3>
                <p className="text-blue-700 text-lg">
                  Experience authentic Irish culture while perfecting your English skills in the heart of Dublin
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Calendar, label: "Start Date", value: "July 15, 2025", color: "from-green-400 to-green-600" },
                  { icon: Clock, label: "Duration", value: "4 weeks", color: "from-blue-400 to-blue-600" },
                  { icon: MapPin, label: "Location", value: "Dublin, Ireland", color: "from-purple-400 to-purple-600" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="text-center bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-blue-600 font-medium mb-1">{item.label}</p>
                    <p className="font-bold text-blue-900">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-center items-center space-x-12 mb-8">
                <div className="text-center">
                  <span className="text-4xl font-bold text-green-600">€2,750</span>
                  <p className="text-green-500 font-medium">Total Cost</p>
                </div>
                <div className="text-center">
                  <motion.span 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl font-bold text-red-600"
                  >
                    12
                  </motion.span>
                  <p className="text-red-500 font-medium">Spots Left</p>
                </div>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-900 placeholder-blue-400"
                    placeholder="Full Name"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-900 placeholder-blue-400"
                    placeholder="Email Address"
                  />
                </div>
                
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-900 placeholder-blue-400"
                  placeholder="Phone Number"
                />
                
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-900 placeholder-blue-400 resize-none"
                  placeholder="Tell us about your language learning goals..."
                />
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Reserve Your Spot
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
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
              info: "+216 71 123 456", 
              description: "Mon-Fri 9AM-6PM",
              color: "from-green-400 to-green-600"
            },
            { 
              icon: Mail, 
              title: "Email Us", 
              info: "info@agencekouki.tn", 
              description: "24/7 Support",
              color: "from-blue-400 to-blue-600"
            },
            { 
              icon: MapPin, 
              title: "Visit Us", 
              info: "Tunis, Tunisia", 
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
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Programs', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-blue-200 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
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
              <p>+216 70 000 000</p>
              <p>info@agencekouki.tn</p>
              <p>Tunis, Tunisia</p>
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
          <TripPrograms />
          <Accreditations />
          <SummerProgram />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
 };
 
 export default App;