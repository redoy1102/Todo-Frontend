'use client';

import { currentUserInfo } from '@/hooks/useUserStatusCheck';
import { ICurrentUser } from '@/types/common.types';
import { useEffect, useState } from 'react';

const AboutClient = () => {
  const [user, setUser] = useState(null as ICurrentUser | null);

  useEffect(() => {
    const userInfo = currentUserInfo();
    setUser(userInfo);
  }, []);

  if (!user) {
    return null;
  }

  return <h5 className="text-primary text-md my-3">I am {user.name}</h5>;
};

export default AboutClient;
