import { IUserData } from '@/types/common.types';

const registerUser = async (data: IUserData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-store',
    }
  );

  const result = await response.json();

  return result;
};

export default registerUser;
