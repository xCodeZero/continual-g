import React from "react";
import Header from "@/components/common/Header";

function Testimonials() {
  return (
    <div>
      <Header title="What Our Client Says?" description="Client Testimonial" />
      <div className="mt-16 relative">
        <div className="relative">
          <img src="/images/testimonial.png" alt="reviewer image" />

          <div className="bg-white  border-l-[7px] border-l-primary px-4 md:px-16 py-8 md:py-16 md:absolute md:top-[30%] md:ml-[30rem]">
            <p className="text-[38px] ">Dr. Maroon</p>
            <p className="text-[24px] mb-4 text-primary">
              Award Winning Neurosurgeon
            </p>
            <p>“Could Not Have Done It Without My CONTINUAL-G®”</p>
          </div>

          <div className="hidden md:flex flex-col justify-end items-end gap-16 absolute -top-32 right-0">
            <div className="mr-[9rem]">
              <img src="/images/plane_down.png" alt="plan down" />
            </div>
            <div>
              <img src="/images/arrows.png" alt="arrows" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
