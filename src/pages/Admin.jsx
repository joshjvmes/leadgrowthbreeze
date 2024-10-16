import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useSupabaseAuth } from '../integrations/supabase';
import AdminDashboard from '../components/AdminDashboard';
import { toast } from 'sonner';
import { supabase } from '../integrations/supabase/supabase';

const Admin = () => {
  const { session, signOut } = useSupabaseAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (session?.user) {
        const { data, error } = await supabase
          .from('Users')
          .select('user_type')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error('Error fetching user profile:', error);
          toast.error('Error verifying admin status');
          return;
        }

        setIsAdmin(data?.user_type === 'admin');
      }
    };

    checkAdminStatus();
  }, [session]);

  const handleLogout = async () => {
    try {
      const { error } = await signOut();
      if (error) throw error;
      toast.success('Logged out successfully');
      setIsAdmin(false);
    } catch (error) {
      toast.error('Error logging out: ' + error.message);
    }
  };

  if (!session) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white py-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-white hover:text-[#E51010] mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center font-poppins">Admin Panel</h1>
        {isAdmin ? (
          <div className="bg-white rounded-lg shadow-xl p-8 text-gray-800">
            <Button onClick={handleLogout} className="mb-4 bg-[#E51010] hover:bg-[#0097FD] text-white font-bold py-2 px-4 rounded transition-colors">
              Logout
            </Button>
            <AdminDashboard />
          </div>
        ) : (
          <p className="text-center text-xl font-bold text-[#E51010]">You do not have admin privileges.</p>
        )}
      </div>
    </div>
  );
};

export default Admin;