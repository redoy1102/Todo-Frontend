'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { FaSignInAlt } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { toast } from 'sonner';

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isCPasswordVisible, setIsCPasswordVisible] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();

  const toggleShowingPassword = () => {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      setIsPasswordVisible((prev) => !prev);
    } else {
      passwordInput.type = 'password';
      setIsPasswordVisible((prev) => !prev);
    }
  };

  const toggleShowingCPassword = () => {
    const passwordInput = document.getElementById(
      'cpassword'
    ) as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      setIsCPasswordVisible((prev) => !prev);
    } else {
      passwordInput.type = 'password';
      setIsCPasswordVisible((prev) => !prev);
    }
  };

  const handleSignup = (signupData: FieldValues) => {
    const { name, email, password, cpassword } = signupData;

    if (password !== cpassword) {
      toast.error('Password and Confirm Password does not match', {
        position: 'top-right',
        duration: 1500,
        icon: '❌',
      });
      return;
    }
  };

  return (
    <div className="main-container flex justify-center items-center min-h-screen">
      <div className="shadow-lg pb-8 w-full md:w-10/12 lg:w-6/12 rounded-md">
        <div className="shadow py-3 flex justify-between items-center">
          <h3 className="text-custom-black text-xl font-bold ml-8">
            Create New Account
          </h3>
          <Link
            href="/"
            className="flex justify-center items-center gap-x-1 group hover:text-primary transition-all duration-300 ease-in-out"
          >
            <IoIosArrowRoundBack />
            <button className="mr-2 text-dim hover:text-primary transition-all duration-300 ease-in-out">
              Home
            </button>
          </Link>
        </div>
        <div className="h-[2px] w-3/5 mb-6 bg-purple-400"></div>
        <div className="px-8">
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(handleSignup)}
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none"
                placeholder="e.g. Babul Akter"
                {...register('name')}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none"
                placeholder="name@company.com"
                {...register('email')}
                required
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
                type={isPasswordVisible ? 'text' : 'password'}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none"
                {...register('password')}
                required
              />
              <span
                className="absolute cursor-pointer top-10 right-3"
                onClick={toggleShowingPassword}
              >
                {isPasswordVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>
            <div className="relative">
              <label
                htmlFor="cpassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <input
                type={isCPasswordVisible ? 'text' : 'password'}
                id="cpassword"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none"
                {...register('cpassword')}
                required
              />
              <span
                className="absolute cursor-pointer top-10 right-3"
                onClick={toggleShowingCPassword}
              >
                {isCPasswordVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>
            <button
              type="submit"
              className="btn-secondary w-full flex justify-center space-x-4 items-center"
            >
              <FaSignInAlt />
              <span>Sign Up</span>
            </button>
          </form>

          {/* not registered */}
          <div className="flex items-center justify-between mt-12">
            <p className="text-sm text-offgray">Already Registered?</p>
            <Link href="/login">
              <span className="text-sm hover:text-orange-400 hover:transition-all duration-300 underline text-offgray">
                Go to LogIn
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
