import React from 'react'

const Funds = () => {
  return (
    <div className="flex w-full min-h-screen pt-10">
      <main className="flex-1 rounded-xl p-6 max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
          <h1 className="text-2xl font-bold text-gray-800">Funds</h1>
          <div className="mt-4 flex flex-col sm:flex-row md:flex-row w-full sm:w-auto gap-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto md:w-auto hover:bg-green-600 transition">Add Funds</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto md:w-auto hover:bg-red-600 transition">Withdraw</button>
          </div>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Available Funds</h2>
          <p className="text-gray-500">Balance: <span className="font-bold text-gray-900">$0.00</span></p>
        </div>
      </main>
    </div>
  )
}

export default Funds