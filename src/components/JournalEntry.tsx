
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CalendarDays, Star, Save } from 'lucide-react';
import { ZODIAC_SIGNS, getCurrentPlanetaryInfluences } from '@/utils/zodiacData';
import { getUserProfile, generateRandomInsight } from '@/utils/astrology';
import { format } from 'date-fns';
import { useToast } from "@/hooks/use-toast";

const MOODS = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😌', label: 'Peaceful' },
  { emoji: '🤔', label: 'Thoughtful' },
  { emoji: '😴', label: 'Tired' },
  { emoji: '😢', label: 'Sad' },
  { emoji: '😤', label: 'Frustrated' },
  { emoji: '😍', label: 'Loving' },
  { emoji: '🤩', label: 'Excited' },
];

export const JournalEntry = () => {
  const [entry, setEntry] = useState('');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedInfluences, setSelectedInfluences] = useState<string[]>([]);
  const { toast } = useToast();
  
  const userProfile = getUserProfile();
  const influences = getCurrentPlanetaryInfluences();
  const insight = generateRandomInsight();
  
  const handleInfluenceToggle = (planet: string) => {
    if (selectedInfluences.includes(planet)) {
      setSelectedInfluences(selectedInfluences.filter(p => p !== planet));
    } else {
      setSelectedInfluences([...selectedInfluences, planet]);
    }
  };
  
  const handleSave = () => {
    // In a real app, we would save this to a database
    if (!entry.trim()) {
      toast({
        title: "Journal entry is empty",
        description: "Please write something before saving.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Journal Entry Saved",
      description: "Your cosmic reflections have been recorded.",
    });
    
    // Clear the form
    setEntry('');
    setSelectedMood(null);
    setSelectedInfluences([]);
  };
  
  return (
    <div className="space-y-6">
      <Card className="glass-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Daily Journal</CardTitle>
            <div className="text-sm text-muted-foreground flex items-center">
              <CalendarDays className="h-4 w-4 mr-1" />
              {format(new Date(), 'MMMM d, yyyy')}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Cosmic Insight</label>
              <div className="bg-accent/50 p-3 rounded-md text-sm italic">
                "{insight}"
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">How are you feeling today?</label>
              <div className="flex flex-wrap gap-2">
                {MOODS.map((mood) => (
                  <motion.button
                    key={mood.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedMood(mood.label)}
                    className={`px-3 py-1.5 rounded-full text-sm flex items-center ${
                      selectedMood === mood.label 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <span className="mr-1 text-base">{mood.emoji}</span>
                    <span>{mood.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Planetary Influences</label>
              <div className="flex flex-wrap gap-2">
                {influences.map((influence) => (
                  <button
                    key={influence.planet}
                    onClick={() => handleInfluenceToggle(influence.planet)}
                    className={`px-3 py-1.5 rounded-full text-sm flex items-center ${
                      selectedInfluences.includes(influence.planet) 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <Star className="h-3 w-3 mr-1" />
                    <span>{influence.planet} {influence.position}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Journal Entry</label>
              <Textarea 
                placeholder="Write your cosmic reflections here..." 
                className="min-h-[150px] resize-none"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Entry
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
