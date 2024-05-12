"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import NavBar from "@/components/common/NavBar";
import Link from "next/link";

interface IconWithTextProps {
  icon: React.ReactNode;
  text: string;
  title: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon, text, title }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 p-12 rounded-lg mb-4">
      <div className="">{icon}</div>
      <h5 className="font-bold">{title}</h5>
      <p className="mt-2 text-center">{text}</p>
    </div>
  );
};

const AffiliageProgramPage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center items-center h-screen flex-col max-sm:mt-[1000px] mt-[750px] mb-20">
          <div className="mt-2 relative">
            <img
              src="/images/continualg/affiliate.jpg"
              alt=""
              height={500}
              width={899}
              className="rounded-2xl object-cover"
            />

            <Link href="/sign-up">
              <button className="absolute bottom-36 max-sm:bottom-6 left-2 rounded-md border-black bg-primary px-4 py-2 text-center text-white">
                Start earning now!
              </button>
            </Link>

            <div className="absolute bottom-60 max-sm:bottom-20 left-2 text-orange-500 ext-3xl md:text-[70px] lg:text-[80px] font-bold md:leading-[6rem] select-none">
              <p className="">EARN MORE</p>
              <div className="hidden md:block w-[215px] h-[6px] bg-primary absolute top-[6rem] left-2"></div>
              <p className="font-normal text-black text-4xl max-sm:text-2xl">
                by driving traffic to Continual-G®!
              </p>
            </div>

            {/* <button className="absolute bottom-2 left-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              Button
            </button> */}
          </div>
          <div className="relative text-3xl md:text-[70px] lg:text-[80px] font-bold md:leading-[6rem] select-none p-4">
            Continual-G® Affiliate Program
          </div>
          <div className="relative text-4xl  max-sm:text-2xl p-4">
            <p className="font-normal">
              Would you like to be a part of our ever-growing Affiliate
              community?
            </p>
          </div>
          <div className="relative text-4xl p-5 max-sm:text-2xl">
            <p className="font-normal">
              We're looking to collaborate with inspiring individuals who can
              make our brand Continual-G® a part of their wellness stories.
            </p>
          </div>
          <div className="md:text-[70px]  font-bold md:leading-[6rem] select-none">
            Choose Your Commission Plan!
          </div>

          <div className="flex justify-center mt-8 space-x-4 flex-wrap p-4">
            <IconWithText
              icon={
                <img
                  src="/images/continualg/icons/etiquette.png"
                  alt="Join"
                  className="w-28 h-28"
                />
              }
              title="Join"
              text="Get started with easy free access to our marketing resources"
            />
            <IconWithText
              icon={
                <img
                  src="/images/continualg/icons/promote.png"
                  alt="Promote"
                  className="w-28 h-28"
                />
              }
              title="Promote"
              text="Drive traffic & promote Continual-G® with target audience"
            />
            <IconWithText
              icon={
                <img
                  src="/images/continualg/icons/svg.png"
                  alt="Earn"
                  className="w-28 h-28"
                />
              }
              title="Earn"
              text="Earn rewards & commission with our Affiliate Commission plan"
            />
          </div>
          <Link href="/sign-up">
            <button className="max-sm:bottom-6 rounded-md border-black bg-primary px-4 py-2 text-center text-white mt-4">
              LET'S COLLABORATE
            </button>
          </Link>
          <div className="justify-center flex flex-col items-center text-black p-12 mt-auto max-sm:mt-[20px] flex-wrap">
            <p className="font-bold text-xl mb-2">
              It pays to partner with us!
            </p>
            <p className="mb-4">
              Enjoy various benefits when you choose to become a Continual-G®
              Affiliate Partner!
            </p>
            <ul>
              <li className="mb-2 flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 mr-2 rounded-full"></span>
                Earn great commission & exclusive rewards with guaranteed payout
              </li>
              <li className="mb-2 flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 mr-2 rounded-full"></span>
                Free access to mail templates, banners & creatives for
                stories/posts!
              </li>
              <li className="mb-2 flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 mr-2 rounded-full"></span>
                Get complete and easy on-board product training with Starter
                Pack!
              </li>
            </ul>
          </div>

          <div className="flex justify-between w-full max-w-[1700px] space-x-4 p-4 max-sm:flex-wrap mb-[300px]">
            {/* Step 1 */}
            <Link href="/sign-up">
              {" "}
              <div className="flex items-center border-2 border-blue-500 rounded-lg p-4 flex-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 p-5">
                  <span className="text-blue-500 text-lg font-bold">1</span>
                </div>
                <div className="ml-4 ">
                  <h3 className="text-lg font-semibold">Step 1</h3>
                  <p className="text-sm text-gray-600 flex flex-col">
                    Create an account with us on Continual-G® website. If you
                    already have an account, follow the next steps.
                  </p>
                </div>
              </div>
            </Link>

            {/* Step 2 */}
            <Link href="/sign-in">
              {" "}
              <div className="flex items-center border-2 border-green-500 rounded-lg p-4 flex-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-200 p-5">
                  <span className="text-green-500 text-lg font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Step 2</h3>
                  <p className="text-sm text-gray-600">
                    Sign in and go to ‘My Account’ to access your dashboard.
                  </p>
                </div>
              </div>
            </Link>

            {/* Step 3 */}
            <Link href="/my-affiliate">
              {" "}
              <div className="flex items-center border-2 border-yellow-500 rounded-lg p-4 flex-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-200 p-5">
                  <span className="text-yellow-500 text-lg font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Step 3</h3>
                  <p className="text-sm text-gray-600">
                    Select My Affiliate tab available under My Dashboard
                  </p>
                </div>
              </div>
            </Link>

            {/* Step 4 */}
            <Link href="">
              <div className="flex items-center border-2 border-red-500 rounded-lg p-4 flex-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200 p-5">
                  <span className="text-red-500 text-lg font-bold">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Step 4</h3>
                  <p className="text-sm text-gray-600">
                    Read about our Affiliate program and click on Sign up.
                  </p>
                </div>
              </div>
            </Link>

            {/* Step 5 */}
            <Link href="">
              <div className="flex items-center border-2 border-red-500 rounded-lg p-4 flex-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-200 p-5">
                  <span className="text-red-500 text-lg font-bold">5</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Step 5</h3>
                  <p className="text-sm text-gray-600">
                    Read and accept the T&C & your registration is done!
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AffiliageProgramPage;
