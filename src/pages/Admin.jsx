import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const storedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      setMessages(storedMessages);
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd validate against a backend here
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
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
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#E51010] focus:border-[#E51010]" required />
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
            <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
            {messages.length === 0 ? (
              <p>No messages yet.</p>
            ) : (
              <ul className="space-y-4">
                {messages.map((msg, index) => (
                  <li key={index} className="border-b pb-2">
                    <p><strong>Name:</strong> {msg.name}</p>
                    <p><strong>Email:</strong> {msg.email}</p>
                    <p><strong>Message:</strong> {msg.message}</p>
                    <p><strong>Date:</strong> {new Date(msg.date).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;