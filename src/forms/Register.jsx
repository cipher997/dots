import React from 'react'
import { IoClose } from "react-icons/io5"; // Import Close Icon

const Register = ({ setLogin, setRegister, setForgot }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 popup-content">
        {/* Modal Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          {/* Close Button */}
          <button onClick={() => setRegister(false)} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
            <IoClose size={24} />
          </button>

          <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>

          {/* Input Fields */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium">Username</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400" placeholder="Enter your username" />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400" placeholder="Enter your email" />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">Mobile</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400" placeholder="Enter your mobile number" />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">Password</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400" placeholder="Enter your password" />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">Confirm Password</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400" placeholder="Confirm your password" />
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="text-blue-500" />
              <label className="text-gray-700">I accept the <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a></label>
            </div>

            {/* Sign Up & Navigation Buttons */}
            <div className="flex justify-between mt-4">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition">
                Sign Up
              </button>
            </div>

            <div className="flex justify-between space-x-2 mt-2">
              <button
                onClick={() => { setRegister(false); setLogin(true); }}
                className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition"
              >
                Login
              </button>
              <button
                onClick={() => { setRegister(false); setForgot(true); }}
                className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition"
              >
                Forgot Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register