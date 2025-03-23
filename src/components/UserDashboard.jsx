import React from 'react';
import { CreditCard, Clock, Plus } from 'lucide-react';

const UserDashboard = () => {
  const balance = 500;
  const transactions = [
    { id: 1, amount: 100, status: 'completed', date: '2024-01-15' },
    { id: 2, amount: 200, status: 'pending', date: '2024-01-20' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-6 text-white mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Your Balance</h2>
            <p className="text-4xl font-bold mt-2">${balance}</p>
          </div>
          <CreditCard size={40} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-6">Request Top-Up</h3>
        <form className="space-y-4">
          <input
            type="number"
            placeholder="Amount"
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Plus size={20} className="mr-2" />
            Request Top-Up
          </button>
        </form>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-6">Transaction History</h3>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <div>
                <p className="font-medium">${transaction.amount}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                transaction.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {transaction.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
