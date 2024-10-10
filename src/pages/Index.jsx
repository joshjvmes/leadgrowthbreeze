import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RocketIcon, TargetIcon, TrendingUpIcon, Wand2 } from 'lucide-react';
import CandySlider from '../components/CandySlider';
import { useInView } from 'react-intersection-observer';
import MarketingCostsCalculator from '../components/MarketingCostsCalculator';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ReviewsSection from '../components/ReviewsSection';
import TimelineSection from '../components/TimelineSection';
import AnimatedBackground from '../components/AnimatedBackground';
import WizardHatPopup from '../components/WizardHatPopup';
import WizardSceneBackground from '../components/WizardSceneBackground';
import { Link } from 'react-router-dom';
import ProspectingPopup from '../components/ProspectingPopup';
import { motion } from 'framer-motion';

const Index = () => {
  const nextSectionRef = useRef(null);
  const [showProspectingPopup, setShowProspectingPopup] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sliderItems = [
    {
      title: "Your Bridge Between Customization and Scale",
      description: "We're not just another agency – at ROCKET NOW, we offer the highest level of service available in the industry. Our relentless dedication to your growth sets us apart.",
      buttonText: "Accelerate Your Growth",
      action: 'accelerate'
    },
    {
      title: "Marketing Strategies Underperforming?",
      description: "Your marketing deserves a breakthrough, not just an average return. ROCKET NOW brings cutting-edge digital strategies that translate directly into business growth.",
      buttonText: "Get Your Breakthrough",
      action: 'breakthrough'
    },
    {
      title: "Need ROI? Book Out Your Sales Team?",
      description: "With our multi-channel attribution and customer-first approach, ROCKET NOW ensures you get the best return on every marketing dollar—empowering you to hit your KPIs faster than ever.",
      buttonText: "Maximize Your ROI",
      action: 'maximize'
    }
  ];

  const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };

  const handleScrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    document.body.classList.add('milky-reveal');
    setTimeout(() => {
      document.body.classList.remove('milky-reveal');
    }, 1000);
  };

  return (
    <div className="min-h-screen relative">
      <WizardSceneBackground />
      <header className="bg-gradient-to-b from-[#E51010] to-[#B30000] text-white py-4 fixed w-full z-50 transition-all duration-300" style={{ backgroundColor: `rgba(229, 16, 16, ${Math.min(scrollY / 500, 0.9)})` }}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.img 
            src="/rocket-logo.png" 
            alt="ROCKET NOW" 
            className="h-8 w-auto sm:h-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-white hover:bg-[#E51010] text-[#E51010] hover:text-white text-sm sm:text-base transition-all duration-300">
                Get Started
              </Button>
            </motion.div>
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 relative z-10 pt-20">
        <FadeInSection>
          <section className="text-center py-16 sm:py-32 bg-gradient-to-b from-[#E51010] to-[#B30000] text-white rounded-lg my-10 sm:my-20 shadow-2xl backdrop-blur-md bg-opacity-80 relative overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl sm:text-5xl font-extrabold mb-6 sm:mb-8 font-poppins small-caps gradient-text"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Revenue Acceleration
              </motion.h2>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-[#E51010] text-[#E51010] hover:text-white shadow-lg transition-colors mt-4"
                  onClick={handleScrollToNext}
                >
                  Got Milk..?
                </Button>
              </motion.div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <div ref={nextSectionRef} className="my-10 sm:my-20">
            <CandySlider items={sliderItems} setShowProspectingPopup={setShowProspectingPopup} />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="my-10 sm:my-20">
            <TimelineSection />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="my-10 sm:my-20">
            <CaseStudiesSection />
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="my-10 sm:my-20">
            <ReviewsSection />
          </div>
        </FadeInSection>

        <FadeInSection>
          <section className="py-16 sm:py-32 bg-gradient-to-b from-white to-[#FFE6E6] text-[#E51010] rounded-lg shadow-2xl my-10 sm:my-20 backdrop-blur-md bg-opacity-80 px-4 sm:px-[10%]">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16 font-poppins small-caps gradient-text">
              Why CMOs Choose ROCKET NOW
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard 
                icon={<RocketIcon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />}
                title="AI-Powered Insights"
                description="Our cutting-edge AI algorithms provide unmatched clarity on your digital campaigns."
                wizardDescription="Unleash the power of AI to predict market trends and optimize your campaigns in real-time."
              />
              <FeatureCard 
                icon={<TargetIcon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />}
                title="Precision Targeting"
                description="Reach the right decision-makers at the right time with our advanced data analytics."
                wizardDescription="Cast a spell of precision targeting, ensuring your message reaches the perfect audience every time."
              />
              <FeatureCard 
                icon={<TrendingUpIcon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />}
                title="Revenue-Generating Machine"
                description="Turn your marketing efforts into a powerful engine for business growth."
                wizardDescription="Transform your marketing into a magical revenue-generating machine, fueled by data-driven sorcery."
              />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="marketing-costs-calculator" className="py-16 sm:py-32 bg-gradient-to-b from-[#E51010] to-[#B30000] text-white rounded-lg shadow-2xl my-10 sm:my-20 backdrop-blur-md bg-opacity-80">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center font-poppins small-caps gradient-text">
              Marketing Costs Calculator
            </h3>
            <div className="max-w-2xl mx-auto">
              <MarketingCostsCalculator />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="py-16 sm:py-32 bg-white rounded-lg shadow-2xl my-10 sm:my-20 backdrop-blur-md bg-opacity-80">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center font-poppins small-caps gradient-text">
              Unlock Your Potential
            </h3>
            <WizardHatPopup />
          </section>
        </FadeInSection>
      </main>
      <ProspectingPopup open={showProspectingPopup} onOpenChange={setShowProspectingPopup} />
    </div>
  );
};

const FeatureCard = ({ icon, title, description, wizardDescription }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className={`bg-[#E51010] bg-opacity-80 text-white shadow-xl rounded-lg p-6 cursor-pointer perspective-1000 ${isFlipped ? 'rotate-y-180' : ''}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d">
        <div className={`absolute w-full h-full backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-3 mb-4">
              {React.cloneElement(icon, { className: `${icon.props.className} text-[#E51010]` })}
            </div>
            <h4 className="mt-4 text-lg sm:text-xl font-semibold font-poppins mb-2 small-caps">{title}</h4>
          </div>
          <p className="text-center text-sm sm:text-base">{description}</p>
        </div>
        <div className={`absolute w-full h-full backface-hidden bg-white rounded-lg p-6 rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center justify-center h-full">
            <Wand2 className="h-12 w-12 text-[#E51010] mb-4" />
            <p className="text-center text-sm sm:text-base text-[#E51010]">{wizardDescription}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;