import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Rocket, ChevronDown, Globe, Users, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import WizardContentCard from '../components/WizardContentCard';
import WizardHatPopup from '../components/WizardHatPopup';
import BusinessFeatureSlider from '../components/BusinessFeatureSlider';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ReviewsSection from '../components/ReviewsSection';
import TimelineSection from '../components/TimelineSection';

export const scenes = [
  { bg: 'bg-gradient-to-b from-[#0FCEFD] to-[#0097FD]', elements: '🚀', title: 'Magical Beginnings' },
  { bg: 'bg-gradient-to-b from-[#0097FD] to-[#0FCEFD]', elements: '📈', title: 'Growth Journey' },
  { bg: 'bg-gradient-to-b from-[#0FCEFD] to-[#0097FD]', elements: '🎯', title: 'Target Success' },
  { bg: 'bg-gradient-to-b from-[#0097FD] to-[#0FCEFD]', elements: '🌟', title: 'Peak Performance' },
];

const Index = () => {
  const [currentScene, setCurrentScene] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollPercentage = scrollPosition / (docHeight - windowHeight);
    const newScene = Math.min(Math.floor(scrollPercentage * scenes.length), scenes.length - 1);
    
    if (newScene !== currentScene) {
      setCurrentScene(newScene);
    }
  }, [currentScene]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0FCEFD] to-[#0097FD]">
        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              Your Bridge Between <br />
              <span className="text-[#E51010]">Customization and Scale</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              AI-powered marketing solutions for high-growth businesses
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white text-lg px-8 py-3">
                  Get Started
                </Button>
              </Link>
              <Link to="/prove-it">
                <Button variant="outline" className="bg-white text-[#0097FD] hover:bg-[#E51010] hover:text-white text-lg px-8 py-3">
                  Prove It
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0097FD]">
            Why Choose Rocket Now?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-[#E51010]" />,
                title: "Global Reach",
                description: "Access worldwide markets with AI-powered targeting"
              },
              {
                icon: <Users className="h-8 w-8 text-[#E51010]" />,
                title: "Expert Team",
                description: "Dedicated specialists for your growth journey"
              },
              {
                icon: <LayoutDashboard className="h-8 w-8 text-[#E51010]" />,
                title: "Smart Analytics",
                description: "Data-driven insights for optimal performance"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content Cards */}
      {scenes.map((scene, index) => (
        <WizardContentCard
          key={index}
          title={scene.title}
          content={getContentForScene(index)}
          bg={scene.bg}
          elements={scene.elements}
        />
      ))}

      {/* Features Slider */}
      <BusinessFeatureSlider />

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Timeline */}
      <TimelineSection />

      {/* Reviews */}
      <ReviewsSection />

      {/* Final CTA Section */}
      <section className="min-h-screen flex items-center justify-center bg-white bg-opacity-80 p-8">
        <div className="max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center font-poppins">
              Ready to Accelerate Your Growth?
            </h3>
            <WizardHatPopup />
            <Link to="/contact" className="mt-8 inline-block">
              <Button className="bg-[#E51010] hover:bg-[#0097FD] text-white px-8 py-3 text-lg">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const getContentForScene = (index) => {
  const contents = [
    "Welcome to Rocket Now, where AI-powered marketing meets relentless dedication to your growth. We're not just another agency – we offer the highest level of service in the industry.",
    "Your marketing deserves a breakthrough, not just an average return. Rocket Now brings cutting-edge digital strategies that translate directly into business growth.",
    "Need ROI? Book out your sales team? With our multi-channel attribution and customer-first approach, we ensure you get the best return on every marketing dollar.",
    "Ready to leave your competitors behind? Let's turn your marketing into a revenue-generating machine. Contact Rocket Now for a customized strategy consultation."
  ];
  return contents[index] || "Discover the magic of Rocket Now's AI-powered marketing solutions.";
};

export default Index;