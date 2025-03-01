
import { useEffect, useState } from 'react';
import { Menu, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationBar } from './NavigationBar';
import { ThemeToggle } from './ThemeToggle';
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";

export const Header = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn } = useUser();
  
  // Update date every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Track scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 ${
        scrolled ? 'backdrop-blur-md bg-background/80 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-medium">Celestial</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          <NavigationBar />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {date.toLocaleDateString('en-US', { 
              weekday: 'short', 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
          
          <ThemeToggle />

          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="hidden sm:flex items-center space-x-2">
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm">
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          )}
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="sm:max-w-sm">
              <div className="mt-8 flex flex-col gap-6">
                <NavigationBar vertical />
                {!isSignedIn && (
                  <div className="flex flex-col gap-2 mt-4">
                    <SignInButton mode="modal">
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button className="w-full">
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
