import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import { FaRegBell } from 'react-icons/fa'; // Importing icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu, HiX } from 'react-icons/hi';
import { MdDashboard, MdShoppingCart, MdTrendingUp, MdAccountBalanceWallet, MdAttachMoney, MdAssessment } from 'react-icons/md';

const UserSigned = ({ setLogin, setRegister, setActiveComponent }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Dashboard'); // Meaningful name

    const navigationLinks = [
        { label: 'Dashboard', icon: <MdDashboard size={20} /> },
        { label: 'Orders', icon: <MdShoppingCart size={20} /> },
        { label: 'Holdings', icon: <MdTrendingUp size={20} /> },
        { label: 'Positions', icon: <MdAssessment size={20} /> },
        { label: 'Bids', icon: <MdAttachMoney size={20} /> },
        { label: 'Funds', icon: <MdAccountBalanceWallet size={20} /> },
    ];

    const handleNavigationClick = (tabName) => {
        setSelectedTab(tabName);
        setActiveComponent(tabName);
    };

    return (
        <div className='app page-ipo'>
            <header className='w-full sticky top-0 bg-white shadow-md py-3 px-4 md:px-6 flex items-center justify-between'>
                {/* Logo & Menu Button */}
                <div className='flex items-center space-x-4'>
                    <button className='md:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                    <a href='/' className='flex items-center space-x-2'>
                        <img src={viteLogo} alt='Logo' className='w-auto h-6' />
                        <span className='text-lg font-semibold text-gray-700'></span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden md:flex md:items-center md:space-x-6'>
                    {navigationLinks.map((link) => (
                        <a
                            key={link.label}
                            onClick={() => handleNavigationClick(link.label)}
                            href='#'
                            className={`flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer transition-colors ${selectedTab === link.label
                                    ? 'text-red-600 font-semibold bg-gray-100' // Highlight selected tab
                                    : 'text-gray-700 hover:text-red-600'
                                }`}
                        >
                            {link.icon} <span>{link.label}</span>
                        </a>
                    ))}
                </nav>

                {/* Icons & Buttons */}
                <div className='flex items-center space-x-4'>
                    <a href='#' className='text-gray-700 hover:text-black'>
                        <AiOutlineShoppingCart size={20} />
                    </a>
                    <a href='#' className='text-gray-700 hover:text-black'>
                        <FaRegBell size={20} />
                    </a>
                    <button className='rounded-lg bg-red-600 py-1 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 cursor-pointer' onClick={() => setLogin(true)}>
                        LogIn
                    </button>
                    <button className='rounded-lg bg-blue-500 py-1 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 cursor-pointer' onClick={() => setRegister(true)}>
                        SignUp
                    </button>
                </div>
            </header>

            {/* Sidebar Navigation */}
            <div className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 p-5 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden flex flex-col`}>
                {/* Sidebar Header */}
                <div className='flex items-center justify-between mb-4'>
                    <a href='/' className='flex items-center space-x-2'>
                        <img src={viteLogo} alt='Logo' className='w-auto h-6' />
                        <span className='text-lg font-semibold text-gray-700'>dots</span>
                    </a>
                    <button onClick={() => setIsSidebarOpen(false)}>
                        <HiX size={24} />
                    </button>
                </div>

                {/* Sidebar Menu */}
                <ul className='flex-1 space-y-4'>
                    {navigationLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                onClick={() => handleNavigationClick(link.label)}
                                href='#'
                                className={`flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer transition-colors ${selectedTab === link.label
                                        ? 'text-red-600 font-semibold bg-gray-100' // Highlight selected tab
                                        : 'text-gray-700 hover:text-red-600'
                                    }`}
                            >
                                {link.icon} <span>{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Sidebar Footer */}
                <div className='mt-auto text-center border-t pt-4 text-gray-500 text-sm'>
                    © 2025 dots. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default UserSigned