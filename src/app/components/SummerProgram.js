'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, MapPin, Clock, Users, Award, BookOpen, 
  Send, Globe, Star, CheckCircle, Plane, Camera, 
  Utensils, Gamepad2, Music, Film, Trophy, Heart,
  GraduationCap, Shield, Eye, Building, Palette
} from 'lucide-react';

const SummerProgram = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const programFeatures = [
    {
      icon: GraduationCap,
      title: "27 Hours of Classes",
      description: "Intensive English courses with qualified teachers",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Eye,
      title: "5 Cultural Excursions",
      description: "Science Museums, Natural History Museum, Madame Tussauds",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Building,
      title: "London City Tour",
      description: "Buckingham Palace, Piccadilly Circus, Trafalgar Square",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Utensils,
      title: "Complete Halal Boarding",
      description: "Accommodation with halal food buffet",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: Trophy,
      title: "Sports Activities",
      description: "Swimming, sports, badminton from 2PM to 11PM",
      color: "from-red-500 to-red-700"
    },
    {
      icon: Globe,
      title: "Conversation Club",
      description: "Practice English with different nationalities",
      color: "from-teal-500 to-teal-700"
    },
    {
      icon: Film,
      title: "Evening Activities",
      description: "Cinema, theater, karaoke and international games",
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: Award,
      title: "British Council Approved",
      description: "Program approved for 20 years",
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  const highlights = [
    { icon: Calendar, label: "Duration", value: "13 days", color: "text-blue-600" },
    { icon: MapPin, label: "Destination", value: "London", color: "text-green-600" },
    { icon: Users, label: "Guide", value: "Mr. Kouki", color: "text-purple-600" },
    { icon: Shield, label: "Supervision", value: "24/7 Parental Control", color: "text-orange-600" }
  ];

  return (
    <section id="summer" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <Plane className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Linguistic Stay in London
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            With <span className="text-blue-600 font-bold">Mr. Kouki</span> - 
            The only program in Tunisia offering a 13-day stay
          </p>
        </motion.div>

        {/* Program Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center group"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <p className="text-sm text-gray-600 font-medium mb-2">{item.label}</p>
              <p className="font-bold text-gray-900 text-lg">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Program Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {programFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 mb-16 text-white relative overflow-hidden"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"
          />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              🌟 Special Inclusions 🌟
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Plane className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-semibold mb-2">All transfers included</h4>
                <p className="text-blue-100">Complete transport and site entries</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Heart className="w-12 h-12 mx-auto mb-4 text-pink-300" />
                <h4 className="text-xl font-semibold mb-2">Real-time parental tracking</h4>
                <p className="text-blue-100">Parents can monitor and share all activities</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl relative overflow-hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-300/40 rounded-full blur-2xl"
            />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Reserve Your Spot
                </h3>
                <p className="text-gray-600 text-lg">
                  Limited spots - Quick and secure registration
                </p>
              </div>
              
              <div className="flex justify-center items-center space-x-12 mb-8">
                <div className="text-center">
                  <motion.span 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl md:text-5xl font-bold text-green-600"
                  >
                    Limited
                  </motion.span>
                  <p className="text-green-500 font-medium">Spots</p>
                </div>
                <div className="text-center">
                  <motion.span 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-blue-600"
                  >
                    13
                  </motion.span>
                  <p className="text-blue-500 font-medium">Days</p>
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
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-lg"
                    placeholder="Full name"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-lg"
                    placeholder="Email address"
                  />
                </div>
                
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-lg"
                  placeholder="Phone number"
                />
                
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 resize-none text-lg"
                  placeholder="Message or additional questions..."
                />
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg md:text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                  Book Now
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">British Council Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">20 years experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span className="text-sm">Unique program in Tunisia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummerProgram;