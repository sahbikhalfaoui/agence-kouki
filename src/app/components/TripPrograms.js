'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle } from 'lucide-react';

const TripPrograms = () => {
  return (
    <section id="trips" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Our Current Program
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exclusive linguistic journey to London with comprehensive cultural immersion
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-white to-blue-500 rounded-t-3xl" />
            
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Linguistic Journey to London
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                With Mr. Kouki - 13 Days
              </p>
              <p className="text-sm text-gray-500 font-medium bg-gray-100 px-4 py-2 rounded-full inline-block">
                The only program in Tunisia offering a 13-day stay
              </p>
            </div>

            {/* Program Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column - Main Features */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Program Structure
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      27 hours of English classes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      13 days comprehensive stay
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Complete pension accommodation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Halal food buffet included
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-red-600" />
                    5 Cultural Excursions
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Science Museums & Natural History Museum</li>
                    <li>• Madame Tussauds Wax Museum</li>
                    <li>• Walking Tour: Buckingham Palace</li>
                    <li>• Piccadilly Circus & Trafalgar Square</li>
                    <li>• All transfers and entrance fees included</li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Activities */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Daily Activities (2PM - 11PM)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Swimming & Sports
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Badminton & Recreation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Conversation clubs with international students
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      Practice English with different nationalities
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Evening Activities
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cinema & Theatre visits</li>
                    <li>• Karaoke sessions</li>
                    <li>• International mixed games</li>
                    <li>• Cultural exchange programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications & Supervision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="font-bold text-green-900 mb-3">
                  Official Certification
                </h4>
                <p className="text-green-800">
                  Program approved by British Council for 20 years
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">
                  Parental Control
                </h4>
                <p className="text-blue-800">
                  Parents can monitor their children in real-time and share all activities
                </p>
              </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-gray-500/25 transition-all duration-300"
            >
              Join This Exclusive Program
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TripPrograms;