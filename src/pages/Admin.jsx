import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useSupabaseAuth } from '../integrations/supabase';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
  const { session, signIn, signOut } = useSupabaseAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await signIn({ email, password });
    if (error) alert('Error logging in: ' + error.message);
  };

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) alert('Error logging out: ' + error.message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white py-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-white hover:text-[#E51010] mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center font-poppins">Admin Panel</h1>
        {!session ? (
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E51010] focus:border-[#E51010]" required />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E51010] focus:border-[#E51010]" required />
              </div>
              <Button type="submit" className="w-full bg-[#E51010] hover:bg-[#0097FD] text-white font-bold py-2 px-4 rounded transition-colors">
                Login
              </Button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-8 text-gray-800">
            <Button onClick={handleLogout} className="mb-4 bg-[#E51010] hover:bg-[#0097FD] text-white font-bold py-2 px-4 rounded transition-colors">
              Logout
            </Button>
            <AdminDashboard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;