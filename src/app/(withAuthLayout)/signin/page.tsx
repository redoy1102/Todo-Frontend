import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h3 className="text-primary mb-2">This is the login page</h3>
      <div className="mt-4 flex items-center gap-x-4 w-full md:w-10/12 mx-auto">
        <Link href="/">
          <button className="btn-secondary">Back to Home</button>
        </Link>
        <Link href="/register">
          <button className="btn-secondary">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
