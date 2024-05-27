import HeaderVideo from "@/components/common/HeaderVideo";
import Link from "next/link";
import React from "react";

const VideoSection = () => {
  return (
    <section className="flex flex-col gap-8 md:flex-row justify-between items-center max-sm:flex-col-reverse max-sm:mt-10">
      <div className="videos">
        <div className="video-item">
          <div className="centered-video w-full h-full">
            <video controls autoPlay muted loop>
              <source src="/video/continual.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="max-sm:w-full w-[1500px]">
        <HeaderVideo
          title="We are excited to invite you to the official launching of CONTINUAL-G® and an enriching virtual meeting featuring Dr. Wallace Bridge, the formulator of CONTINUAL-G®, and his esteemed team. Join us to explore the groundbreaking benefits and clinical applications of Glyteine. Register below to secure your spot!
          "
          description=""
        />

        <div>
          <Link href="/meeting-registration">
            <button className="w-full md:w-[300px] rounded-md border-black bg-primary p-4 text-center text-white">
              Register now for CONTINUAL-G® Virtual Meeting!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
