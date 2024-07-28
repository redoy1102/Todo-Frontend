/* eslint-disable require-await */
'use server';

import { authKey } from '@/constant/authKey';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const setAccessToken = async (token: string, options?: any) => {
  cookies().set(authKey, token);

  if (options && options?.redirect) {
    redirect(options.redirect);
  }
};
