'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Brain, Music, BarChart3, Sparkles, ArrowRight, Star, CheckCircle, Users, Shield } from 'lucide-react';

export default function LandingPage() {
  const [backgroundOrbs, setBackgroundOrbs] = useState<Array<{
    id: number;
    color: string;
    size: number;
    left: string;
    top: string;
    x: number;
    y: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];
    const orbs = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      size: Math.random() * 250 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: Math.random() * 60 - 30,
      y: Math.random() * 60 - 30,
      duration: 8 + Math.random() * 6
    }));
    setBackgroundOrbs(orbs);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              width: orb.size,
              height: orb.size,
              left: orb.left,
              top: orb.top,
            }}
            animate={{
              x: [0, orb.x, -orb.x, 0],
              y: [0, orb.y, -orb.y, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.1, 0.3, 0.15, 0.1]
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.id * 0.4
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute text-white/10"
            initial={{ 
              x: `${20 + i * 15}%`, 
              y: `${30 + i * 10}%`,
              scale: 0 
            }}
            animate={{ 
              y: `${20 + i * 10}%`,
              scale: [0.5, 1, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          >
            {i % 2 === 0 ? <Heart size={40} /> : <Sparkles size={35} />}
          </motion.div>
        ))}
      </div>
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <Heart className="text-pink-400 w-12 h-12" />
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              InnerHue
            </h1>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/emotions" 
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Skip to App
            </Link>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center py-16 md:py-24"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="mb-12"
            >
              <motion.div
                className="inline-block mb-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-pink-300/30 text-pink-200 font-semibold text-lg">
                  🧠 Understand Your Emotions Better
                </div>
              </motion.div>

              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
                Discover your{' '}
                <motion.span 
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  emotional universe
                </motion.span>
              </h2>
              
              <motion.p 
                className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto drop-shadow-lg leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Navigate 38+ emotional states with personalized insights, therapeutic music, 
                and guided reflection journeys that help you understand yourself deeper.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/emotions">
                <motion.button
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: '0 25px 50px rgba(147, 51, 234, 0.6)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-purple-500/60 transition-all duration-500 flex items-center gap-3 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <Heart className="w-6 h-6" />
                  Start Your Journey
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-5 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/40 hover:bg-white/20 transition-all duration-300 text-lg font-semibold shadow-lg"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-16 flex items-center justify-center gap-8 text-white/70"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Privacy First</span>
              </div>
            </motion.div>
          </motion.section>

          {/* Features Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-24 md:py-32"
          >
            <div className="text-center mb-20">
              <motion.h3 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Experience Emotional Wellness
              </motion.h3>
              <motion.p 
                className="text-2xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                A comprehensive platform designed for deep self-discovery and emotional growth
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Deep Reflection',
                  description: 'Explore 38+ distinct emotional states with guided introspection and personalized prompts.',
                  color: 'from-purple-500 to-indigo-600',
                  delay: 0.1
                },
                {
                  icon: Sparkles,
                  title: 'AI-Powered Insights',
                  description: 'Get intelligent suggestions and affirmations tailored to your unique emotional patterns.',
                  color: 'from-pink-500 to-rose-600',
                  delay: 0.2
                },
                {
                  icon: Music,
                  title: 'Therapeutic Audio',
                  description: 'Discover curated playlists and ambient soundscapes designed to enhance your mood.',
                  color: 'from-blue-500 to-cyan-600',
                  delay: 0.3
                },
                {
                  icon: BarChart3,
                  title: 'Mood Analytics',
                  description: 'Track emotional patterns with beautiful visualizations and detailed progress reports.',
                  color: 'from-green-500 to-emerald-600',
                  delay: 0.4
                }
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: feature.delay, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)'
                  }}
                  className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 group"
                >
                  <motion.div 
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 text-center"
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Loved by Thousands
            </motion.h3>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  text: "InnerHue helped me understand my anxiety patterns and find peace through guided reflection.",
                  author: "Sarah, 28",
                  rating: 5
                },
                {
                  text: "The personalized insights have transformed how I process my emotions. Life-changing experience!",
                  author: "Michael, 34", 
                  rating: 5
                },
                {
                  text: "Beautiful interface and genuinely helpful tools. My emotional awareness has grown tremendously.",
                  author: "Emma, 25",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic text-lg">"{testimonial.text}"</p>
                  <p className="text-purple-300 font-semibold">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center py-20"
          >
            <div className="max-w-4xl mx-auto">
              <motion.h3 
                className="text-5xl md:text-6xl font-bold text-white mb-8"
                animate={{ 
                  backgroundImage: [
                    'linear-gradient(45deg, #ffffff, #e879f9)',
                    'linear-gradient(45deg, #e879f9, #3b82f6)', 
                    'linear-gradient(45deg, #3b82f6, #ffffff)'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                Ready to discover your
                <br />
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  emotional depth?
                </span>
              </motion.h3>
              
              <motion.p 
                className="text-2xl text-gray-300 mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Join the community of mindful individuals transforming their relationship with emotions.
                <br />
                <span className="text-purple-300 font-semibold">Start your journey in just 30 seconds.</span>
              </motion.p>
              
              <Link href="/emotions">
                <motion.button
                  whileHover={{ 
                    scale: 1.08, 
                    boxShadow: '0 30px 60px rgba(147, 51, 234, 0.7)',
                    filter: 'brightness(1.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-16 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-purple-500/60 transition-all duration-500 flex items-center gap-4 mx-auto group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    animate={{ x: ['-150%', '150%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                  />
                  <Heart className="w-8 h-8" />
                  Begin Your Emotional Journey
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-300" />
                </motion.button>
              </Link>
              
              <motion.div
                className="mt-8 flex items-center justify-center gap-6 text-white/60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No signup required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Privacy protected</span>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </main>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 p-8 border-t border-white/20 bg-black/20 backdrop-blur"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-pink-400 w-8 h-8" />
            <h4 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              InnerHue
            </h4>
          </div>
          <p className="text-gray-400 text-lg">
            &copy; 2026 InnerHue. Crafted with love for emotional well-being and self-discovery.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}