'use client';

import { useLoginMutation } from '@/redux/api/userApi';
import { setAccessToken } from '@/services/actions/setAccessToken';
import { storeToken } from '@/services/auth.service';
import { LoginFormSchema } from '@/types/Forms.types';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { FaSignInAlt } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa6';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { toast } from 'sonner';

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    setValue, // Added for setting form values
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  const handleDemoSignIn = () => {
    setValue('email', 'babulakterfsd@gmail.com');
    setValue('password', 'Babul123');
  };

  const resetForm = () => {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;

    emailInput.value = '';
    passwordInput.value = '';
  };

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

  const handleLogin = async (loginData: FieldValues) => {
    const { email, password } = loginData;

    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address', {
        position: 'top-right',
        duration: 1500,
        icon: '❌',
      });
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long', {
        position: 'top-right',
        duration: 1500,
        icon: '❌',
      });
      return;
    }

    // check if password contains at least one number and one uppercase letter
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])/;
    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must contain at least one number and one uppercase letter',
        {
          position: 'top-right',
          duration: 1500,
          icon: '❌',
        }
      );
      return;
    }

    try {
      const response = await login(loginData).unwrap();

      if (response.data?.accessToken) {
        storeToken(response.data?.accessToken);
        setAccessToken(response?.data?.accessToken, {
          redirect: '/dashboard',
        });
        toast.success('Logged in successfully', {
          position: 'top-right',
          duration: 1500,
          icon: '🚀',
        });
        resetForm();
      }

      if (!response.data?.accessToken) {
        toast.error(response.message, {
          position: 'top-right',
          duration: 1500,
          icon: '❌',
        });
      }
    } catch (error) {
      toast.error('Login failed', {
        position: 'top-right',
        duration: 1500,
        icon: '❌',
      });
    }
  };

  return (
    <div className="main-container flex justify-center items-center min-h-screen">
      <div
        className="shadow-lg dark:shadow-slate-800 pb-8 w-full md:w-10/12 lg:w-6/12 rounded-md"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="shadow py-3 flex justify-between items-center">
          <h3 className="text-custom-black text-xl font-bold ml-8">
            Login to your account
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
            onSubmit={handleSubmit(handleLogin)}
          >
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none"
                placeholder="name@company.com"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.email.message?.toString()}
                </span>
              )}
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
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.password.message?.toString()}
                </span>
              )}
              <span
                className="absolute cursor-pointer top-10 right-3"
                onClick={toggleShowingPassword}
              >
                {isPasswordVisible ? (
                  <IoEyeOutline className="dark:text-gray-600" />
                ) : (
                  <IoEyeOffOutline className="dark:text-gray-600" />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="btn-secondary w-full flex justify-center space-x-4 items-center"
            >
              <FaSignInAlt />
              <span>{isLoading ? 'Signing In...' : 'Sign In'}</span>
            </button>
          </form>

          {/* other parts */}
          <div className="flex items-center justify-between mt-5">
            <div className="h-[.5px] w-3/5 mb-6 bg-orange"></div>
            <span className="-mt-6 mx-3 text-offgray">or</span>
            <div className="h-[.5px] w-3/5 mb-6 bg-orange"></div>
          </div>
          {/* demo account data button */}
          <div
            className="w-full py-2 border border-purple-400 flex justify-center space-x-4 items-center hover:cursor-pointer hover:bg-purple-400 text-offgray hover:text-white rounded"
            onClick={handleDemoSignIn}
          >
            <span className="text-sm">
              <FaDatabase />
            </span>
            <span className="ml-2 text-sm">Login With Demo Account</span>
          </div>

          {/* not registered */}
          <div className="flex items-center justify-between mt-12">
            <p className="text-sm text-offgray">No existing account?</p>
            <Link href="/register">
              <span className="text-sm hover:text-orange-400 hover:transition-all duration-300 underline text-offgray">
                Go to Signup
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
