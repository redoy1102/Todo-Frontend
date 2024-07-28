/* eslint-disable require-await */
// "use server";
import { authKey, refreshKey } from '@/constant/authKey';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { removeUser } from '../auth.service';
import { deleteCookies } from './deleteCookies';

export const logoutUser = async (router: AppRouterInstance) => {
  removeUser();
  deleteCookies([authKey, refreshKey]);
  router.refresh();
  router.push('/');
  alert('Logout successfully');
};
