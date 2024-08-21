import { star } from "@/public/icons";
import Image from "next/image";
import React from "react";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image src={imgURL} alt={name} width={280} height={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray ">
          {rating}
        </p>
      </div>
      <h1 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h1>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
