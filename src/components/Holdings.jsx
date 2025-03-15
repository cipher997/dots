import React from 'react'

const Holdings = () => {
  return (
    <div className="flex w-full min-h-screen pt-10">
      <main className="flex-1 rounded-xl p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Holdings</h1>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Your Holdings</h2>
          <p className="text-gray-500">No holdings found.</p>
        </div>
      </main>
    </div>
  )
}

export default Holdings