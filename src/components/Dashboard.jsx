import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { MdTrendingUp, MdShoppingCart } from "react-icons/md";
import { FiBell, FiPlus, FiSearch } from "react-icons/fi";
import { IoMdOptions } from "react-icons/io";
import { FaThLarge } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";

const Dashboard = () => {
  const [activeCallTab, setActiveCallTab] = useState("Latest");

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f9fafb] pt-15">
      {/* Indices Cards */}
      <div className="flex gap-1 overflow-x-auto justify-around items-center p-2">
        {[
          { name: "NIFTY 50", value: "24346.70", change: "+12.50 (+0.05%)" },
          { name: "NIFTY BANK", value: "55115.35", change: "+28.20 (+0.05%)" },
          { name: "SENSEX", value: "80501.99", change: "+259.75 (+0.32%)" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-green-100 text-center text-sm rounded-lg px-2 py-2"
          >
            <div className="font-semibold">{item.name}</div>
            <div>{item.value}</div>
            <div className="text-green-600 text-xs">{item.change}</div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="px-4 my-4">
        <div className="flex items-center bg-white rounded-full shadow-sm px-4 py-2">
          <FiSearch className="mr-2 text-gray-400" />
          <input
            className="outline-none w-full text-sm"
            type="text"
            placeholder="Search eg: infy fut, gold mcx, acc opt"
          />
        </div>
      </div>

      {/* Trading Calls */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-md font-semibold">Trading Calls</h2>
          <IoMdOptions />
        </div>

        {/* Call Tabs */}
        <div className="flex gap-2 mb-3 overflow-x-auto">
          {["Latest", "High Returns", "Low Risk", "Long Term"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCallTab(tab)}
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                activeCallTab === tab
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Call Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">CRUDEOIL</h3>
              <p className="text-xs text-gray-500">MCX • 15 MAY OPT 5200 CE</p>
            </div>
            <div className="flex gap-3">
              <FiBell className="text-gray-500" />
              <FiPlus className="text-gray-500" />
            </div>
          </div>

          <div className="grid grid-cols-3 text-sm text-gray-600 mt-4">
            <div>
              <p className="text-xs text-gray-400">Target Price</p>
              <p className="text-md font-semibold">₹165</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Exp Returns</p>
              <p className="text-md font-semibold text-blue-700">50.00%</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Entry Price</p>
              <p className="text-md font-semibold">₹110</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-sm">
              LTP: <span className="font-semibold">₹110.60</span>{" "}
              <span className="text-green-600 text-xs">+3.90 (+3.66%)</span>
            </p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center text-sm">
              <MdShoppingCart className="mr-1" /> Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="px-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-md font-semibold">Portfolio</h2>
            <FaThLarge className="text-gray-400" />
          </div>
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-gray-400 text-xs">Invested</p>
              <p className="font-medium">₹291.58</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Current Value</p>
              <p className="font-medium">₹255.64</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around py-2 z-10">
        <div className="flex flex-col items-center text-blue-700">
          <MdTrendingUp className="text-xl" />
          <span className="text-xs">Dashboard</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <AiOutlineUnorderedList className="text-xl" />
          <span className="text-xs">Watchlist</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <FaWallet className="text-xl" />
          <span className="text-xs">Portfolio</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <MdShoppingCart className="text-xl" />
          <span className="text-xs">Orders</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <MdTrendingUp className="text-xl" />
          <span className="text-xs">Position</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
