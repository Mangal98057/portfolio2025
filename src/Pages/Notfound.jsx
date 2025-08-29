import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
      <h1 className="text-9xl font-extrabold text-amber-400 drop-shadow-lg">404</h1>
      <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>
      <p className="mt-2 text-gray-400 text-center">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-amber-400 text-black font-semibold rounded-xl shadow-md hover:bg-amber-300 transition"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default Notfound
