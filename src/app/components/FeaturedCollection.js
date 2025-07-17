'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, MapPin, Calendar, 
  Star, Award, Heart, Camera, Sparkles, Play, Wind
} from 'lucide-react';

const FeaturedCollection = () => {
  const [activeYear, setActiveYear] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const programYears = [
    {
      year: '2025',
      title: 'London Kookies',
      location: 'London, UK',
      rating: 4.9,
      highlight: 'Linguistic Trip with Fun Activities',
      image: '/images/2025.jpg',
      color: 'from-orange-400 to-red-500',
      lightColor: 'from-orange-100 to-red-100',
      accent: 'orange-500'
    },
    {
      year: '2024',
      title: 'Brunel Kookies',
      location: 'Brunel, UK',
      rating: 4.8,
      highlight: 'Linguistic Trip with Fun Activities',
      image: '/images/2024.jpg',
      color: 'from-blue-400 to-cyan-500',
      lightColor: 'from-blue-100 to-cyan-100',
      accent: 'blue-500'
    },
    {
      year: '2023',
      title: 'Shiplake Kookies',
      location: 'Shiplake, UK',
      rating: 4.9,
      highlight: 'Linguistic Trip with Fun Activities',
      image: '/images/2023-1.jpg',
      color: 'from-green-400 to-emerald-500',
      lightColor: 'from-green-100 to-emerald-100',
      accent: 'green-500'
    },
    {
      year: '2023',
      title: 'Ardmore Kookies',
      location: 'Ardmore, UK',
      rating: 4.7,
      highlight: 'Linguistic Trip with Fun Activities',
      image: '/images/2023-2.jpg',
      color: 'from-purple-400 to-pink-500',
      lightColor: 'from-purple-100 to-pink-100',
      accent: 'purple-500'
    },
    {
      year: '2022',
      title: 'Ardmore Shiplake',
      location: 'Ardmore & Shiplake, UK',
      rating: 4.6,
      highlight: 'Linguistic Trip with Fun Activities',
      image: '/images/2022.jpg',
      color: 'from-indigo-400 to-blue-500',
      lightColor: 'from-indigo-100 to-blue-100',
      accent: 'indigo-500'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveYear((prev) => (prev + 1) % programYears.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, programYears.length]);

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveYear((prev) => (prev + 1) % programYears.length);
    }
    if (isRightSwipe) {
      setActiveYear((prev) => (prev - 1 + programYears.length) % programYears.length);
    }
  };

  const nextYear = () => {
    setActiveYear((prev) => (prev + 1) % programYears.length);
  };

  const prevYear = () => {
    setActiveYear((prev) => (prev - 1 + programYears.length) % programYears.length);
  };

  // Animated background elements
  const AnimatedShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className={`absolute rounded-full bg-gradient-to-r ${programYears[activeYear].lightColor} opacity-30`}
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        >
          <Sparkles className={`w-4 h-4 text-${programYears[activeYear].accent}`} />
        </motion.div>
      ))}

      {/* Geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute bg-gradient-to-r ${programYears[activeYear].lightColor} opacity-20`}
          style={{
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            clipPath: i % 2 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden min-h-screen">
      <AnimatedShapes />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-gray-200/50 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Camera className="w-6 h-6 mr-3 text-gray-600" />
            </motion.div>
            <span className="text-gray-700 font-semibold text-lg">Memory Lane</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black mb-6 text-gray-900"
          >
            Previous Years
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={`block bg-gradient-to-r ${programYears[activeYear].color} bg-clip-text text-transparent`}
            >
              Kookies Adventures
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Relive the incredible moments from our linguistic trips filled with fun activities across the UK
          </motion.p>
        </motion.div>

        {/* Main Photo Display */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, scale: 0.8, rotateY: 25 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -25 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative group"
            >
              {/* Animated Background Blob */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute -inset-4 bg-gradient-to-r ${programYears[activeYear].lightColor} rounded-[3rem] blur-xl opacity-30`}
              />

              {/* Main Photo Container */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
                {/* Photo */}
                <div className="relative h-[500px] md:h-[600px] bg-gray-100">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={programYears[activeYear].image}
                    alt={programYears[activeYear].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Year Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className={`absolute top-8 left-8 w-20 h-20 bg-gradient-to-r ${programYears[activeYear].color} rounded-full flex items-center justify-center shadow-xl border-4 border-white`}
                  >
                    <span className="text-white font-bold text-xl">
                      {programYears[activeYear].year}
                    </span>
                  </motion.div>

                  {/* Rating Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 flex items-center space-x-2 shadow-lg border border-gray-200/50"
                  >
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-bold text-gray-800 text-lg">{programYears[activeYear].rating}</span>
                  </motion.div>

                  {/* Play Button Overlay */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-gray-200/50 cursor-pointer group-hover:bg-white transition-colors"
                    >
                      <Play className="w-10 h-10 text-gray-700 ml-1" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom Info Panel */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="p-8 bg-white"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        {programYears[activeYear].title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span className="text-lg">{programYears[activeYear].location}</span>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`inline-block px-6 py-3 bg-gradient-to-r ${programYears[activeYear].color} rounded-full text-white font-semibold shadow-lg`}
                      >
                        {programYears[activeYear].highlight}
                      </motion.span>
                    </div>
                    
                    <div className="flex items-center space-x-8">
                      <div className="text-center">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                          className="flex items-center justify-center mb-2"
                        >
                          <Heart className="w-6 h-6 text-red-500" />
                        </motion.div>
                        <div className="text-3xl font-bold text-gray-900">{programYears[activeYear].rating}</div>
                        <div className="text-sm text-gray-500">Rating</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevYear}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 shadow-xl border border-gray-200/50 hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextYear}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 shadow-xl border border-gray-200/50 hover:bg-white transition-colors"
          >
            <ChevronRight className="w-7 h-7" />
          </motion.button>
        </div>

        {/* Year Timeline */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200/50 overflow-x-auto">
            {programYears.map((program, index) => (
              <motion.button
                key={`${program.year}-${index}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveYear(index)}
                className={`relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap ${
                  index === activeYear
                    ? `bg-gradient-to-r ${program.color} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {program.year} {program.title.split(' ')[0]}
                {index === activeYear && (
                  <motion.div
                    layoutId="activeYearBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 border-2 border-white/40"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${programYears[activeYear].color} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${((activeYear + 1) / programYears.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
          <div className="flex justify-between mt-3 text-gray-500 text-sm font-medium">
            <span>2022</span>
            <span className="font-bold text-gray-700">
              {activeYear + 1} / {programYears.length}
            </span>
            <span>2025</span>
          </div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { icon: MapPin, label: "UK Destinations", value: "5+", color: "from-blue-400 to-cyan-500" },
            { icon: Calendar, label: "Linguistic Programs", value: "5", color: "from-purple-400 to-pink-500" },
            { icon: Award, label: "Years of Excellence", value: "4", color: "from-orange-400 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-gray-200/50"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3">{stat.value}</h3>
              <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollection;