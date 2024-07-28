import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="main-container">
      <div className="h-screen flex justify-center items-center flex-col">
        <div className="flex flex-col gap-y-4 justify-center items-center ">
          <div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
            <Image
              src={
                'https://res.cloudinary.com/dzqkcbgew/image/upload/fl_preserve_transparency/v1718439622/bmd4d4fxbyeqinw8yz3s.jpg?_s=public-apps'
              }
              width={100}
              height={100}
              alt="Logo"
              className="object-cover size-16 rounded-full"
              priority
            />
          </div>
          <h1 className="w-full md:w-10/12 lg:w-8/12 mx-auto font-medium text-primary capitalize">
            Welcome to the homepage.
          </h1>
          <p className="text-md w-full md:w-10/12 lg:w-8/12 mx-auto text-dim">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            nihil nemo natus? Vel a odit nam similique et error velit fugiat
            tempora? Aperiam maxime quo expedita inventore iure deserunt vitae
            placeat quas nam veniam adipisci delectus, unde voluptatem facere
            ab. Cumque cupiditate aliquid tempora dicta sint praesentium,
            eligendi ducimus laborum alias?
          </p>
        </div>
        <div className="mt-4 flex items-center gap-x-4 w-full md:w-10/12 lg:w-8/12 mx-auto">
          <Link href="/about">
            <button className="btn-secondary">About RND</button>
          </Link>
          <Link href="/contact">
            <button className="btn-secondary">Contact Us</button>
          </Link>
          <Link href="/signin">
            <button className="btn-secondary">Sign In</button>
          </Link>
          <Link href="/register">
            <button className="btn-secondary">Register</button>
          </Link>
          <Link href="/dashboard">
            <button className="btn-secondary">Dashboard</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
