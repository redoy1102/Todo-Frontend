'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: any) => {
    e.preventDefault();
    console.log('register', { email, password });
  };

  return (
    <div className="h-screen flex flex-col space-y-6 justify-center items-center">
      <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  focus:outline-none"
            placeholder="name@company.com"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-300 text-white p-1.5 rounded hover:bg-purple-400 duration-300 ease-in-out transition-all"
        >
          <span>Register</span>
        </button>
      </form>
      <Link href="/login" className="ml-4">
        <button className="bg-purple-300 text-white p-1.5 rounded hover:bg-purple-400 duration-300 ease-in-out transition-all">
          Login Now
        </button>
      </Link>
      <Link href="/">
        <button className="bg-purple-300 text-white p-1.5 rounded hover:bg-purple-400 duration-300 ease-in-out transition-all">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
