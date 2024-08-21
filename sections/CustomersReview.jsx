import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/constants";
import React from "react";

const CustomersReview = () => {
  return (
    <section className="max-container">
      <h1 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers</span> Say?
      </h1>

      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomersReview;
