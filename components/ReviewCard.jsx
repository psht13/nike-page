import { star } from "@/public/icons";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ rating, customerName, imgURL, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />

      <p className="mt-6 max-w-small text-center info-text">{feedback}</p>

      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h1 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h1>
    </div>
  );
};

export default ReviewCard;
