import Image from 'next/image';

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
        <h1 className="text-4xl font-semibold w-5/12 mx-auto">
          Babul loves learning new technolgies.
        </h1>
        <p className="text-md text-gray-400 w-5/12 mx-auto font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
          inventore repellat? Dolores tempora quo excepturi nulla saepe quia,
          nostrum obcaecati eos officia iure, aliquam, repellat nemo placeat aut
          assumenda ex. <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla enim
          fugit ut iste, ipsam deserunt, repudiandae quasi temporibus ab labore
          blanditiis sit.
        </p>
      </div>
    </main>
  );
}
