
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { ClerkProvider } from "@clerk/clerk-react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Horoscope from "./pages/Horoscope";
import Journal from "./pages/Journal";
import Numerology from "./pages/Numerology";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get the Clerk publishable key from .env
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Check if we have a valid publishable key (not the placeholder value or undefined)
const isValidClerkKey = publishableKey && 
  publishableKey !== "your_clerk_publishable_key_here" && 
  publishableKey !== "undefined";

const App = () => {
  // Render app with or without Clerk based on key validity
  const AppContent = () => (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/horoscope" element={<Horoscope />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/numerology" element={<Numerology />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );

  // Only wrap with ClerkProvider if we have a valid key
  return isValidClerkKey ? (
    <ClerkProvider publishableKey={publishableKey}>
      <AppContent />
    </ClerkProvider>
  ) : (
    <AppContent />
  );
};

export default App;
