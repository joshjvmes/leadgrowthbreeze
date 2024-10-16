import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { RocketIcon, TargetIcon, TrendingUpIcon } from 'lucide-react';
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

const Index = () => {
  const nextSectionRef = useRef(null);
  const [showProspectingPopup, setShowProspectingPopup] = useState(false);

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
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
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
      
      <main className="container mx-auto px-4 relative z-10">
        <FadeInSection>
          <section className="text-center py-16 sm:py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg my-10 sm:my-20 shadow-2xl backdrop-blur-md bg-opacity-80 relative overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 font-poppins small-caps gradient-text">
                Revenue Acceleration
              </h2>
              <p className="text-xl sm:text-2xl mb-6 sm:mb-8 font-poppins">
                Razzo is Your Rising Tide..
              </p>
              <Link to="/got-milk">
                <Button 
                  size="lg" 
                  className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors mt-4"
                >
                  Got Milk..?
                </Button>
              </Link>
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
          <section className="py-16 sm:py-32 bg-gradient-to-b from-white to-[#E6F7FF] text-[#0097FD] rounded-lg shadow-2xl my-10 sm:my-20 backdrop-blur-md bg-opacity-80 px-4 sm:px-[10%]">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16 font-poppins small-caps gradient-text">
              Why CMOs Choose ROCKET NOW
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard 
                icon={<RocketIcon className="h-10 w-10 sm:h-12 sm:w-12 text-[#E51010]" />}
                title="AI-Powered Insights"
                description="Our cutting-edge AI algorithms provide unmatched clarity on your digital campaigns."
              />
              <FeatureCard 
                icon={<TargetIcon className="h-10 w-10 sm:h-12 sm:w-12 text-[#E51010]" />}
                title="Precision Targeting"
                description="Reach the right decision-makers at the right time with our advanced data analytics."
              />
              <FeatureCard 
                icon={<TrendingUpIcon className="h-10 w-10 sm:h-12 sm:w-12 text-[#E51010]" />}
                title="Revenue-Generating Machine"
                description="Turn your marketing efforts into a powerful engine for business growth."
              />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="marketing-costs-calculator" className="py-16 sm:py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg shadow-2xl my-10 sm:my-20 backdrop-blur-md bg-opacity-80">
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

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#0FCEFD] bg-opacity-80 text-white shadow-xl rounded-lg p-6">
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-full p-3 mb-4">
          {React.cloneElement(icon, { className: `${icon.props.className} text-[#E51010]` })}
        </div>
        <h4 className="mt-4 text-lg sm:text-xl font-semibold font-poppins mb-2 small-caps">{title}</h4>
      </div>
      <p className="text-center text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default Index;
