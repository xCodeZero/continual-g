"use client";

import { motion, useInView, useScroll } from "framer-motion";
import Link from "next/link";
import React from "react";

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
const MyAffiliatePage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center items-center h-screen flex-col max-sm:mt-[500px] mt-[250px] mb-20">
          <div className="mt-2 relative">
            <img
              src="/images/continualg/affiliate.jpeg"
              alt=""
              height={500}
              width={899}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="relative text-3xl md:text-[70px] lg:text-[80px] font-bold md:leading-[6rem] select-none p-4">
            MY AFFILIATE
          </div>
          <div className="relative text-4xl max-sm:text-2xl p-4 items-center w-[1200px] max-sm:w-[400px]">
            <p className="font-bold mb-12">
              Welcome to Continual-G Affiliate Network
            </p>
            <p className="font-normal mb-4">
              Our Affiliate Program is designed to enable you to earn
              commissions without any investment, products, or technical
              knowledge.
            </p>
            <p className="font-normal mb-4">Earn commission</p>
            <p className="font-normal">
              Each new referral sale on the first purchase makes you eligible
              for a commission stated as under which will be reflected in your
              Affiliate account accordingly.
            </p>
          </div>

          <div className="flex justify-center mt-8  flex-wrap p-4 max-w-[1200px]  max-sm:flex-wrap w-[1200px] max-sm:w-[400px]">
            <table className="border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">
                    CONTINUAL G
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    COMMISSION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    120 day Supply
                  </td>

                  <td className="border border-gray-400 px-4 py-2">₦200,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    240 day Supply
                  </td>

                  <td className="border border-gray-400 px-4 py-2">₦400,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    360 day Supply
                  </td>

                  <td className="border border-gray-400 px-4 py-2">₦600,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="justify-center flex flex-col items-center text-black p-12 mt-auto max-sm:mt-[20px] flex-wrap">
            <ul>
              <li className="mb-2 flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 mr-2 rounded-full"></span>
                The commission is subject to a 90-day cookie window. The cookie
                window is "the time period over which you can earn a commission
                on items added to the cart"
              </li>
              <li className="mb-2 flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 mr-2 rounded-full"></span>
                This means that Affiliates have exactly 90 days to seal the
                deal, once a link has been clicked. However, if a purchase is
                made after this period, it does not qualify for a commission.
              </li>
              <li className="mb-2 flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 mr-2 rounded-full"></span>
                Promotional Offer: Inid Research Lab LLC offers your customers a
                5% discount on Continual-G products purchased via the website
                continualg.com. Details of the offer are detailed in the Terms &
                Conditions.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MyAffiliatePage;
