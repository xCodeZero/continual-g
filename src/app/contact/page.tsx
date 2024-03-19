"use client";
import React from "react";
import { motion, useInView, useScroll } from "framer-motion";
import NavBar from "@/components/common/NavBar";
import Header from "@/components/common/Header";
import { Toaster } from "@/components/ui/toaster";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MainButton from "@/components/common/MainButton";
import AuthWrapperForm from "@/components/forms/AuthWrapperForm";

const page = () => {
  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <section className="flex flex-col gap-8 md:flex-row justify-between items-center max-sm:mt-10">
          <div className="flex flex-col gap-32  my-16 px-4 md:px-16">
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
              As a fitness enthusiast, everyday workout is an inevitable part of
              who you are. But is your body recovering from these vigorous
              workouts?
            </p>

            <p className="text-black mt-4 opacity-[75] mb-8 md:my-8 lg:w-[900px]">
              Intense training can drain you out faster, making your breathing
              more rapid as the oxidative stress increases in your body. Hence
              there is a higher rate of free radical production leading to
              sluggishness, muscle soreness, fatigue, and stiffness. You can
              experience rapid recovery from muscle pain after exercise with
              Continual-G® - the only dietary supplement with Glyteine.
            </p>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <MainButton text="Get Started" classes="" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <AuthWrapperForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <img src="/images/hero.png" alt="hero image" />
          </div>
          <Toaster />
        </section>
      </motion.div>
    </>
  );
};

export default page;
