import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const EnchantedForest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 to-teal-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Enchanted Forest</h1>
        <div className="text-center text-6xl mb-8">🧙‍♂️🌳🍄</div>
        <p className="text-xl mb-8 text-center">
          Step into the Enchanted Forest, where ancient trees whisper secrets and magical creatures roam freely.
        </p>
        <div className="text-center">
          <Link to="/adventure">
            <Button className="bg-white text-green-500 hover:bg-green-100">
              Back to Adventures
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnchantedForest;