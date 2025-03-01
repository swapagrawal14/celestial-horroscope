
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ZODIAC_SIGNS } from '@/utils/zodiacData';

interface ZodiacSelectorProps {
  onSelect: (sign: string) => void;
  selected?: string;
}

export const ZodiacSelector = ({ onSelect, selected }: ZodiacSelectorProps) => {
  const [hoveredSign, setHoveredSign] = useState<string | null>(null);
  
  return (
    <div className="w-full overflow-hidden">
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3 px-2">
        {ZODIAC_SIGNS.map((sign) => (
          <motion.button
            key={sign.name}
            className={`relative flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
              selected === sign.name 
                ? `bg-${sign.color}/10 border-${sign.color}/30 text-${sign.color}` 
                : 'bg-white/50 backdrop-blur-sm border-border hover:border-primary/20'
            }`}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(sign.name)}
            onMouseEnter={() => setHoveredSign(sign.name)}
            onMouseLeave={() => setHoveredSign(null)}
          >
            <span className="text-2xl mb-1">{sign.symbol}</span>
            <span className="text-xs font-medium">{sign.name}</span>
            
            {(hoveredSign === sign.name || selected === sign.name) && (
              <motion.div 
                className="absolute -bottom-6 left-0 right-0 text-center text-xs text-muted-foreground"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {sign.date_range}
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
