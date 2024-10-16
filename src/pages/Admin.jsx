import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useSupabaseAuth } from '../integrations/supabase';
import AdminDashboard from '../components/AdminDashboard';
import { toast } from 'sonner';
import { supabase } from '../integrations/supabase/supabase';

const Admin = () => {
  const { session, signIn, signOut } = useSupabaseAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // First, try to sign in directly with the username as email
      let signInResult = await signIn({ email: username, password });
      
      // If direct sign-in fails, try to fetch the email from the Users table
      if (signInResult.error) {
        const { data, error } = await supabase
          .from('Users')
          .select('email')
          .eq('username', username)
          .single();

        if (error) {
          if (error.code === 'PGRST116') {
            throw new Error('User not found. Please check your username.');
          }
          throw error;
        }

        if (data?.email) {
          signInResult = await signIn({ email: data.email, password });
          if (signInResult.error) throw signInResult.error;
        } else {
          throw new Error('Email not found for this username.');
        }
      }

      toast.success('Logged in successfully');
    } catch (error) {
      toast.error('Error logging in: ' + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await signOut();
      if (error) throw error;
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Error logging out: ' + error.message);
    }
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
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username or Email</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E51010] focus:border-[#E51010] text-gray-900" required />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E51010] focus:border-[#E51010] text-gray-900" required />
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