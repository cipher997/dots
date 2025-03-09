import React from 'react'
import { IoClose } from "react-icons/io5";

const Forgot = ({ setLogin, setRegister, setForgot }) => {
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button onClick={() => setForgot(false)} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
          <IoClose size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Forgot Password</h2>

        <p className="text-sm text-gray-600 mb-4 text-center">
          Enter your email to receive password reset instructions.
        </p>

        {/* Input Fields */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400" 
              placeholder="Enter your email" 
            />
          </div>

          {/* Reset Password Button */}
          <div className="flex justify-between mt-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition">
              Send Reset Link
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between space-x-2 mt-2">
            <button 
              onClick={() => { setForgot(false); setLogin(true); }} 
              className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition"
            >
              Login
            </button>
            <button 
              onClick={() => { setForgot(false); setRegister(true); }} 
              className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Forgot