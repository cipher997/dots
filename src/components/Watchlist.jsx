import React from 'react';
import { FaStar, FaChartLine } from 'react-icons/fa';

const Watchlist = () => {
  const sampleWatchlist = [
    { name: 'Apple Inc.', symbol: 'AAPL', price: 191.24, change: '+1.2%' },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: 821.33, change: '-0.7%' },
    { name: 'Amazon.com', symbol: 'AMZN', price: 3290.47, change: '+0.3%' },
  ];

  return (
    <div className="flex w-full min-h-screen pt-10 bg-gray-50 pt-15">
      <main className="flex-1 rounded-xl p-1 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {sampleWatchlist.length > 0 ? (
            <ul>
              {sampleWatchlist.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-4  last:border-b-0 hover:bg-gray-50 transition"
                >
                  <div>
                    <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.symbol}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-md font-bold text-gray-700">${item.price.toFixed(2)}</p>
                    <p className={`text-xs ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {item.change}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <FaChartLine className="mx-auto text-4xl mb-4 text-blue-400" />
              <p>No stocks in your watchlist yet.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Watchlist;
