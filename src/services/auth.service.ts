import { authKey } from '@/constant/authKey';
import { decodeToken } from '@/lib/JWTokenDecoder';
import { getCookie } from 'cookies-next';
import { axiosInstance } from '../lib/axiosInstance';
import { removeFromLocalStorage, setToLocalStorage } from '../lib/localStorage';

export const storeToken = (accessToken: string) => {
  setToLocalStorage(authKey, accessToken);
};

export const getUserInfoFromToken = () => {
  const accessTokenFromCookie = getCookie(authKey);
  if (accessTokenFromCookie === undefined) {
    return null;
  }
  let currentUser = null;

  try {
    const decodedUser = decodeToken(accessTokenFromCookie);
    currentUser = decodedUser;
  } catch (error) {
    currentUser = null;
  }
  return currentUser;
};

export const isloggedIn = () => {
  const accessTokenFromCookie = getCookie(authKey);
  if (accessTokenFromCookie !== undefined) {
    return true;
  }
  return false;
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/refresh-token`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
};
