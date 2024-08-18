const Profile = async () => {
  let realData = null;

  if (typeof window === 'undefined') {
    const data = await fetch(
      'https://nextjs-rnd-backend.vercel.app/api/auth/get-profile',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    const response = await data.json();
    realData = response;

    console.log({ response });
  }

  console.log({ realData });

  return (
    <div>
      <h3 className="text-center dark:text-dim">Welcome to your profile</h3>
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
