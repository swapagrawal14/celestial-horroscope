
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

// Make sure to add VITE_CLERK_PUBLISHABLE_KEY to your .env file
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => (
  <ClerkProvider publishableKey={publishableKey}>
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
  </ClerkProvider>
);

export default App;
