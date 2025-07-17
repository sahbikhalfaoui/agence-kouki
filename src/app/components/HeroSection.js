'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Users, Globe, Award, 
  Heart, Camera, Compass, Sun, Play, Pause, Volume2
} from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState(null);

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

  const toggleVideo = () => {
    if (videoRef) {
      if (isVideoPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
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
        
        {/* Interactive floating icons */}
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
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent drop-shadow-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Explore the World
            </motion.span>
            <br />
            <motion.span 
              className="relative text-blue-900 drop-shadow-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Through Language
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
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
            className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed font-medium text-gray-700"
          >
            Immerse yourself in authentic cultural experiences while mastering new languages across{" "}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              breathtaking destinations
            </span>
          </motion.p>
          
          {/* Enhanced Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-200/80"
              >
                <video
                  ref={setVideoRef}
                  className="w-full h-64 md:h-96 object-cover"
                  poster="/api/placeholder/800/400"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  controls={false}
                >
                  <source src="/vid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Custom Video Controls Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    onClick={toggleVideo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 shadow-2xl transition-all duration-300"
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-8 h-8 text-blue-800" />
                    ) : (
                      <Play className="w-8 h-8 text-blue-800 ml-1" />
                    )}
                  </motion.button>
                </div>
                
                {/* Video Info Badge */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Our Story</span>
                  </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>
              
              {/* Video Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-center"
              >
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Discover the magic of language learning adventures
                </p>
                <p className="text-sm text-gray-500">
                  Watch inspiring stories from our global community
                </p>
              </motion.div>
            </div>
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
                number: "3+", 
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;