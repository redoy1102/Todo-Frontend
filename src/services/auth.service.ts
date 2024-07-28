import { authKey } from '@/constant/authKey';
import { decodeToken } from '@/lib/JWTokenDecoder';
import { getCookie } from 'cookies-next';
import { axiosInstance } from '../lib/axiosInstance';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from '../lib/localStorage';
import { CustomJwtPayload } from '../types/common.types';

export const storeToken = (accessToken: string) => {
  setToLocalStorage(authKey, accessToken);
};

export const getUserInfoFromToken = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodeToken(authToken) as CustomJwtPayload;

    return decodedData;
  }
};

export const isLoggedIn = () => {
  const accessTokenFromLocalStorage = getFromLocalStorage(authKey);
  const accessTokenFromCookie = getCookie(authKey);

  return !!(accessTokenFromLocalStorage && accessTokenFromCookie);
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
