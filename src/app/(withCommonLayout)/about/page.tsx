import AboutClient from '@/components/clients/About.client';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h3 className="text-primary">This is the about page</h3>
      <AboutClient />
      <Link href="/">
        <button className="btn-secondary">Back to Home</button>
      </Link>
    </div>
  );
};

export default AboutPage;
