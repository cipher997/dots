import React from 'react';
import {
  MdPerson,
  MdLock,
  MdGavel,
  MdInfo,
  MdSettings,
  MdBarChart,
  MdContactMail
} from 'react-icons/md';

const Profile = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white pt-10 px-4">
      <main className="flex flex-col flex-1 rounded-xl p-4 max-w-md mx-auto text-center">
        
        {/* Profile Image & Name */}
        <div className="flex flex-col items-center mt-15">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <MdPerson size={48} className="text-gray-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Kartik</h2>
          <p className="text-sm text-gray-600">Balance: <span className="font-bold">₹0.00</span></p>
        </div>

        {/* Push icons to the bottom */}
        <div className="mt-auto mb-30">
          {/* First Row of Icons */}
          <div className="mt-8 grid grid-cols-3 gap-20">
            <IconCard icon={MdLock} label="Privacy" />
            <IconCard icon={MdGavel} label="Terms" />
            <IconCard icon={MdInfo} label="Guidelines" />
          </div>

          {/* Second Row of Icons */}
          <div className="mt-6 grid grid-cols-3 gap-20">
            <IconCard icon={MdSettings} label="Settings" />
            <IconCard icon={MdBarChart} label="Stats" />
            <IconCard icon={MdContactMail} label="Contact" />
          </div>
        </div>
      </main>
    </div>
  );
};

const IconCard = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shadow-sm hover:bg-blue-100 transition">
      <Icon size={24} className="text-gray-700" />
    </div>
    <span className="mt-2 text-sm text-gray-700">{label}</span>
  </div>
);

export default Profile;
