import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SupabaseAuthProvider } from './integrations/supabase';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import About from "./pages/About";
import GotMilk from "./pages/GotMilk";
import ProcessPage from "./pages/ProcessPage";
import Blog from "./pages/Blog";
import ArticlePage from "./pages/ArticlePage";
import SignIn from "./components/SignIn";
import ProveIt from "./pages/ProveIt";
import MagicalBeginnings from "./pages/MagicalBeginnings";
import EnchantedForest from "./pages/EnchantedForest";
import DragonsLair from "./pages/DragonsLair";
import CelestialRealm from "./pages/CelestialRealm";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SupabaseAuthProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/about" element={<About />} />
              <Route path="/got-milk" element={<GotMilk />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<ArticlePage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/prove-it" element={<ProveIt />} />
              <Route path="/magical-beginnings" element={<MagicalBeginnings />} />
              <Route path="/enchanted-forest" element={<EnchantedForest />} />
              <Route path="/dragons-lair" element={<DragonsLair />} />
              <Route path="/celestial-realm" element={<CelestialRealm />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </SupabaseAuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;