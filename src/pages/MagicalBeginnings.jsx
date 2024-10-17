import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const MagicalBeginnings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Magical Beginnings</h1>
        <div className="text-center text-6xl mb-8">🧙‍♂️🌟🔮</div>
        <p className="text-xl mb-8 text-center">
          Welcome to the realm of Magical Beginnings, where every spell cast is a step into a world of wonder and possibility.
        </p>
        <div className="text-center">
          <Link to="/adventure">
            <Button className="bg-white text-purple-500 hover:bg-purple-100">
              Back to Adventures
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MagicalBeginnings;