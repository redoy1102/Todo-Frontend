'use client';

import { useGetProfileQuery } from '@/redux/api/userApi';

const Profile = () => {
  const { data, isLoading } = useGetProfileQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3 className="text-center dark:text-dim">
        Welcome to your profile, {data?.data?.name}
      </h3>
      <p className="text-center mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eum.
        Error praesentium, voluptates molestiae aspernatur dolorum eum non,
        asperiores eveniet cum eos ducimus veritatis repellat reprehenderit et
        adipisci quibusdam vitae.
      </p>
    </div>
  );
};

export default Profile;
