import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, Star, CheckCircle, Globe, Trophy, User, Building, GraduationCap, Crown, Calendar, Target, TrendingUp, Users } from 'lucide-react';

const Accreditations = () => {
  const [currentCertificate, setCurrentCertificate] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certificates = [
    {
      id: 1,
      title: "English Language Course Diploma",
      institution: "Ardmore Language Schools",
      holder: "Sara Bellili",
      description: "Successfully completed 300-hour intensive English Language Course at Brunel University with exceptional performance and dedication",
      level: "B2 CEF Level",
      date: "12th - 24th August 2024",
      accreditation: "British Council & Trinity College London",
      type: "student",
      score: "Overall: 74/100 | Speaking: 63/100",
      progress: "Excellent Progress",
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50 via-teal-50 to-cyan-50",
      icon: GraduationCap,
      details: {
        course: "300-hour intensive program",
        skills: "Grammar, Vocabulary, Listening, Speaking, Reading, Writing",
        performance: "Consistently exceeded expectations"
      }
    },
    {
      id: 2,
      title: "Academic Excellence Report",
      institution: "Ardmore Language Schools",
      holder: "Sara Bellili",
      description: "Comprehensive academic assessment showcasing outstanding classroom participation and remarkable improvement in all language skills",
      level: "Very Good to Excellent Performance",
      date: "August 2024",
      accreditation: "British Council Accredited Institution",
      type: "student",
      score: "Final Assessment: 74/100 | Speaking: 63/100",
      progress: "Outstanding Development",
      color: "from-blue-500 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
      icon: TrendingUp,
      details: {
        participation: "Excellent classroom activities",
        initiative: "Very good integration and leadership",
        activities: "Active in English-led activities"
      }
    },
    {
      id: 3,
      title: "Certificate of Representation",
      institution: "Ardmore Language Schools",
      holder: "Taoufik Kouki - Kouki Travel",
      description: "Official authorized agent and representative for Ardmore Language Schools Ltd. in Tunisia, facilitating educational partnerships",
      level: "Certified Partner & Agent",
      date: "2024",
      accreditation: "British Council for Teaching English",
      type: "partner",
      score: "Partnership Status: Active Representative",
      progress: "Established Partnership",
      color: "from-amber-500 via-orange-500 to-red-500",
      bgGradient: "from-amber-50 via-orange-50 to-red-50",
      icon: Crown,
      details: {
        role: "Authorized Agent",
        location: "Tunisia Representative",
        services: "Student recruitment and support"
      }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentCertificate((prev) => (prev + 1) % certificates.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, certificates.length]);

  const handleNavigation = (direction) => {
    setIsAutoPlaying(false);
    setCurrentCertificate((prev) => {
      if (direction === 'next') return (prev + 1) % certificates.length;
      return (prev - 1 + certificates.length) % certificates.length;
    });
  };

  const currentCert = certificates[currentCertificate];

  return (
    <section className="py-24 px-4 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-24 h-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl mr-6"
            >
              <Award className="w-12 h-12 text-white" />
            </motion.div>
            <div className="text-left">
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
                Certifications
              </h2>
              <p className="text-2xl text-gray-600 mt-2 font-semibold">& Achievements</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Showcasing our students remarkable achievements and our official partnerships with world-renowned institutions.
            </p>
            <p className="text-lg font-semibold text-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full inline-block">
              ✨ Every certificate represents a success story worth celebrating
            </p>
          </div>
        </motion.div>

        {/* Premium Certificate Display */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 rounded-3xl blur-3xl transform scale-110 animate-pulse"></div>
            
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
              <div className="grid grid-cols-1 xl:grid-cols-2 min-h-[600px]">
                {/* Certificate Preview */}
                <div className={`relative bg-gradient-to-br ${currentCert.bgGradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5"></div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentCertificate}
                      initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center p-8"
                    >
                      <div className="text-center max-w-md">
                        <div className={`w-32 h-32 bg-gradient-to-r ${currentCert.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl`}>
                          <currentCert.icon className="w-16 h-16 text-white" />
                        </div>
                        
                        <div className="space-y-4">
                          <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r ${currentCert.color} shadow-lg`}>
                            {currentCert.type === 'student' ? (
                              <>
                                <User className="w-4 h-4 mr-2" />
                                Student Achievement
                              </>
                            ) : (
                              <>
                                <Building className="w-4 h-4 mr-2" />
                                Official Partnership
                              </>
                            )}
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                            {currentCert.title}
                          </h3>
                          
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                            <div className="flex items-center justify-center mb-4">
                              <div className={`w-16 h-16 bg-gradient-to-r ${currentCert.color} rounded-full flex items-center justify-center`}>
                                <Trophy className="w-8 h-8 text-white" />
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 font-medium">
                              {currentCert.holder}
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              {currentCert.institution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Enhanced Navigation */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleNavigation('prev')}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleNavigation('next')}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700" />
                    </motion.button>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-8 xl:p-12 bg-gradient-to-br from-white to-gray-50/50">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentCertificate}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center">
                            <div className={`w-4 h-4 bg-gradient-to-r ${currentCert.color} rounded-full mr-4`}></div>
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                              {currentCert.institution}
                            </span>
                          </div>
                          <div className={`px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${currentCert.color}`}>
                            {currentCert.type === 'student' ? 'Student' : 'Partner'}
                          </div>
                        </div>
                        
                        <h3 className="text-3xl xl:text-4xl font-black text-gray-800 mb-6 leading-tight">
                          {currentCert.title}
                        </h3>
                        
                        <div className="space-y-6 mb-8">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1 font-medium">Certificate Holder</p>
                              <p className="text-lg font-bold text-gray-800">{currentCert.holder}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-2 font-medium">Achievement Details</p>
                              <p className="text-gray-700 leading-relaxed">{currentCert.description}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg">
                              <Target className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-2 font-medium">Level & Performance</p>
                              <p className="font-bold text-gray-800 mb-1">{currentCert.level}</p>
                              <p className="text-sm text-gray-600 mb-2">{currentCert.score}</p>
                              <p className="text-sm font-semibold text-green-600">{currentCert.progress}</p>
                            </div>
                          </div>

                          {/* Additional Details */}
                          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                            <h4 className="text-sm font-bold text-gray-700 mb-3">Key Highlights</h4>
                            {Object.entries(currentCert.details).map(([key, value]) => (
                              <div key={key} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                                <span className="text-gray-600 capitalize">{key}:</span>
                                <span className="text-gray-800 ml-2 font-medium">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className={`bg-gradient-to-r ${currentCert.bgGradient} rounded-2xl p-6 border-2 border-gray-100 shadow-lg`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center mb-2">
                              <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                              <p className="text-sm text-gray-500 font-medium">Completion Date</p>
                            </div>
                            <p className="text-lg font-bold text-gray-800">{currentCert.date}</p>
                            <p className="text-sm text-gray-600 mt-1">{currentCert.accreditation}</p>
                          </div>
                          <div className={`w-16 h-16 bg-gradient-to-r ${currentCert.color} rounded-full flex items-center justify-center shadow-xl`}>
                            <Trophy className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Controls */}
        <div className="flex flex-col items-center space-y-8 mb-20">
          <div className="flex items-center space-x-6">
            {certificates.map((cert, index) => (
              <motion.button
                key={cert.id}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setCurrentCertificate(index);
                  setIsAutoPlaying(false);
                }}
                className={`relative transition-all duration-500 ${
                  index === currentCertificate 
                    ? 'w-16 h-5' 
                    : 'w-5 h-5'
                }`}
              >
                <div className={`w-full h-full rounded-full transition-all duration-500 ${
                  index === currentCertificate 
                    ? `bg-gradient-to-r ${cert.color} shadow-lg` 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}></div>
                {index === currentCertificate && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-white/30 animate-pulse"
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-lg border-2 ${
              isAutoPlaying 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/25 border-transparent' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-gray-200 border-gray-200'
            }`}
          >
            {isAutoPlaying ? '⏸️ Pause Auto-Play' : '▶️ Start Auto-Play'}
          </motion.button>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { 
              icon: Award, 
              title: "British Council", 
              subtitle: "Accredited Partner",
              color: "from-blue-500 to-indigo-600",
              description: "Official certification partner for English teaching excellence"
            },
            { 
              icon: Trophy, 
              title: "Trinity College", 
              subtitle: "Certified Institution",
              color: "from-purple-500 to-pink-600",
              description: "Recognized for outstanding educational standards"
            },
            { 
              icon: Users, 
              title: "Student Success", 
              subtitle: "Proven Results",
              color: "from-amber-500 to-orange-600",
              description: "Consistent academic achievement and progress"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                <item.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 font-medium mb-3">{item.subtitle}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Accreditations;