import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h3 className="text-primary mb-2">This is the contact page</h3>
      <Link href="/">
        <button className="btn-secondary">Back to Home</button>
      </Link>
    </div>
  );
};

export default ContactPage;
