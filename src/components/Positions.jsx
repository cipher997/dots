import React, { useState } from 'react';

const Positions = () => {
  const [activeTab, setActiveTab] = useState('Holdings');

  const holdingsData = [
    { name: 'ALOKINDS', ltp: 16.45, pl: -0.13, change: -0.78, qty: 1 },
    { name: 'BIOGEN', ltp: 0.89, pl: 0.00, change: 0.00, qty: 1 },
    { name: 'DDIL', ltp: 4.61, pl: -0.20, change: -4.16, qty: 1 },
    { name: 'FCSSOFT', ltp: 2.55, pl: -0.04, change: -1.54, qty: 1 },
    { name: 'GAYAHWS', ltp: 1.10, pl: -0.01, change: -0.90, qty: 1 },
    { name: 'GODHA', ltp: 0.76, pl: -5.00, change: -6.17, qty: 100 },
    { name: 'IDEA', ltp: 7.05, pl: -0.07, change: -0.98, qty: 1 },
    { name: 'IDFCFIRSTB', ltp: 66.08, pl: 1.19, change: 1.83, qty: 1 },
  ];

  const positionsData = [
    { name: 'NIFTY 25050 CE', type: 'Buy', qty: 75, price: 21.00, status: 'Completed', time: '10:46 AM' },
    { name: 'NIFTY 25050 CE', type: 'Sell', qty: 75, price: 21.25, status: 'Completed', time: '10:51 AM' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <h1 className="text-xl font-bold">NIFTY 50: 24346.70</h1>
            <h1 className="text-md text-green-500 font-medium">+12.50 (+0.05%)</h1>
          </div>
          <div>
            <h1 className="text-xl font-bold">SENSEX: 80501.99</h1>
            <h1 className="text-md text-green-500 font-medium">+259.75 (+0.32%)</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {['Holdings', 'Positions'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-3 font-medium ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4">
          {activeTab === 'Holdings' && (
            <>
              <div className="bg-blue-50 p-4 rounded-md mb-4">
                <p className="text-gray-700">Current Value: ₹249.53</p>
                <p className="text-red-500">Today's P/L: ₹-4.43 (-1.74%)</p>
              </div>
              <div className="space-y-3">
                {holdingsData.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">LTP: {item.ltp}</p>
                      <p className={`text-sm ${item.pl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {item.pl >= 0 ? '+' : ''}
                        {item.pl} ({item.change >= 0 ? '+' : ''}
                        {item.change}%)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'Positions' && (
            <div className="space-y-4">
              {positionsData.map((pos, idx) => (
                <div key={idx} className="p-4 border rounded-md shadow-sm bg-gray-50">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">{pos.name}</p>
                      <p className="text-sm text-gray-500">
                        {pos.type} • Qty: {pos.qty} @ ₹{pos.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${pos.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {pos.status}
                      </p>
                      <p className="text-sm text-gray-500">{pos.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Positions;
