import React from "react";
import { EarningsTable } from "@/components/tables/EarningsTable";
import OverviewEarningsSection from "@/components/sections/OverviewEarningsSection";
import CashOutForm from "@/components/forms/CashOutForm";

function Earnings() {
  return (
    <div className="flex flex-col gap-16 mt-[4rem] mx-4 md:mx-8">
      <OverviewEarningsSection />
      <EarningsTable />
    </div>
  );
}

export default Earnings;
