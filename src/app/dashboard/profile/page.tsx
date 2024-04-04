"use client";

import Image from "next/image";
import React from "react";
import apiResources from "@/network/resources";
import { apiClient } from "@/network";
import { ATOMS } from "@/network/atoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { FaEye, FaEyeSlash, FaEdit } from "react-icons/fa";
import { IStatistics } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UploadButton } from "@/utils/uploadthing";

const numberWithCommas = (x: number) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function Profile() {
  const [user, setUser] = useAtom(ATOMS.user);
  const [loading, setLoading] = useState(false);
  const [useStats, setUserStats] = useState<IStatistics>();

  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredProfile, setIsHoveredProfile] = useState(false);

  const data = [
    {
      item: "Total Number of Earnings",
      value: useStats?.totalEarnings,
      icon: "/images/continualg/money.png",
    },
    {
      item: "Total Earnings",
      value: `₦ ${numberWithCommas(useStats?.totalEarningsAmount!)}`,
      icon: "/images/continualg/earning.png",
    },
  ];

  useEffect(() => {
    async function fetch() {
      const stats = await apiClient.get<any>(apiResources.statistics, "/");
      setUserStats(stats);
      setLoading(false);
    }

    fetch();
  }, []);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await apiClient.get<{
          affiliateId: string;
          accountId: string;
          firstName: string;
          lastName: string;
          email: string;
          creditCoins: number;
          creditBalance: number;
          userRole: number;
          bankAccount: string;
          bankAccountName: string;
          bank: string;
          bio: string;
          photo: string;
          coverPhoto: string;
          address: string;
          phoneNumber: string;
          state: string;
          idType: string;
          idImage: string;
        }>(apiResources.users, "/");
        // Set to global state
        setUser(res);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    fetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showBankInfo, setShowBankInfo] = useState(false);

  const toggleBankInfo = () => {
    setShowBankInfo((prevState) => !prevState);
  };

  const formatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(user?.creditCoins);

  return (
    <>
      <div className="flex justify-center w-full mt-12 items-center bg-darkCyan max-h-screen lg:w-[900px] max-sm:w-[520px] md:w-[930px]">
        <div className="w-[100rem] overflow-hidden rounded-2xl text-center bg-white shadow-2xl z-10">
          <div className="hover:opacity-40 cursor-pointer">
            <Link href="/dashboard/profile/update">
              <Image
                className="w-full h-[25rem] border-[5px] border-white object-contain"
                src={
                  user?.coverPhoto === ""
                    ? "https://utfs.io/f/cc4951b4-a912-4441-85b5-d0a8c506e205-c2buqn.jpg"
                    : user?.coverPhoto
                }
                alt=""
                width={300}
                height={300}
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
              />
            </Link>

            {isHovered && (
              <div className="absolute bottom-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <UploadButton
                  className="z-1"
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    alert("Upload Completed");
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
                {/* </button> */}
              </div>
            )}
          </div>

          <div className="flex justify-center -mt-[3.3225rem] z-10 hover:opacity-40 cursor-pointer">
            <Link href="/dashboard/profile/update">
              <Image
                className="w-[10rem] h-[10rem] rounded-full border-[5px] border-white object-cover"
                src={
                  user?.photo === ""
                    ? "https://utfs.io/f/cc4951b4-a912-4441-85b5-d0a8c506e205-c2buqn.jpg"
                    : user?.photo
                }
                alt=""
                width={300}
                height={300}
                // onMouseEnter={() => setIsHoveredProfile(true)}
                // onMouseLeave={() => setIsHoveredProfile(false)}
              />
            </Link>
          </div>

          <div className="px-10 py-4">
            <h1 className="inline text-[1.125rem] text-darkBlue font-bold">
              {user?.firstName + " " + user?.lastName}
            </h1>
            {/* <span className="text-grayishBlue text-lg pl-2">26</span> */}

            <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold text-orange-600">
              {user?.accountId}
            </div>
            <p className="font-bold italic">
              “
              {user.bio === ""
                ? "Could Not Have Done It Without My CONTINUAL-G®"
                : user.bio}
              ”
            </p>

            <div className="border-b -mx-10 my-4" />
            <div className="flex flex-col ">
              <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center justify-between">
                <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold text-orange-600">
                  <Label
                    htmlFor="email"
                    className="text-black text-sm font-bold"
                  >
                    Current Balance:
                  </Label>
                  <p className="font-bold text-3xl">{formatted}</p>
                </div>
                <Button className="bg-primary hover:bg-orange-300">
                  <Link
                    href="/dashboard/profile/update"
                    className="flex flex-row"
                  >
                    <FaEdit className="ml-2 mr-6" /> EDIT PROFILE
                  </Link>
                </Button>
              </div>
              <div>
                {data.map((stat, index) =>
                  loading ? (
                    <div key={index} className="flex gap-8 p-8 w-full">
                      <Skeleton className="w-full h-16" />
                    </div>
                  ) : (
                    <div
                      className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center"
                      key={index}
                    >
                      {index === 1 && (
                        <div>
                          <Label htmlFor="item" className="">
                            {stat?.item}:{" "}
                          </Label>
                          <div className="text-grayishBlue py-[0.3rem] text-3xl font-bol">
                            <p className="font-bold">{stat?.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center">
                <Label htmlFor="email">Email address: </Label>
                <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold">
                  <p className="font-bold  ml-5">{user?.email}</p>
                </div>
              </div>
              <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center">
                <Label htmlFor="email">Account ID: </Label>
                <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold">
                  <p className="font-bold  ml-5">{user?.accountId}</p>
                </div>
              </div>
              <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center">
                <Label htmlFor="email">Bank Account: </Label>
                <div className="text-grayishBlue py-[0.3rem] text-2xl font-bol">
                  <p className="font-bold  ml-5 flex flex-row">
                    {showBankInfo ? user?.bankAccount : "************"}
                    <span
                      onClick={toggleBankInfo}
                      className="cursor-pointer ml-2"
                    >
                      {showBankInfo ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center">
                <Label htmlFor="email">Bank: </Label>
                <div className="text-grayishBlue py-[0.3rem] text-2xl font-bol">
                  <p className="font-bold  ml-5 flex flex-row">{user?.bank}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
