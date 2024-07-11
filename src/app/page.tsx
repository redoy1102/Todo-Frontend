import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="main-container">
      <div className="h-screen flex flex-col gap-y-4 justify-center items-center ">
        <div className="w-5/12 mx-auto">
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
        <h1 className="w-5/12 mx-auto font-medium">Welcome to the homepage.</h1>
        <p className="text-md text-gray-400 w-5/12 mx-auto font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nihil
          nemo natus? Vel a odit nam similique et error velit fugiat tempora?
          Aperiam maxime quo expedita inventore iure deserunt vitae placeat quas
          nam veniam adipisci delectus, unde voluptatem facere ab. Cumque
          cupiditate aliquid tempora dicta sint praesentium, eligendi ducimus
          laborum alias?
        </p>
        <Link href="/login">
          <button className="btn">Login</button>
        </Link>
        <Link href="/dashboard">
          <button className="btn">Dashboard</button>
        </Link>
      </div>
    </main>
  );
}
