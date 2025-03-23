import React from 'react';
import { Users, CreditCard, Edit } from 'lucide-react';

const AdminDashboard = () => {
  const users = [
    { id: 1, email: 'user1@example.com', balance: 500 },
    { id: 2, email: 'user2@example.com', balance: 1000 }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <Users size={32} className="text-blue-600" />
            <div>
              <p className="text-gray-500">Total Users</p>
              <p className="text-2xl font-bold">{users.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">User</th>
              <th className="p-4 text-left">Balance</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">{user.email}</td>
                <td className="p-4">${user.balance}</td>
                <td className="p-4">
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Edit size={18} className="text-blue-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
