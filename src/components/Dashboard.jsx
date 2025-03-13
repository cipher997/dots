import React from "react";
import { FaWallet } from "react-icons/fa";
import { MdTrendingUp, MdShoppingCart } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="flex w-full min-h-screen p-4">
      <main className="flex-1  rounded-xl p-6 max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Hi, Kartik</h1>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-3 sm:mt-0 hover:bg-blue-600 transition">
            Start Investing
          </button>
        </header>

        {/* Equity & Commodity Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Equity</h3>
            <p className="text-gray-500">Margin Available: <span className="font-bold text-gray-900">0.1</span></p>
            <p className="text-gray-500">Margins Used: <span className="font-bold text-gray-900">0</span></p>
          </div>
          <div className="bg-gray-50 shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Commodity</h3>
            <p className="text-gray-500">Margin Available: <span className="font-bold text-gray-900">0</span></p>
            <p className="text-gray-500">Margins Used: <span className="font-bold text-gray-900">0</span></p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center space-y-3 hover:shadow-lg transition">
            <MdTrendingUp size={40} className="text-blue-500" />
            <span className="font-medium text-gray-700">Market Trends</span>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center space-y-3 hover:shadow-lg transition">
            <MdShoppingCart size={40} className="text-green-500" />
            <span className="font-medium text-gray-700">Orders</span>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center space-y-3 hover:shadow-lg transition">
            <FaWallet size={40} className="text-yellow-500" />
            <span className="font-medium text-gray-700">Funds</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;