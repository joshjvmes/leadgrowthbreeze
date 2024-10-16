import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProcessCardSlider from '../components/ProcessCardSlider';

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-[#0097FD] hover:text-[#E51010] mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-[#0097FD]">
            Our Approach: Supporting Your Customer's Decision Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            We understand that your customers' buying processes are rarely straightforward. Decisions involve multiple stakeholders and can change direction at any moment. Here's how we align with where your prospects are right now:
          </p>
        </header>

        <ProcessCardSlider />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-[#0097FD] font-poppins text-center">Our Process in Detail</h2>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-[#E6F7FF] p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#0097FD] mb-4">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const processSteps = [
  {
    title: "1. On-boarding + GTM Strategy Alignment",
    description: "We work closely with you to understand your business, products, and target customers, creating a go-to-market strategy that's perfectly aligned with your goals. Then we integrate our systems with your current tech stack, it's that simple."
  },
  {
    title: "2. Social Conversation Monitoring",
    description: "Guided by the GTM strategy + problem you solve – we monitor industry shifts, trigger events and conversations to identify and understand insights – so we can engage thoughtfully with those who may not even know they need your solution yet."
  },
  {
    title: "3. We Discover and Enrich Your Ideal Leads",
    description: "We use over 75 lead enrichment tools and AI research to find contact information and valuable insights about your ideal customers, automating complex research tasks to provide you with high-quality leads."
  },
  {
    title: "4. Message Crafting + Outreach",
    description: "Based on what is learned – we craft a personalized message(s) that address their specific problem(s). No generic sales pitches—just genuine conversations that add value."
  },
  {
    title: "5. Guiding Complex Customer Decision(s)",
    description: "We nurture contacts via drip campaigns – providing support and information they need to move forward confidently. When they're ready, we seamlessly introduce them to your sales team."
  },
  {
    title: "6. We Arm Your Reps for Meaningful Conversations",
    description: "We provide your sales reps with key insights about each prospect before the call, so they can connect on what matters most to the customer and have a warm, successful conversation."
  }
];

export default ProcessPage;