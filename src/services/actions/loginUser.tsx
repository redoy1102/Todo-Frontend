/* ei system ta hocche manually signin korar, ei function ke call kore. ami eta use na kore rtk query diye kortesi */

// import { FieldValues } from 'react-hook-form';
// import { setAccessToken } from './setAccessToken';

// const loginUser = async (data: FieldValues) => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//       credentials: 'include',
//     }
//   );

//   const result = await response.json();

//   if (result?.data?.accessToken) {
//     setAccessToken(result?.data?.accessToken, {
//       redirect: '/dashboard',
//     });
//   }

//   return result;
// };

// export default loginUser;
