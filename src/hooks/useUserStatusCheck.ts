import { getUserInfoFromToken, isloggedIn } from '@/services/auth.service';
import { ICurrentUser } from '@/types/common.types';

export const isLoggedIn = () => {
  const isUserLoggedIn = isloggedIn();
  return isUserLoggedIn;
};

export const currentUserInfo = () => {
  const currentUser: ICurrentUser = getUserInfoFromToken() as ICurrentUser;
  return currentUser;
};
