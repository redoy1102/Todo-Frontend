'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { logoutUser } from '@/services/actions/logoutUser';
import { isLoggedIn } from '@/services/auth.service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiOutlineMenu } from 'react-icons/hi';

const menuItems = [
  { name: 'About', path: '/about', current: false },
  { name: 'Contact', path: '/contact', current: false },
  { name: 'Dashboard', path: '/dashboard', current: false },
];

const Navbar = () => {
  const isUserLoggedin = isLoggedIn();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="main-container">
        <div className="flex items-center justify-between py-3">
          {/* Left Side */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold dark:text-dim">
              NextjsRND
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link href={item.path} key={item.name}>
                  <button className="hover:text-orange-400 transition-all duration-300 ease-in-out">
                    {item.name}
                  </button>
                </Link>
              ))}
              {!isUserLoggedin && (
                <Link href="/login" className="">
                  <button className="btn-primary md:ml-12 lg:ml-16">
                    Login
                  </button>
                </Link>
              )}
              {isUserLoggedin && (
                <button
                  className="btn-primary md:ml-12 lg:ml-16"
                  onClick={() => handleLogOut()}
                >
                  Logout
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu (Drawer) */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" className="p-2">
                <HiOutlineMenu className="w-6 h-6 dark:text-dim" />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-white dark:bg-black dark:text-white flex flex-col justify-center">
              <div className="flex flex-col items-center space-y-4">
                {menuItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link href={item.path} key={item.name}>
                      <button className="hover:text-orange-400 transition-all duration-300 ease-in-out">
                        {item.name}
                      </button>
                    </Link>
                  </SheetClose>
                ))}
                {!isUserLoggedin && (
                  <Link href="/login" className="">
                    <button className="btn-primary">Login</button>
                  </Link>
                )}
                {isUserLoggedin && (
                  <button
                    className="btn-primary md:ml-12 lg:ml-16"
                    onClick={() => handleLogOut()}
                  >
                    Logout
                  </button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
