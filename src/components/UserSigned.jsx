import React from 'react'
import viteLogo from '/vite.svg'
import { FaRegBell } from 'react-icons/fa'; // Importing icons
import { AiOutlineShoppingCart } from "react-icons/ai";

const UserSigned = ({ setLogin, setRegister }) => {
    return (
        <div id='app' className='app page-ipo'>
            <div className='header min-w-[320px] box-border z-[9] w-full sticky top-0 bg-[var(--color-bg-default)] shadow-[0_1px_5px_0_rgba(var(--color-border-5--rgb),0.1)] py-3'>
                <div className='wrapper flex mx-2'>
                    <div className='header-left flex-[0_0_calc(var(--left-content-width)_+_1px)]'>
                        <div className='pinned-instruments flex flex-wrap justify-between items-center h-full font-semibold px-[15px] border-r border-[var(--color-border-default)]'>
                            <div className='instrument-widget flex-1 inline-flex items-center'>
                                <span className='tradingsymbol link-chart '></span><span className='text-[0.75rem] font-semibold'>NIFTY 50</span>
                                <span className="wrap inline-block font-semibold text-[0.75rem] ms-2"><span className="last-price up text-[var(--color-text-8)] mr-[2px]">22552.50</span> <span className="price-change dim"><span className="all dim text-[0.625rem] opacity-70">7.80(0.03<span className="text-xxsmall opacity-70">%</span>)</span></span></span>
                            </div>
                            <div className='instrument-widget flex-1 inline-flex items-center'>
                                <span className='tradingsymbol link-chart'></span><span className='text-[0.75rem] font-semibold'>SENSEX</span>
                                <span className="wrap inline-block font-semibold text-[0.75rem] ms-2"><span className="last-price up text-[var(--color-text-10)] mr-[2px]">22552.50</span> <span className="price-change dim"><span className="all dim text-[0.625rem] opacity-70">7.80(0.03<span className="text-xxsmall opacity-70">%</span>)</span></span></span>
                            </div>
                        </div>
                    </div>
                    <div className='header-right flex-1 flex relative perspective-[1000px]'>
                        <a href="" className='logo flex-none inline-flex items-center justify-center leading-[1] mx-[20px] ml-[30px]'>
                            <img src={viteLogo} alt="" className='w-auto h-[14px]' />
                        </a>
                        <nav className='app-nav flex-[4] min-w-[480px] text-right border-r border-[var(--color-border-default)] pr-[5px]'>
                            <a href="" className='px-[16px] text-[0.75rem] leading-[1] inline-flex items-center justify-center no-underline text-[var(--color-text-default)] hover:text-red-600 transition-colors'>Dashboards</a>
                            <a href="" className='px-[16px] text-[0.75rem] leading-[1] inline-flex items-center justify-center no-underline text-[var(--color-text-default)] hover:text-red-600 transition-colors'>Orders</a>
                            <a href="" className='px-[16px] text-[0.75rem] leading-[1] inline-flex items-center justify-center no-underline text-[var(--color-text-default)] hover:text-red-600 transition-colors'>Holdings</a>
                            <a href="" className='px-[16px] text-[0.75rem] leading-[1] inline-flex items-center justify-center no-underline text-[var(--color-text-default)] hover:text-red-600 transition-colors'>Positions</a>
                            <a href="" className='px-[16px] text-[0.75rem] leading-[1] inline-flex items-center justify-center no-underline text-[var(--color-text-default)] hover:text-red-600 transition-colors'>Bids</a>
                            <a href="" className='px-[16px] text-[0.75rem] leading-[1] inline-flex items-center justify-center no-underline text-[var(--color-text-default)] hover:text-red-600 transition-colors'>Funds</a>
                        </nav>
                        <div className='right-nav flex ml-[15px] h-full'>
                            {/* <a href="" className='text-[0.75rem] leading-[1] no-underline text-[var(--color-text-default)] inline-flex items-center justify-center'></a>
                               <div className='virtual-basket-menu'></div>
                               <nav className='user-nav perspective'></nav> */}
                            {/* Cart, Notification, and Login Buttons */}
                            <div className="right-nav flex ml-[15px] h-full items-center space-x-4">
                                {/* Cart Icon */}
                                <a href="#" className="text-gray-700 hover:text-black">
                                    <AiOutlineShoppingCart size={20} />
                                </a>

                                {/* Notification Icon */}
                                <a href="#" className=" hover:text-black">
                                    <FaRegBell size={20} />
                                </a>

                                {/* Login & Signup Buttons */}
                                <a href="#" className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm" onClick={() => setLogin(true)}>
                                    LogIn
                                </a>
                                <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg text-sm" onClick={() => setRegister(true)}>
                                    SignUp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container wrapper'></div>
        </div>
    )
}

export default UserSigned