'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 sm:p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/Logo.png"
            alt="Nike Logo"
            className="h-12 sm:h-14"
            width={100}
            height={100}
          />
        </div>

        {/* Title */}
        <h2 className="text-center text-lg sm:text-xl font-bold text-gray-800 mb-6">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black text-sm sm:text-base"
              required
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black text-sm sm:text-base"
              required
            />

            {/* Keep Me Signed In */}
            <div className="flex justify-between items-center text-sm sm:text-base">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="keepSignedIn"
                  className="form-checkbox focus:ring-black focus:border-black"
                />
                <label
                  htmlFor="keepSignedIn"
                  className="ml-2 text-gray-600 cursor-pointer"
                >
                  Keep me signed in
                </label>
              </div>
              <p className="text-gray-600 hover:underline cursor-pointer">
                Forgotten your password?
              </p>
            </div>

            {/* Privacy Notice */}
            <p className="text-gray-500 text-xs sm:text-sm mt-4">
              By logging in&lsquo; you agree to Nike's{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline">
                Terms of Use
              </Link>
              .
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white text-sm sm:text-base font-semibold py-2 sm:py-3 rounded-md mt-6 hover:bg-gray-800"
            >
              Sign in
            </button>

            {/* Join Us Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Not a Member?{" "}
              <Link href="/joinus" className="underline">
                Join Us
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
