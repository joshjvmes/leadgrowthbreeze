import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

const ProspectingPopup = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-2 top-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <DialogTitle>The New Era of Prospecting</DialogTitle>
          <DialogDescription>
            Discover why traditional prospecting is dead and how ROCKET NOW is revolutionizing customer acquisition.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <h4 className="font-semibold text-lg">The Problem:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prospecting for new business is expensive with low conversion rates</li>
            <li>"Cold Discovery" is dead - decision-makers lack time for "fishing expeditions"</li>
            <li>AI has made it easier to create and spam boilerplate messaging</li>
            <li>Inboxes are overburdened with product-centric sales pitches</li>
            <li>Harder for decision-makers to distinguish between posers and players</li>
          </ul>
          <h4 className="font-semibold text-lg">The Solution:</h4>
          <p>
            ROCKET NOW's AI-driven approach focuses on:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>In-depth customer research</li>
            <li>Personalized drip campaigns</li>
            <li>Tailored message crafting for email and social media</li>
          </ul>
          <p className="font-semibold">
            Let us revolutionize your prospecting strategy and accelerate your growth!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProspectingPopup;