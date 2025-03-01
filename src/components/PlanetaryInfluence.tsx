
import { motion } from 'framer-motion';
import { PlanetaryInfluence as PlanetaryInfluenceType, getCurrentPlanetaryInfluences } from '@/utils/zodiacData';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PlanetaryInfluence = () => {
  const influences = getCurrentPlanetaryInfluences();
  
  if (influences.length === 0) {
    return null;
  }
  
  return (
    <Card className="w-full glass-card">
      <CardHeader>
        <CardTitle className="text-lg">Current Planetary Influences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          {influences.map((influence, index) => (
            <PlanetaryInfluenceItem key={influence.planet} influence={influence} index={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface PlanetaryInfluenceItemProps {
  influence: PlanetaryInfluenceType;
  index: number;
}

const PlanetaryInfluenceItem = ({ influence, index }: PlanetaryInfluenceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex items-start p-3 rounded-lg bg-white/30 backdrop-blur-sm border border-border"
    >
      <div className="mr-3 mt-0.5">
        <influence.icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="font-medium text-sm">
          {influence.planet} {influence.position}
        </h4>
        <p className="text-sm text-muted-foreground mt-0.5">
          {influence.effect}
        </p>
      </div>
    </motion.div>
  );
};
