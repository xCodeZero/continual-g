"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { apiClient } from "@/network";
import apiResources from "@/network/resources";
import { IStatistics } from "@/types";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";

const numberWithCommas = (x: number) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function OverviewCashoutSection() {
  const [loading, setLoading] = useState(true);
  const [useStats, setUserStats] = useState<IStatistics>();
  const router = useRouter();

  const data = [
    {
      item: "Total Number of Cashout",
      value: useStats?.totalCashout,
      icon: "/images/continualg/cashout.png",
    },
    {
      item: "Total Available Amount",
      value: `₦ ${numberWithCommas(useStats?.totalCashoutAmount!)}`,
      icon: "/images/continualg/money-bag.png",
    },
  ];

  useEffect(() => {
    async function fetch() {
      const stats = await apiClient.get<any>(apiResources.statistics, "/");
      setUserStats(stats);
      router.refresh();
      setLoading(false);
    }

    fetch();
  }, []);

  return (
    <div className="border broder-[#E6EDFF] rounded-[12px] flex md:flex justify-between w-full flex-col md:flex-row">
      {data.map((stat, index) =>
        loading ? (
          <div key={index} className="flex gap-8 p-8 w-full">
            <Skeleton className="w-full h-16" />
          </div>
        ) : (
          <div key={index} className="flex gap-8 p-8">
            <div className="flex flex-col">
              <p className="text-[28px] font-semibold">{stat?.value}</p>
              <p className="text-[16px]">{stat?.item}</p>
            </div>
            <div>
              <img src={stat.icon} alt="icon" width={50} height={50} />
            </div>
            <div className="hidden md:block">
              {index != data?.length - 1 && (
                <Separator orientation="vertical" />
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default OverviewCashoutSection;
