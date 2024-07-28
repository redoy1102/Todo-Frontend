/* eslint-disable require-await */
'use server';
import { cookies } from 'next/headers';

export const getCookies = async (authKey: string) => {
  return cookies().get(authKey)?.value;
};
