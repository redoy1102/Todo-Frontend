import Link from 'next/link';

const DashboardRootPage = () => {
  return (
    <div>
      <h4>This is dashboard root page</h4>
      <Link href="/">
        <button className="btn">Home</button>
      </Link>
    </div>
  );
};

export default DashboardRootPage;
