import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CelestialRealm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Celestial Realm</h1>
        <div className="text-center text-6xl mb-8">🧙‍♂️☁️🌙</div>
        <p className="text-xl mb-8 text-center">
          Ascend to the Celestial Realm, where stars dance and cosmic energies flow through ethereal landscapes.
        </p>
        <div className="text-center">
          <Link to="/adventure">
            <Button className="bg-white text-blue-500 hover:bg-blue-100">
              Back to Adventures
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CelestialRealm;