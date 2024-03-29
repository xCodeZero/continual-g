"use client";
import Checkout from "@/components/common/Checkout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { sidebarItems } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";

const TopUp = () => {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState(null);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e?.target?.value));
  };

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
            <Dialog>
              <DialogTrigger>
                <Image
                  src="/images/continualg/credit-card.png"
                  alt=""
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </DialogTrigger>
              <DialogContent className="bg-[#303940] boder border-[#303940]">
                <DialogHeader>
                  <DialogTitle className="text-white mb-3">
                    How much do you want to top up (₦)?
                  </DialogTitle>

                  <DialogDescription>
                    <Input
                      id="username"
                      value={amount}
                      className="col-span-3 bg-[#000000] h-[50px] font-bold text-2xl"
                      onChange={handleAmountChange}
                    />
                    <div className="mt-8">
                      <Checkout
                        plan="TOP_UP"
                        amount={amount}
                        credits={amount}
                        //@ts-ignore
                        userId={user?._id}
                      />
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
