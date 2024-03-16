"use client";

import { apiClient } from "@/network";
import apiResources from "@/network/resources";
import { IChart } from "@/types";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Skeleton } from "../ui/skeleton";

function OverviewChartSection() {
  const [chartData, setChartData] = useState<string[]>([
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);
  const [loading, setLoading] = useState(true);

  const chartDefaultOptions = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false, // Set to false to hide the toolbar
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "month",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  useEffect(() => {
    async function fetchChartData() {
      try {
        const stats = await apiClient.get<IChart>(
          apiResources.statistics,
          "/chart"
        );
        setChartData(Object.values(stats) as string[]);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchChartData();
  }, []);

  // Check if window is available before rendering the Chart component
  const isBrowser = typeof window !== "undefined";

  return (
    <div>
      <p className="text-[20px] font-semibold text-center">Orders Analytics</p>

      {loading ? (
        <Skeleton className="w-full h-[400px] mt-8" />
      ) : isBrowser ? (
        //@ts-ignore
        <Chart
          options={chartDefaultOptions}
          series={[
            {
              name: "Orders",
              data: chartData,
              color: "#FFA03F",
            },
          ]}
          type="line"
          height={400}
        />
      ) : null}
    </div>
  );
}

export default OverviewChartSection;
