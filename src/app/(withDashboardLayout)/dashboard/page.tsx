import DashboardRootClient from '@/components/clients/DashboardRoot.client';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h3 className="text-primary mb-2 capitalize">
        Welcome to your dashboard
      </h3>
      <DashboardRootClient />
      <div className="mt-4">
        <Link href="/">
          <button className="btn-secondary">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
