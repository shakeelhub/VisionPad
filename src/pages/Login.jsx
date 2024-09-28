import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    // Navigate to the root page
    navigate('/');
  };

  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div className="flex h-screen bg-[#121212]">
      <motion.div
        className="w-full max-w-md m-auto p-6 bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg shadow-md"
        animate="visible"
        variants={variants}
        initial="hidden"
      >
        <h1 className="text-2xl font-bold mb-4 flex justify-center text-black">Login</h1>
        <form className="space-y-4" onSubmit={login}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
            />
            <div
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            >
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />} {/* Toggle between eye and eye-off icons */}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#EAD8C0] font-semibold rounded-lg hover:bg-[#eecfa7] transition duration-200 flex items-center justify-center space-x-2"
          >
            <span className="text-black">Login</span>
          </button>
          <p className="text-center text-black">
            Not a member?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
