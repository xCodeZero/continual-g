import React from "react";
import CashOutForm from "@/components/forms/CashOutForm";
import { CashOutTable } from "@/components/tables/CashOutTable";
import OverviewCashoutSection from "@/components/sections/OverviewCashoutSection";

function CashOut() {
  return (
    <div className="flex flex-col gap-16 mt-[4rem] mx-4 md:mx-8">
      <OverviewCashoutSection />
      <CashOutForm />
      <CashOutTable />
    </div>
  );
}

export default CashOut;
