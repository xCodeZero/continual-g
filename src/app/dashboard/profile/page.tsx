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

const numberWithCommas = (x: number) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function Profile() {
  const [user, setUser] = useAtom(ATOMS.user);
  const [loading, setLoading] = useState(false);
  const [useStats, setUserStats] = useState<IStatistics>();

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
      <div className="flex justify-center mt-12 items-center bg-darkCyan max-h-screen w-full max-sm:w-[520px]">
        <div className="w-[100rem] overflow-hidden rounded-2xl text-center bg-white shadow-2xl z-10">
          <div className="">
            <Image
              className="w-full h-[25rem] border-[5px] border-white object-contain"
              src="https://utfs.io/f/ab9bc0ac-367d-4811-8566-899588f170b5-1e.jpg"
              alt=""
              width={300}
              height={300}
            />
          </div>

          <div className="flex justify-center -mt-[3.3225rem] z-10">
            <Image
              className="w-[10rem] h-[10rem] rounded-full border-[5px] border-white object-cover"
              src="https://utfs.io/f/ab9bc0ac-367d-4811-8566-899588f170b5-1e.jpg"
              alt=""
              width={300}
              height={300}
            />
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
              “Could Not Have Done It Without My CONTINUAL-G®”
            </p>

            <div className="border-b -mx-10 my-4" />
            <div className="flex flex-col ">
              <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center justify-between">
                <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold text-orange-600">
                  <Label
                    htmlFor="email"
                    className="text-black text-2xl font-bold"
                  >
                    Current Earning Balance:{" "}
                  </Label>
                  <p className="font-bold  ml-5">{formatted}</p>
                </div>
                <Button className="bg-primary hover:bg-orange-300">
                  <FaEdit className="ml-2 mr-6" /> EDIT PROFILE
                </Button>
              </div>
              {data.map((stat, index) =>
                loading ? (
                  <div key={1} className="flex gap-8 p-8 w-full">
                    <Skeleton className="w-full h-16" />
                  </div>
                ) : (
                  <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center">
                    {index === 1 && (
                      <>
                        <Label htmlFor="email">{stat?.item}: </Label>
                        <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold text-orange-600">
                          <p className="font-bold  ml-5">{stat?.value}</p>
                        </div>
                      </>
                    )}
                  </div>
                )
              )}

              <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center">
                <Label htmlFor="email">Email address: </Label>
                <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold text-orange-600">
                  <p className="font-bold  ml-5">{user?.email}</p>
                </div>
              </div>
              <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center">
                <Label htmlFor="email">Account ID: </Label>
                <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold text-orange-600">
                  <p className="font-bold  ml-5">{user?.accountId}</p>
                </div>
              </div>
              <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2  items-center">
                <Label htmlFor="email">Bank Account: </Label>
                <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold text-orange-600">
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
                <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold text-orange-600">
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
