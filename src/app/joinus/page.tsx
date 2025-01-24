'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function JoinForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^[0-9]{10}$/;

    setError("");

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (phone && !phonePattern.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    console.log("Form submitted:", { email, phone, password, firstName, lastName });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <Image src="/Logo.png" alt="Nike Logo" className="h-14" width={56} height={56} />
        </div>

        <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
          BECOME A NIKE MEMBER
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Create your Nike Member profile and get first access to the very best of Nike products&lsquo; inspiration&lsquo; and community.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              required
            />

            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            />

            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              required
            />
            <p className="text-xs text-gray-500">Get a Nike Member Reward every year on your Birthday.</p>

            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              defaultValue="India"
              required
            >
              <option value="India">India</option>
            </select>

            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio focus:ring-black focus:border-black"
                  required
                />
                <span className="ml-2 text-gray-800">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio focus:ring-black focus:border-black"
                  required
                />
                <span className="ml-2 text-gray-800">Female</span>
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox focus:ring-black focus:border-black" />
              <p className="ml-2 text-xs text-gray-600">
                Sign up for emails to get updates from Nike on products&lsquo; offers&lsquo; and your Member benefits.
              </p>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <p className="text-xs text-gray-500 mt-4">
            By creating an account&lsquo; you agree to Nike's{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-black text-white text-sm font-semibold py-3 rounded-md mt-6 hover:bg-gray-800"
          >
            JOIN US
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already a Member?{" "}
            <Link href="/login_page" className="underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
