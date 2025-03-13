import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import { FaRegBell } from 'react-icons/fa'; // Importing icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu, HiX } from 'react-icons/hi';
import { MdDashboard, MdShoppingCart, MdTrendingUp, MdAccountBalanceWallet, MdAttachMoney, MdAssessment } from 'react-icons/md';

const UserSigned = ({ setLogin, setRegister }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Dashboard', icon: <MdDashboard size={20} /> },
        { name: 'Orders', icon: <MdShoppingCart size={20} /> },
        { name: 'Holdings', icon: <MdTrendingUp size={20} /> },
        { name: 'Positions', icon: <MdAssessment size={20} /> },
        { name: 'Bids', icon: <MdAttachMoney size={20} /> },
        { name: 'Funds', icon: <MdAccountBalanceWallet size={20} /> },
    ];
    return (
        <div className='app page-ipo'>
            <header className='w-full sticky top-0 bg-white shadow-md py-3 px-4 md:px-6 flex items-center justify-between'>
                {/* Logo & Menu Button */}
                <div className='flex items-center space-x-4'>
                    <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                    <a href='/' className='flex items-center space-x-2'>
                        <img src={viteLogo} alt='Logo' className='w-auto h-6' />
                        <span className='text-lg font-semibold text-gray-700'></span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden md:flex md:items-center md:space-x-6'>
                    {menuItems.map((item) => (
                        <a key={item.name} href='#' className='flex items-center space-x-2 text-gray-700 hover:text-red-600'>
                            {item.icon} <span>{item.name}</span>
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
                    <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm' onClick={() => setLogin(true)}>
                        LogIn
                    </button>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg text-sm' onClick={() => setRegister(true)}>
                        SignUp
                    </button>
                </div>
            </header>

            {/* Sidebar Navigation */}
            <div className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 p-5 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden flex flex-col`}>
                {/* Sidebar Header */}
                <div className='flex items-center justify-between mb-4'>
                    <a href='/' className='flex items-center space-x-2'>
                        <img src={viteLogo} alt='Logo' className='w-auto h-6' />
                        <span className='text-lg font-semibold text-gray-700'>dots</span>
                    </a>
                    <button onClick={() => setMenuOpen(false)}>
                        <HiX size={24} />
                    </button>
                </div>
                
                {/* Sidebar Menu */}
                <ul className='flex-1 space-y-4'>
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <a href='#' className='flex items-center space-x-2 text-gray-700 hover:text-red-600'>
                                {item.icon} <span>{item.name}</span>
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