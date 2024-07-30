'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HomepageClient = () => {
  return (
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
      <motion.h1
        className="w-full md:w-10/12 lg:w-8/12 mx-auto font-medium text-primary capitalize"
        initial={{ skewY: 10, y: -10 }}
        animate={{ skewY: 0, y: 0 }}
        transition={{ type: 'spring', duration: 2 }}
      >
        Welcome to the Nextjs RND.
      </motion.h1>
      <p className="text-md w-full md:w-10/12 lg:w-8/12 mx-auto text-dim">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nihil
        nemo natus? Vel a odit nam similique et error velit fugiat tempora?
        Aperiam maxime quo expedita inventore iure deserunt vitae placeat quas
        nam veniam adipisci delectus, unde voluptatem facere ab. Cumque
        cupiditate aliquid tempora dicta sint praesentium, eligendi ducimus
        laborum alias?
      </p>
    </div>
  );
};

export default HomepageClient;
