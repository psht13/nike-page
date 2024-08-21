import Image from "next/image";
import React from "react";

const Button = ({ label, iconURL, classes, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        classes ? `${classes}` : "bg-coral-red text-white border-coral-red"
      } ${fullWidth && "w-full"}`}>
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt="arrow right icon"
          className={"ml-2 rounded-full h-5 w-5 "}
        />
      )}
    </button>
  );
};

export default Button;
