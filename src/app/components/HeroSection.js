'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Play, Users, Globe, Award, 
  Heart, Camera, Mountain, Compass, Sun, MapPin 
} from 'lucide-react';

const HeroSection = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of group photos
  const groupPhotos = [
    "/images/travelers-group-1.jpg",
    "/images/travelers-group-2.jpg"
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-cycle between images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredImage === null) {
        setCurrentImageIndex((prev) => (prev + 1) % groupPhotos.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [hoveredImage, groupPhotos.length]);

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      {/* Dual Background Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* First Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url("${groupPhotos[0]}")`,
            filter: `blur(${hoveredImage === 0 ? '0px' : '25px'}) brightness(${hoveredImage === 0 ? '1.1' : '0.8'}) contrast(${hoveredImage === 0 ? '1.2' : '0.8'})`,
            opacity: hoveredImage === 0 ? '0.9' : (hoveredImage === 1 ? '0.05' : currentImageIndex === 0 ? '0.4' : '0.05'),
            transform: `scale(${hoveredImage === 0 ? '1.05' : '1'})`,
          }}
        />
        
        {/* Second Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url("${groupPhotos[1]}")`,
            filter: `blur(${hoveredImage === 1 ? '0px' : '25px'}) brightness(${hoveredImage === 1 ? '1.1' : '0.8'}) contrast(${hoveredImage === 1 ? '1.2' : '0.8'})`,
            opacity: hoveredImage === 1 ? '0.9' : (hoveredImage === 0 ? '0.05' : currentImageIndex === 1 ? '0.4' : '0.05'),
            transform: `scale(${hoveredImage === 1 ? '1.05' : '1'})`,
          }}
        />
        
        {/* Dynamic overlay that reduces when images are hovered */}
        <div 
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: hoveredImage !== null 
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(239, 246, 255, 0.5) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(239, 246, 255, 0.8) 100%)'
          }}
        />
        
        {/* Subtle pattern overlay - only when not hovering */}
        <div 
          className={`absolute inset-0 transition-opacity duration-700 ${hoveredImage !== null ? 'opacity-0' : 'opacity-10'}`}
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated geometric shapes */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-xl opacity-30"
        />
        
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.7, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute top-1/3 right-20 w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-xl opacity-25"
        />
        
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -100, 0],
            rotate: [0, 90, 180],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: 7 }}
          className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-xl opacity-20"
        />
        
        {/* Interactive floating icons with enhanced animations */}
        <motion.div
          style={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            x: { type: "spring", stiffness: 100, damping: 10 },
            y: { type: "spring", stiffness: 100, damping: 10 },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 right-1/4 opacity-30"
        >
          <Camera className="w-10 h-10 text-blue-600 drop-shadow-lg" />
        </motion.div>
        
        <motion.div
          style={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * 0.03,
          }}
          animate={{ 
            rotate: [0, -15, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            x: { type: "spring", stiffness: 80, damping: 12 },
            y: { type: "spring", stiffness: 80, damping: 12 },
            rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/3 right-1/3 opacity-25"
        >
          <Heart className="w-8 h-8 text-pink-500 drop-shadow-lg" />
        </motion.div>
        
        <motion.div
          style={{
            x: mousePosition.x * 0.04,
            y: mousePosition.y * -0.02,
          }}
          animate={{ 
            rotate: [0, 20, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            x: { type: "spring", stiffness: 120, damping: 8 },
            y: { type: "spring", stiffness: 120, damping: 8 },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-1/6 opacity-35"
        >
          <Compass className="w-9 h-9 text-green-600 drop-shadow-lg" />
        </motion.div>
        
        <motion.div
          style={{
            x: mousePosition.x * -0.025,
            y: mousePosition.y * 0.035,
          }}
          animate={{ 
            rotate: [0, 25, -25, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            x: { type: "spring", stiffness: 90, damping: 15 },
            y: { type: "spring", stiffness: 90, damping: 15 },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-3/4 right-1/6 opacity-20"
        >
          <Sun className="w-7 h-7 text-yellow-500 drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="mb-8"
          >
            <motion.span 
              whileHover={{ scale: 1.05, y: -3 }}
              className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 text-sm font-semibold shadow-2xl border border-blue-200/80 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 mr-3 text-blue-600" />
              </motion.div>
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">
                Discover Your Next Adventure
              </span>
            </motion.span>
          </motion.div>
          
          {/* Enhanced Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-tight"
          >
            <motion.span 
              className={`transition-all duration-700 ${
                hoveredImage !== null 
                  ? 'text-white drop-shadow-2xl' 
                  : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent drop-shadow-sm'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Explore the World
            </motion.span>
            <br />
            <motion.span 
              className={`relative transition-all duration-700 ${
                hoveredImage !== null 
                  ? 'text-white drop-shadow-2xl' 
                  : 'text-blue-900 drop-shadow-sm'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Through Language
              <motion.div
                className={`absolute -bottom-2 left-0 w-full h-1 rounded-full transition-all duration-700 ${
                  hoveredImage !== null 
                    ? 'bg-gradient-to-r from-yellow-300 to-yellow-500' 
                    : 'bg-gradient-to-r from-blue-400 to-blue-600'
                }`}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              />
            </motion.span>
          </motion.h1>
          
          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.4,
              type: "spring",
              stiffness: 120,
              damping: 20
            }}
            className={`text-xl md:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed font-medium transition-all duration-700 ${
              hoveredImage !== null 
                ? 'text-white drop-shadow-lg' 
                : 'text-gray-700'
            }`}
          >
            Immerse yourself in authentic cultural experiences while mastering new languages across{" "}
            <span className={`font-bold ${
              hoveredImage !== null 
                ? 'text-yellow-300 drop-shadow-lg' 
                : 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'
            }`}>
              breathtaking destinations
            </span>
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-20"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-800 text-white px-12 py-5 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center">
                Start Your Journey
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center text-blue-800 hover:text-blue-600 transition-colors font-medium"
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full flex items-center justify-center mr-4 shadow-xl border border-blue-200/80 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.3)"
                }}
              >
                <Play className="w-6 h-6 text-blue-600 ml-1" />
              </motion.div>
              <div>
                <p className="font-bold text-lg">Watch Our Story</p>
                <p className="text-sm text-blue-600">2 min inspiring video</p>
              </div>
            </motion.button>
          </motion.div>
          
          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { 
                icon: Users, 
                number: "2000+", 
                label: "Happy Travelers", 
                color: "from-blue-500 to-blue-700",
                description: "Life-changing experiences"
              },
              { 
                icon: Globe, 
                number: "25+", 
                label: "Countries", 
                color: "from-green-500 to-green-700",
                description: "Worldwide destinations"
              },
              { 
                icon: Award, 
                number: "12+", 
                label: "Years Experience", 
                color: "from-purple-500 to-purple-700",
                description: "Excellence in education"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.7 + index * 0.15,
                  type: "spring",
                  stiffness: 120,
                  damping: 20
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/80 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-4xl font-black text-blue-900 mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  
                  <p className="text-blue-700 font-bold text-lg mb-2">{stat.label}</p>
                  <p className="text-blue-600 text-sm font-medium">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced Dual Image Hover Areas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              {/* First Image Hover Area */}
              <motion.div
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredImage(0)}
                onMouseLeave={() => setHoveredImage(null)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl px-8 py-4 shadow-xl border border-blue-200/80 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <Camera className="w-6 h-6 text-blue-600" />
                    <div>
                      <span className="text-blue-800 font-bold text-lg block">
                        Adventure Group 1
                      </span>
                      <span className="text-blue-600 text-sm">
                        {hoveredImage === 0 ? "Amazing memories!" : "Hover to see"}
                      </span>
                    </div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {hoveredImage === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg"
                    >
                      Exploring together! 🌍
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Second Image Hover Area */}
              <motion.div
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredImage(1)}
                onMouseLeave={() => setHoveredImage(null)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl px-8 py-4 shadow-xl border border-purple-200/80 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-purple-600" />
                    <div>
                      <span className="text-purple-800 font-bold text-lg block">
                        Adventure Group 2
                      </span>
                      <span className="text-purple-600 text-sm">
                        {hoveredImage === 1 ? "Unforgettable moments!" : "Hover to see"}
                      </span>
                    </div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {hoveredImage === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-800 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg"
                    >
                      Learning & laughing! 📚
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Current Image Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 flex justify-center space-x-2"
            >
              {groupPhotos.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    (hoveredImage !== null ? hoveredImage === index : currentImageIndex === index)
                      ? 'bg-blue-600' 
                      : 'bg-blue-200'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;