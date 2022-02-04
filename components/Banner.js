import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]">
      <Image
        alt="bannerImg"
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        // objectFit="cover"
      />
      <div className="absolute w-full text-center top-1/2">
        <p className="text-normal sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="px-8 py-2 my-3 font-bold text-purple-500 transition duration-150 bg-white rounded-full shadow-md sm:py-4 sm:px-10 hover:shadow-xl active:scale-90">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
