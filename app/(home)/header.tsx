"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface HeaderProps {
  logo?: string; // Optional logo path
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [navOpen, setNavOpen] = useState(false)

  const menuHandler = () => {
    setNavOpen(!navOpen)
  }
  // className="hidden sm:flex space-x-4"
  return (
    <>
      <header className="flex items-center justify-between py-4 px-6 bg-gray-800 text-white">
        <div className="flex items-center">
          {logo && (
            <Link href="/">
              <img src={logo} alt="Your Brand Logo" className="h-8 w-auto" />
            </Link>
          )}
          <h1 className="text-xl font-bold ml-4 cursor-pointer"><Link href="/">Ecommerce</Link></h1>
        </div>
        <nav className={clsx('hidden sm:flex space-x-4',
        )} >
          <Link href="/" className='hover:text-gray-400'>
            Home
          </Link>
          <Link className="hover:text-gray-400" href="/products">
            products
          </Link>
          <Link className="hover:text-gray-400" href="/cart">
            cart
          </Link>
          <Link className="hover:text-gray-400" href="/register">
            Register
          </Link>

        </nav>
        <button className="sm:hidden text-white focus:outline-none hover:text-gray-400" onClick={menuHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header >
      <div className={clsx('sm:hidden bg-gray-700 flex space-y-2 px-2 flex-col',
        navOpen && 'max-sm:visible',
        !navOpen && 'hidden'
      )}>
        <Link href="/" className='hover:text-gray-400'>
          Home
        </Link>
        <Link className="hover:text-gray-400" href="/products">
          products
        </Link>
        <Link className='hover:text-gray-400' href="/cart">
          cart
        </Link>
        <Link className="hover:text-gray-400" href="/register">
          Register
        </Link>


      </div>

    </>
  );
};

export default Header;

