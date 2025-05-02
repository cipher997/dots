import React from 'react';
import {
  MdDashboard,
  MdPlaylistAddCheck,
  MdAccountBalanceWallet,
  MdShoppingCart,
  MdTrendingUp,
} from 'react-icons/md';

const navItems = [
  { id: 'Watchlist', label: 'Watchlist', icon: MdPlaylistAddCheck },
  { id: 'Portfolio', label: 'Portfolio', icon: MdAccountBalanceWallet },
  { id: 'Dashboard', label: 'Dashboard', icon: MdDashboard },
  { id: 'Orders', label: 'Orders', icon: MdShoppingCart },
  { id: 'Position', label: 'Position', icon: MdTrendingUp },
];

const GameTable = ({ setActiveComponent, activeComponent }) => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-between px-1 py-1 shadow-sm">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeComponent === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.id)}
              className={`flex flex-col items-center justify-center flex-1 py-2 text-xs transition-colors duration-200 ${
                isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              <Icon size={22} />
              <span className="mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GameTable;
