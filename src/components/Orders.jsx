import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const tabOptions = ['Open', 'Completed', 'All'];

const mockOrders = [
  {
    id: 1,
    symbol: 'NIFTY',
    date: '08 MAY\'25',
    strike: '25050.00 CE',
    type: 'Sell',
    quantity: 75,
    price: 'Mkt',
    status: 'Completed',
    filled: '75 / 75',
    time: '10:51:04 AM',
    carry: 'CARRYFORWARD',
    orderType: 'Mkt',
    ltp: '10.10',
    tradedPrice: '₹21.25'
  },
  {
    id: 2,
    symbol: 'NIFTY',
    date: '08 MAY\'25',
    strike: '25050.00 CE',
    type: 'Buy',
    quantity: 75,
    price: '₹21.00',
    status: 'Completed',
    filled: '75 / 75',
    time: '10:46:45 AM',
    carry: 'CARRYFORWARD',
    orderType: 'Limit',
    ltp: '10.10',
    tradedPrice: '₹21.00'
  },
  {
    id: 3,
    symbol: 'NIFTY',
    date: '08 MAY\'25',
    strike: '25050.00 CE',
    type: 'Buy',
    quantity: 75,
    price: '₹22.00',
    status: 'Rejected',
    filled: '0 / 75',
    time: '09:33:52 AM',
    carry: 'CARRYFORWARD',
    orderType: 'Limit',
    ltp: '10.10'
  },
  {
    id: 4,
    symbol: 'NIFTY',
    date: '08 MAY\'25',
    strike: '25000.00 CE',
    type: 'Buy',
    quantity: 75,
    price: '₹21.00',
    status: 'Cancelled',
    filled: '0 / 75',
    time: '09:33:01 AM',
    carry: 'CARRYFORWARD',
    orderType: 'Limit',
    ltp: '12.20'
  }
];

const Orders = () => {
  const [activeTab, setActiveTab] = useState('All');

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <FaCheckCircle className="text-green-500" />;
      case 'Rejected':
      case 'Cancelled':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-4 bg-gray-100">
      <div className="max-w-3xl mx-auto pt-12 p-1">
        <div className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-gray-700">Net Position(1)</div>
            <div className="text-sm text-green-600 font-medium">Today's P/L: ₹18.75</div>
          </div>
        </div>

        <div className="flex mb-2 border-b">
          {tabOptions.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center py-2 font-medium ${
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500'
              }`}
            >
              {tab} ({tab === 'Open' ? 0 : tab === 'Completed' ? 2 : 5})
            </button>
          ))}
        </div>

        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow p-4 mb-3">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-gray-700">{order.symbol} <span className="text-xs text-gray-500">NSE</span></p>
                <p className="text-sm text-gray-600">{order.date} {order.strike}</p>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold">
                <span className="text-gray-600">{order.status}</span>
                {getStatusIcon(order.status)}
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div>
                <p className={`font-medium ${order.type === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>
                  {order.type}: {order.quantity} Qty @ {order.price}
                </p>
                <p className="text-xs text-gray-500">{order.time}</p>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p>{order.filled} Qty</p>
                <p className="text-sm">LTP: {order.ltp}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{order.carry}</span>
              <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{order.orderType}</span>
              {order.tradedPrice && <span className="text-gray-500">Traded: {order.tradedPrice}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
