import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Settings, LogOut } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            esh7nly
          </Link>
          <div className="flex space-x-4">
            <Link to="/dashboard" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600">
              <Home size={20} className="mr-2" />
              Dashboard
            </Link>
            <Link to="/profile" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600">
              <User size={20} className="mr-2" />
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
