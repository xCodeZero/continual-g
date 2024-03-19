"use client";

import PackageCard from "@/components/cards/PackageCard";
import Header from "@/components/common/Header";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllPackages } from "@/lib/actions/package";
import { apiClient } from "@/network";
import apiResources from "@/network/resources";
import { IPackagesResponse } from "@/types";
import React, { useEffect, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [packages, setPackages] = useState<IPackagesResponse[]>();

  useEffect(() => {
    async function fetch() {
      // NOTE: Generate packages if non exists
      const packages = await getAllPackages();

      setPackages(packages);
      setLoading(false);
    }

    fetch();
  }, []);

  return (
    <>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center items-center h-screen flex-col">
          {/* <div className="mt-12">
        <img src="/images/2.jpg" alt="" height={1000} width={1000} />
      </div> */}
          <div className="relative text-3xl md:text-[70px] lg:text-[80px] font-bold md:leading-[6rem] select-none">
            Not tried Continual-G® yet?
            <p className="font-normal">Continual-G® now available!!</p>
            <div className="hidden md:block w-[215px] h-[6px] bg-primary absolute top-[6rem] left-2"></div>
          </div>

          <div
            className={
              loading
                ? "px-8 mt-8"
                : "px-8 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 grid-flow-dense pb-32"
            }
          >
            {loading ? (
              <div className="flex flex-col md:flex-row flex-wrap justify-between gap-16 ">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
                  <Skeleton className="w-[300px] h-[338px]" key={index} />
                ))}
              </div>
            ) : (
              packages?.map((pkg) => <PackageCard {...pkg} key={pkg._id} />)
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default page;
