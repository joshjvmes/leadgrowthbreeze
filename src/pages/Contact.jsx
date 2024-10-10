import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAddContactForm } from '../integrations/supabase';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const addContactForm = useAddContactForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContactForm.mutate({ name, email, message }, {
      onSuccess: () => {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      },
      onError: (error) => {
        alert('Error sending message: ' + error.message);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white py-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-white hover:text-[#E51010] mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center font-poppins">Contact Us</h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E51010] focus:border-[#E51010]" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E51010] focus:border-[#E51010]" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E51010] focus:border-[#E51010]" required></textarea>
            </div>
            <div>
              <Button type="submit" className="w-full bg-[#E51010] hover:bg-[#0097FD] text-white font-bold py-2 px-4 rounded transition-colors">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;