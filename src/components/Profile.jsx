import React from 'react';
import { User, LogOut } from 'lucide-react';

const Profile = () => {
  const handleSignOut = () => {
    // Mock signout logic
    console.log('User signed out');
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <User size={40} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-500">user@example.com</p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full md:w-auto flex items-center justify-center px-6 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
          >
            <LogOut size={20} className="mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
