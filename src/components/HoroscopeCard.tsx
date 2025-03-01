
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ZODIAC_SIGNS } from '@/utils/zodiacData';
import { Star } from 'lucide-react';

interface HoroscopeCardProps {
  sign: string;
  horoscope: string;
  date?: string;
}

export const HoroscopeCard = ({ sign, horoscope, date }: HoroscopeCardProps) => {
  const zodiacData = ZODIAC_SIGNS.find(z => z.name === sign);
  
  if (!zodiacData) {
    return (
      <Card className="w-full glass-card animate-fade-in">
        <CardHeader>
          <CardTitle>Horoscope Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please select a valid zodiac sign.</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="glass-card border-t-4 relative overflow-hidden" style={{ borderTopColor: `var(--${zodiacData.color})` }}>
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <span className="text-[180px] leading-none">{zodiacData.symbol}</span>
        </div>
        
        <CardHeader className="relative z-10">
          <div className="flex justify-between items-start">
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">{zodiacData.symbol}</span>
              <span>{zodiacData.name}</span>
            </CardTitle>
            <div className="flex flex-col items-end">
              <div className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full">
                {zodiacData.element}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {date || "Today's Horoscope"}
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className="flex flex-col space-y-4">
            <p className="text-md leading-relaxed font-light">{horoscope}</p>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {zodiacData.traits.map((trait) => (
                <span 
                  key={trait} 
                  className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  <Star className="h-3 w-3 mr-1" />
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
