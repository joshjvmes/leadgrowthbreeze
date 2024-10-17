import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const DragonsLair = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Dragon's Lair</h1>
        <div className="text-center text-6xl mb-8">🧙‍♂️🔥🐉</div>
        <p className="text-xl mb-8 text-center">
          Brave the heat and danger of the Dragon's Lair, where treasures await those with courage and wit.
        </p>
        <div className="text-center">
          <Link to="/adventure">
            <Button className="bg-white text-orange-500 hover:bg-orange-100">
              Back to Adventures
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DragonsLair;