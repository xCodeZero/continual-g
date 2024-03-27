import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8 text-lg font-semibold">Select Payment Method</div>
      <div className="flex max-sm:flex-col">
        <div className="flex flex-col items-center mr-8">
          <div className="border border-black rounded-md mb-4 p-5">
            <Link href="/dashboard/bank">
              <Image
                src="/images/continualg/mobile-banking.png"
                alt=""
                width={300}
                height={300}
                className="mx-auto"
              />
            </Link>
          </div>
          <p className="text-center text-lg font-semibold text-orange-600">
            Bank Transfer
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-black rounded-md mb-4 p-5">
            <Link href="/dashboard/topup">
              <Image
                src="/images/continualg/credit-card.png"
                alt=""
                width={300}
                height={300}
                className="mx-auto"
              />
            </Link>
          </div>
          <p className="text-center text-lg font-semibold text-orange-600">
            Stripe Payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopUp;
