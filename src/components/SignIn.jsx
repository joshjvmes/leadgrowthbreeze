import React, { useState } from 'react';
import { useSupabaseAuth } from '../integrations/supabase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useSupabaseAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signIn({ email, password });
      if (error) throw error;
      toast.success('Signed in successfully!');
    } catch (error) {
      toast.error('Error signing in: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSignIn} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">Sign In</Button>
    </form>
  );
};

export default SignIn;