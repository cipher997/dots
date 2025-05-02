import React from 'react'

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-15">
      <div className="max-w-md mx-auto bg-white shadow rounded-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex text-sm text-gray-600 font-medium border-b">
          <button className="flex-1 text-center py-2 border-b-2 border-blue-600 text-blue-600">Overview</button>
          <button className="flex-1 text-center py-2">Equity</button>
          <button className="flex-1 text-center py-2">Mutual Fund</button>
          <button className="flex-1 text-center py-2 hidden sm:block">Eq. Derivatives</button>
        </div>

        {/* Holdings */}
        <div className="p-4">
          <p className="text-xs text-gray-400 mb-2">Trades updated till Yesterday</p>
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
              <span>Market Value</span>
              <span>Total Gain/Loss</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>₹ 256.53</span>
              <span className="text-red-600">₹ -35.06 (-12.02%)</span>
            </div>
            <div className="text-right text-sm mt-2 text-red-500">
              Today’s Gain/Loss ₹ -4.43 (-1.70%)
            </div>
          </div>

          {/* Positions */}
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <h2 className="text-md font-semibold text-gray-800 mb-1">Explore Equity & Commodity Derivative</h2>
            <p className="text-sm text-gray-600">Dive into the world of Derivative & Commodity</p>
            <button className="text-blue-600 text-sm mt-2 font-medium">Explore Now →</button>
          </div>

          {/* Mutual Fund */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h2 className="text-md font-semibold text-gray-800 mb-1">Unlock Your Financial Potential</h2>
            <p className="text-sm text-gray-600">Mutual Funds Simplified</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 text-xs text-gray-600">
          <div className="flex flex-col items-center">
            <span>🏠</span>
            <span>Dashboard</span>
          </div>
          <div className="flex flex-col items-center">
            <span>⭐</span>
            <span>Watchlist</span>
          </div>
          <div className="flex flex-col items-center text-blue-600">
            <span>📊</span>
            <span>Portfolio</span>
          </div>
          <div className="flex flex-col items-center">
            <span>🛒</span>
            <span>Orders</span>
          </div>
          <div className="flex flex-col items-center">
            <span>📁</span>
            <span>Position</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
