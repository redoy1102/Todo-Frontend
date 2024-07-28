import Link from 'next/link';

const DashboardRoot = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h3 className="text-primary mb-2 capitalize">
        Welcome to your dashboard
      </h3>
      <div className="mt-4">
        <Link href="/">
          <button className="btn-secondary">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardRoot;
