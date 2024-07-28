import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h3 className="text-primary mb-2">This is the register page</h3>
      <div className="mt-4 flex items-center gap-x-4 w-full md:w-10/12 lg:w-8/12 mx-auto">
        <Link href="/">
          <button className="btn-secondary">Back to Home</button>
        </Link>
        <Link href="/signin">
          <button className="btn-secondary">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
