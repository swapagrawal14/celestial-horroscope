
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { ZodiacSelector } from '@/components/ZodiacSelector';
import { HoroscopeCard } from '@/components/HoroscopeCard';
import { getDailyHoroscope, ZODIAC_SIGNS } from '@/utils/zodiacData';
import { getUserProfile } from '@/utils/astrology';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from 'lucide-react';

const Horoscope = () => {
  const userProfile = getUserProfile();
  const [selectedSign, setSelectedSign] = useState<string>(userProfile.zodiacSign || 'Aries');
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  
  const handleSignSelect = (sign: string) => {
    setSelectedSign(sign);
  };
  
  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="pt-24 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <section className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif">Your Horoscope</h1>
            <p className="text-muted-foreground mt-2">Select your zodiac sign to reveal cosmic insights</p>
          </section>
          
          <section className="mt-8">
            <ZodiacSelector onSelect={handleSignSelect} selected={selectedSign} />
          </section>
          
          <section className="mt-8">
            <Tabs defaultValue="daily" className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList>
                  <TabsTrigger 
                    value="daily"
                    onClick={() => setTimeframe('daily')}
                    className="flex items-center"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Daily
                  </TabsTrigger>
                  <TabsTrigger 
                    value="weekly"
                    onClick={() => setTimeframe('weekly')}
                    className="flex items-center"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Weekly
                  </TabsTrigger>
                  <TabsTrigger 
                    value="monthly"
                    onClick={() => setTimeframe('monthly')}
                    className="flex items-center"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Monthly
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="daily" className="mt-0">
                <HoroscopeCard 
                  sign={selectedSign} 
                  horoscope={getDailyHoroscope(selectedSign)} 
                  date={new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                />
              </TabsContent>
              
              <TabsContent value="weekly" className="mt-0">
                <HoroscopeCard 
                  sign={selectedSign} 
                  horoscope={`Your weekly ${selectedSign} horoscope reveals a period of significant growth and opportunity. The stars align to support your ambitions while encouraging balance in your personal life. Pay attention to subtle messages from the universe this week.`} 
                  date={`Week of ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`}
                />
              </TabsContent>
              
              <TabsContent value="monthly" className="mt-0">
                <HoroscopeCard 
                  sign={selectedSign} 
                  horoscope={`This month brings transformative energy for ${selectedSign}. You'll find yourself reconsidering long-term goals while the universe opens unexpected doors. Relationships deepen, and your intuition strengthens. Use this time to align your actions with your authentic self.`} 
                  date={`${new Date().toLocaleDateString('en-US', { month: 'long' })} Forecast`}
                />
              </TabsContent>
            </Tabs>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-serif mb-6">About {selectedSign}</h2>
            
            {ZODIAC_SIGNS.map(sign => {
              if (sign.name === selectedSign) {
                return (
                  <motion.div 
                    key={sign.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-xl p-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-4xl">{sign.symbol}</span>
                          <div>
                            <h3 className="text-xl font-medium">{sign.name}</h3>
                            <p className="text-sm text-muted-foreground">{sign.date_range}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <span className="font-medium w-32">Element:</span>
                            <span>{sign.element}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium w-32">Ruling Planet:</span>
                            <span>{sign.ruling_planet}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Key Traits</h4>
                        <ul className="space-y-2">
                          {sign.traits.map(trait => (
                            <li key={trait} className="flex items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                              {trait}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              }
              return null;
            })}
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default Horoscope;
