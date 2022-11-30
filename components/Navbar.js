import React from 'react'
import Link from 'next/Link'

function Navbar() {
  return (
    <header className="text-gray-600 bg-gray-100 body-font fixed top-0 w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-800 mb-4 md:mb-0">
            <img className='w-10 h-10 text-white p-2 bg-blue-500 rounded-full' src="https://thumbs.dreamstime.com/b/blue-letter-b-logo-power-blue-letter-b-logo-power-logo-luxury-minimalist-badge-logo-edge-contrast-color-logo-114749609.jpg" alt="logo" />
            <span className="ml-3 text-xl">Blogging_Site</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center list-none">
            <li className="mr-5 hover:text-gray-900 cursor-pointer"><Link href="/">Home</Link></li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer"><Link href="/blogs">Blogs</Link></li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer"><Link href="/about">About Us</Link></li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer"><Link href="/contact">Contact Us</Link></li>
          </nav>
          <button className="inline-flex items-center bg-blue-500 text-white border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">Sign Up
          </button>
        </div>
      </header>
  )
}

export default Navbar