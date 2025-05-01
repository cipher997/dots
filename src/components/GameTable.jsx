import React from 'react';
import {
  MdDashboard,
  MdShoppingCart,
  MdTrendingUp,
  MdAccountBalanceWallet,
  MdAttachMoney
} from 'react-icons/md';

const navItems = [
  { id: 'Orders', label: 'Orders', icon: MdShoppingCart },
  { id: 'Holdings', label: 'Holdings', icon: MdTrendingUp },
  { id: 'Dashboard', label: 'Dashboard', icon: MdDashboard },
  { id: 'Positions', label: 'Positions', icon: MdAccountBalanceWallet },
  { id: 'Funds', label: 'Funds', icon: MdAttachMoney },
];

const GameTable = ({ setActiveComponent, activeComponent }) => {
  return (
    <div className="fixed bottom-0 w-full z-50 md:hidden">
      <div className="bg-white border-t border-gray-200 text-gray-600 flex justify-between items-center px-2 py-2 shadow-lg rounded-t-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeComponent === item.id;
          const isDashboard = item.id === 'Dashboard';

          return (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-center flex-1 ${
                isDashboard ? 'relative -mt-6' : ''
              }`}
            >
              <button
                onClick={() => setActiveComponent(item.id)}
                className={`flex flex-col items-center justify-center transition duration-200 ease-in-out ${
                  isDashboard
                    ? 'bg-blue-600 text-white p-4 rounded-full shadow-md'
                    : isActive
                    ? 'text-blue-600'
                    : 'hover:text-blue-500'
                }`}
              >
                <Icon size={isDashboard ? 30 : 24} />
                {!isDashboard && (
                  <span className="text-xs mt-1">{item.label}</span>
                )}
              </button>
              {!isDashboard && isActive && (
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameTable;
