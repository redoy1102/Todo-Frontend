/* eslint-disable no-unused-vars */
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { toast } from 'sonner';
import { authKey } from './constant/authKey';
import { CustomJwtPayload } from './types/common.types';

const authRoute = ['/login', '/register'];
const privateRoute = [
  '/dashboard',
  '/dashboard/profile',
  '/dashboard/products',
  '/dashboard/sells',
];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl;
  const accessToken = cookies().get(authKey)?.value;

  //protect auth and private route
  if (!accessToken) {
    if (authRoute.includes(pathname)) {
      return NextResponse.next();
    } else if (privateRoute.includes(pathname)) {
      return NextResponse.redirect(new URL('/login', request.url));
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  //protect private route
  let decodedData = null;

  try {
    if (accessToken) {
      decodedData = jwtDecode(accessToken);
    }
  } catch (error) {
    toast.error('Invalid token', {
      position: 'top-right',
      duration: 1500,
      icon: '❌',
    });
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const { email, role } = decodedData as CustomJwtPayload;

  //check user is loggedin and and access dashboard routes
  if (accessToken && privateRoute.includes(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/login', '/register', '/dashboard/:page*'],
};
