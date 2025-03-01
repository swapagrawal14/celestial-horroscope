
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Header } from '@/components/Header';
import { JournalEntry } from '@/components/JournalEntry';
import { Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Journal = () => {
  // In a real app, we would fetch past entries from a database
  const pastEntries = [
    {
      id: 1,
      date: new Date(2023, 6, 15),
      mood: 'Peaceful',
      influences: ['Venus in Taurus', 'Mercury in Gemini'],
      content: 'Today I felt a deep connection to nature. The Venus in Taurus influence is definitely enhancing my appreciation for beauty and comfort.',
    },
    {
      id: 2,
      date: new Date(2023, 6, 10),
      mood: 'Excited',
      influences: ['Mars in Cancer'],
      content: 'Such a productive day! Despite Mars being in Cancer, I channeled the energy into creative projects rather than feeling emotional.',
    },
  ];
  
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
            <h1 className="text-3xl md:text-4xl font-serif">Astrology Journal</h1>
            <p className="text-muted-foreground mt-2">Track your journey through the cosmos</p>
          </section>
          
          <section className="mt-8">
            <JournalEntry />
          </section>
          
          {pastEntries.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-serif mb-6">Past Entries</h2>
              
              <div className="space-y-4">
                {pastEntries.map((entry) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card border rounded-xl p-5"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {format(entry.date, 'MMMM d, yyyy')}
                      </div>
                      <div className="bg-secondary px-2.5 py-1 rounded-full text-xs">
                        {entry.mood}
                      </div>
                    </div>
                    
                    <p className="text-sm mb-3">{entry.content}</p>
                    
                    {entry.influences.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {entry.influences.map((influence) => (
                          <span 
                            key={influence} 
                            className="text-xs px-2.5 py-1 rounded-full bg-accent/50 text-accent-foreground"
                          >
                            {influence}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline">
                  View All Entries
                </Button>
              </div>
            </section>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Journal;
