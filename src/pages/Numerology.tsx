
import { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Header } from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getLifePathNumber, getNumerologyMeaning } from '@/utils/zodiacData';
import { getUserProfile, setUserBirthdate } from '@/utils/astrology';
import { Calendar, Calculator } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Numerology = () => {
  const userProfile = getUserProfile();
  const [birthdate, setBirthdate] = useState<string>(
    userProfile.birthdate 
      ? format(userProfile.birthdate, 'yyyy-MM-dd')
      : ''
  );
  const [lifePathNumber, setLifePathNumber] = useState<number | null>(
    userProfile.lifePathNumber || null
  );
  const { toast } = useToast();

  const calculateLifePath = () => {
    if (!birthdate) {
      toast({
        title: "Birthdate required",
        description: "Please enter your birthdate to calculate your life path number.",
        variant: "destructive",
      });
      return;
    }
    
    const birthdateObj = new Date(birthdate);
    setUserBirthdate(birthdateObj);
    
    const number = getLifePathNumber(birthdateObj);
    setLifePathNumber(number);
    
    toast({
      title: "Life Path Calculated",
      description: `Your Life Path Number is ${number}`,
    });
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="pt-24 px-4 md:px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <section className="text-center">
            <h1 className="text-3xl md:text-4xl font-serif">Numerology</h1>
            <p className="text-muted-foreground mt-2">Discover the cosmic meaning behind your numbers</p>
          </section>
          
          <section className="mt-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Life Path Number Calculator</CardTitle>
                <CardDescription>
                  Your Life Path Number reveals your life's purpose and the path you're meant to follow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Enter your birthdate</Label>
                    <div className="flex gap-3">
                      <Input
                        id="birthdate"
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={calculateLifePath}>
                        <Calculator className="h-4 w-4 mr-2" />
                        Calculate
                      </Button>
                    </div>
                  </div>
                  
                  {lifePathNumber && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 p-5 rounded-lg bg-accent/20 border border-accent/30"
                    >
                      <div className="flex flex-col items-center mb-4">
                        <span className="text-6xl font-serif">{lifePathNumber}</span>
                        <h3 className="font-medium mt-2">Your Life Path Number</h3>
                      </div>
                      
                      <p className="text-sm leading-relaxed">
                        {getNumerologyMeaning(lifePathNumber)}
                      </p>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section className="mt-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Understanding Numerology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    Numerology is the mystical study of numbers and their influence on human life. 
                    Each number carries specific vibrations and energies that can provide insights 
                    into personality traits, life challenges, and potential opportunities.
                  </p>
                  
                  <h3 className="font-medium text-base mt-4">Key Numerology Numbers</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="p-3 rounded-md bg-white/50 border">
                      <h4 className="font-medium">Life Path Number</h4>
                      <p className="text-muted-foreground text-xs mt-1">
                        Derived from your birthdate, revealing your life's purpose and the path you're destined to follow.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-md bg-white/50 border">
                      <h4 className="font-medium">Expression Number</h4>
                      <p className="text-muted-foreground text-xs mt-1">
                        Calculated from the letters in your full birth name, showing your natural abilities and potential.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-md bg-white/50 border">
                      <h4 className="font-medium">Soul Urge Number</h4>
                      <p className="text-muted-foreground text-xs mt-1">
                        Reveals your inner desires, motivations, and what truly fulfills you at a soul level.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-md bg-white/50 border">
                      <h4 className="font-medium">Personality Number</h4>
                      <p className="text-muted-foreground text-xs mt-1">
                        Represents how others perceive you and the impression you make in the world.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default Numerology;
