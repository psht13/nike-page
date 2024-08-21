import Button from "@/components/Button";
import { arrowRight } from "@/public/icons";
import { offer } from "@/public/images";
import Image from "next/image";
import React from "react";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <Image
          src={offer}
          alt="qwe"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h1 className="mt-10 font-palanquin text-4xl capitalize font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            classes="bg-white border-slate-gray text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
