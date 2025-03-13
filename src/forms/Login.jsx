import React from 'react'
import { IoClose } from "react-icons/io5"; // Import Close Icon

const Login = ({ setLogin, setRegister, setForgot }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 popup-content">
        {/* Modal Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          {/* Close Button */}
          <button onClick={() => setLogin(false)} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
            <IoClose size={24} />
          </button>

          <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

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

            <div>
              <label className="block text-gray-700 text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="text-blue-500" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>

            {/* Login & Signup & Forgot Password Buttons */}
            <div className="flex justify-between mt-4">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition">
                Login
              </button>
            </div>

            <div className="flex justify-between space-x-2 mt-2">
              <button className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition" onClick={() => { setLogin(false); setRegister(true); }}>
                Sign Up
              </button>
              <button className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition" onClick={() => { setForgot(true); setLogin(false); }}>
                Forgot Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login