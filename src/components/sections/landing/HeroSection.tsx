import React from "react";
import MainButton from "@/components/common/MainButton";

import { Toaster } from "@/components/ui/toaster";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import AuthWrapperForm from "@/components/forms/AuthWrapperForm";
import Header from "@/components/common/Header";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="flex flex-col gap-8 md:flex-row justify-between items-center max-sm:flex-col-reverse max-sm:mt-10">
      <div className="max-sm:w-full">
        <div className="relative text-3xl md:text-[70px] lg:text-[80px] font-bold md:leading-[6rem] select-none">
          CONTINUAL-G® EXPERIENCE MUSCLE RECOVERY
          <p className="font-normal">AFTER INTENSE WORKOUTS</p>
          <div className="hidden md:block w-[215px] h-[6px] bg-primary absolute top-[6rem] left-2"></div>
        </div>
        <Header
          title="Make the most of your everyday workouts"
          description=""
        />
        <p className="text-black mt-4 opacity-[75] mb-8 md:my-8">
          As a fitness enthusiast, everyday workout is an inevitable part of who
          you are. But is your body recovering from these vigorous workouts?
        </p>
        <p className="text-black mt-4 opacity-[75] mb-8 md:my-8 lg:w-[900px]">
          Intense training can drain you out faster, making your breathing more
          rapid as the oxidative stress increases in your body. Hence there is a
          higher rate of free radical production leading to sluggishness, muscle
          soreness, fatigue, and stiffness. You can experience rapid recovery
          from muscle pain after exercise with Continual-G® - the only dietary
          supplement with Glyteine.
        </p>
        <div>
          <Link href="/meeting-registration">
            <button className="w-full md:w-[300px] rounded-md border-black bg-primary p-4 text-center text-white">
              Register now for CONTINUAL-G® Virtual Meeting!
            </button>
          </Link>
        </div>
      </div>
      <div className="max-sm:w-full">
        <div className="videos">
          <div className="video-item">
            <div className="centered-video w-full h-full">
              <video controls autoPlay muted loop>
                <source src="/video/continual.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        {/* <img src="/images/hero.png" alt="hero image" className="w-full" /> */}
      </div>
      <Toaster />
    </section>
  );
}

export default HeroSection;
