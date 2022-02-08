// import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon, HeartIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex flex-col md:flex-row py-7 px-2 border-b cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative md:w-80 md:h-52 flex-shrink-0 h-48 w-12/12  ">
        <Image
          src={img}
          alt="infoImg"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow md:pl-5 pt-2">
        <div className="flex justify-between items-center">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer text-red-400" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className=" flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold lg:text-2xl pb-2 ">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
