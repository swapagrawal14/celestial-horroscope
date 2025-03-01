
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { getUserProfile, getUserHoroscope, setUserBirthdate } from '@/utils/astrology';
import { HoroscopeCard } from '@/components/HoroscopeCard';
import { PlanetaryInfluence } from '@/components/PlanetaryInfluence';
import { CalendarDays, BookOpen, Calculator, Star } from 'lucide-react';
import { Header } from '@/components/Header';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userProfile = getUserProfile();

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // For demo purposes, ensure we have a birthdate set
  useEffect(() => {
    if (!userProfile.birthdate) {
      setUserBirthdate(new Date(1990, 5, 15));
    }
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="pt-24 px-4 md:px-6 max-w-7xl mx-auto">
        <AnimatePresence>
          {loading ? (
            <motion.div 
              key="loading"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-[70vh]"
            >
              <div className="relative w-24 h-24">
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-primary border-opacity-20"
                  style={{ borderRadius: "50%" }}
                  animate={{ scale: [1, 1.1, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute inset-2 rounded-full border-2 border-primary border-opacity-40"
                  style={{ borderRadius: "50%" }}
                  animate={{ scale: [1, 1.15, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.div 
                  className="absolute inset-4 rounded-full border-2 border-primary border-opacity-60"
                  style={{ borderRadius: "50%" }}
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Reading the stars...</p>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              {/* Hero section */}
              <section className="text-center max-w-3xl mx-auto mt-8 md:mt-16">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Your Cosmic Journey Awaits
                </motion.h1>
                <motion.p 
                  className="mt-4 text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Explore the stars, understand yourself, and manifest your dreams
                </motion.p>
              </section>
              
              {/* Daily horoscope */}
              <section className="mt-12">
                <div className="mb-6">
                  <h2 className="text-2xl font-serif">Your Daily Horoscope</h2>
                  <p className="text-muted-foreground mt-1">
                    {userProfile.zodiacSign ? `Cosmic insights for ${userProfile.zodiacSign}` : 'Set your birthdate to see your horoscope'}
                  </p>
                </div>
                
                {userProfile.zodiacSign && (
                  <HoroscopeCard 
                    sign={userProfile.zodiacSign} 
                    horoscope={getUserHoroscope()} 
                    date={new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  />
                )}
                
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" onClick={() => navigate('/horoscope')}>
                    <Star className="mr-2 h-4 w-4" />
                    See All Horoscopes
                  </Button>
                </div>
              </section>
              
              {/* Planetary influences */}
              <section className="mt-12">
                <h2 className="text-2xl font-serif mb-6">Planetary Influences</h2>
                <PlanetaryInfluence />
              </section>
              
              {/* Features */}
              <section className="mt-16">
                <h2 className="text-2xl font-serif mb-8 text-center">Explore Your Cosmic Toolkit</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border"
                  >
                    <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                      <CalendarDays className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Daily Horoscopes</h3>
                    <p className="text-muted-foreground text-sm">
                      Discover your daily cosmic insights and understand how the stars influence your day.
                    </p>
                    <Button 
                      variant="ghost" 
                      className="mt-4 w-full" 
                      onClick={() => navigate('/horoscope')}
                    >
                      Read Horoscopes
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border"
                  >
                    <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Astrology Journal</h3>
                    <p className="text-muted-foreground text-sm">
                      Track your moods, thoughts, and experiences alongside planetary influences.
                    </p>
                    <Button 
                      variant="ghost" 
                      className="mt-4 w-full" 
                      onClick={() => navigate('/journal')}
                    >
                      Open Journal
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border"
                  >
                    <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                      <Calculator className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Numerology</h3>
                    <p className="text-muted-foreground text-sm">
                      Understand your life path number and what the numbers reveal about your destiny.
                    </p>
                    <Button 
                      variant="ghost" 
                      className="mt-4 w-full" 
                      onClick={() => navigate('/numerology')}
                    >
                      Explore Numerology
                    </Button>
                  </motion.div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
