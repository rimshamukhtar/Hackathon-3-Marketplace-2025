'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import search from "../../public/Assets/search.png";
import like from "../../public/Assets/like.png";
import bag from "../../public/Assets/bag.png";

const Navbar = () => {
  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    } else {
      console.error('Mobile menu element not found');
    }
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-neutral-100 flex justify-between items-center px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-gray-600">
        <Image src="/Assets/Man pic.png" alt={'man pic'} width={24} height={24} className="ml-2 md:ml-8" />
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <Link href="/findstore" className="hover:text-gray-800">Find Link Store</Link>
          <Link href="/help" className="hover:text-gray-800">Help</Link>
          <Link href="/joinus" className="hover:text-gray-800">Join Us</Link>
          <Link href="/login_page" className="hover:text-gray-800">Sign In</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-wrap items-center justify-between p-3 md:p-4 lg:p-6">
        {/* Logo */}
        <Link href="/" className="ml-4 sm:ml-8">
          <Image
            src="/Assets/Logo.png"
            alt="Nike Logo"
            className="h-8 md:h-12"
            width={70}
            height={50}
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            id="menu-button"
            onClick={toggleMobileMenu} // Use the toggle function
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-6 lg:gap-10 font-medium text-sm lg:text-base">
          <Link href="/productsfetch">New & Featured</Link>
          <Link href="/products">Men</Link>
          <Link href="/allproducts">Women</Link>
          <Link href="#">Kids</Link>
          <Link href="#">Sale</Link>
          <Link href="#">SNKRS</Link>
        </div>

        {/* Search Bar and Icons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 rounded-full pl-8 pr-4 h-[30px] text-sm outline-none w-[180px]"
            />
            <Image
              src={search}
              alt="Search"
              className="w-5 h-5 absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer"
            />
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-2">
            <Link href="/wishlist"><Image src={like} alt="Like" className="w-7 h-7 cursor-pointer" /></Link>
            <Link href="/Bag"><Image src={bag} alt="Cart" className="w-7 h-7 cursor-pointer" /></Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div id="mobile-menu" className="hidden flex-col gap-4 md:hidden bg-neutral-100 p-4">
        <Link href="/productsfetch" className="block text-sm font-medium hover:text-gray-800">New & Featured</Link>
        <Link href="/products" className="block text-sm font-medium hover:text-gray-800">Men</Link>
        <Link href="/allproducts" className="block text-sm font-medium hover:text-gray-800">Women</Link>
        <Link href="#" className="block text-sm font-medium hover:text-gray-800">Kids</Link>
        <Link href="#" className="block text-sm font-medium hover:text-gray-800">Sale</Link>
        <Link href="#" className="block text-sm font-medium hover:text-gray-800">SNKRS</Link>

        {/* Search Bar and Icons for Mobile */}
        <div className="mt-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 rounded-full pl-8 pr-4 h-[30px] text-sm outline-none w-full"
            />
            <Image
              src={search}
              alt="Search"
              className="w-5 h-5 absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link href="/wishlist"><Image src={like} alt="Like" className="w-7 h-7 cursor-pointer" /></Link>
            <Link href="/Bag"><Image src={bag} alt="Cart" className="w-7 h-7 cursor-pointer" /></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
