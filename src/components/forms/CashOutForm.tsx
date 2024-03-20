"use client";

import { Label } from "@radix-ui/react-label";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";
import { useToast } from "@/components/ui/use-toast";
import apiResources from "@/network/resources";
import { apiClient } from "@/network";
import { ATOMS } from "@/network/atoms";
import { useRouter } from "next/navigation";

const CashOutForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [bankAccount, setAccount] = useState("");
  const [bankAccountName, setAccountName] = useState("");
  const [bank, setBank] = useState("");
  const [user, setUser] = useAtom(ATOMS.user);
  const [isTyping, setIsTyping] = useState(false);

  const [refreshKey, setRefreshKey] = useState(0);

  const refetchUser = async () => {
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
    setAmount("");
  };

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
        setAccount(res.bankAccount);
        setAccountName(res.bankAccountName);
        setBank(res.bank);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    fetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const taxPercent = 0.05;
  const processsingFee = 1500;
  const taxFee = Number(amount) * taxPercent;

  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(Number(amount));

  const formattedTax = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(taxFee);

  const formattedFee = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(processsingFee);

  const formattedTotalAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(Number(amount) - (taxFee + processsingFee));

  const handleChangeBankAccount = (e: any) => {
    setIsTyping(true);
    const typedValue = e.target.value;
    setAccount(typedValue.toUpperCase());
  };

  const handleChangeBankAccountName = (e: any) => {
    setIsTyping(true);
    const typedValue = e.target.value;
    setAccountName(typedValue.toUpperCase());
  };

  const handleChangeBank = (e: any) => {
    setIsTyping(true);
    const typedValue = e.target.value;
    setBank(typedValue.toUpperCase());
  };

  const handleCashout = async () => {
    console.log((Number(amount) - (taxPercent + processsingFee)).toFixed(2));
    try {
      if (amount && bankAccount && bankAccountName && bank) {
        setLoading(true);
        const res = await apiClient.post(
          apiResources.cashout,
          "/",
          {
            amount: (Number(amount) - (taxFee + processsingFee)).toFixed(2),
            bankAccount: bankAccount.toUpperCase(),
            bankAccountName: bankAccountName.toUpperCase(),
            bank: bank.toUpperCase(),
            source: (user.firstName + " " + user.lastName).toUpperCase(),
            source_id: user.accountId,
            accountId: user.accountId,
            tax: taxFee,
            fee: processsingFee,
            orginalAmount: amount,
          },
          toast
        );

        console.log(res);

        if (res?.response?.meta?.message) {
          toast({
            title: "Cashout Successful!",
            description: res?.response?.meta?.message,
            className: "success-toast",
          });

          refetchUser();

          setTimeout(() => {
            // startTransition(router.refresh);
            setRefreshKey((prevKey) => prevKey + 1);
            router.replace("/dashboard/cashout");
            // window.location.reload();
          }, 1000);

          setLoading(false);
        }
      } else {
        toast({
          title: "Cashout error",
          description:
            "Please check if you have available credit, and ensure that the form is fully filled out.",
          className: "error-toast",
        });
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-64 max-sm:flex-col max-sm:gap-9">
      <div className="w-full max-w-xs " key={refreshKey}>
        <div className="grid gap-4 py-4 w-[500px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="gap-4">
            <Label htmlFor="affiliatelId" className="text-right">
              Enter amount
            </Label>
            <Input
              id="amount"
              placeholder="Enter Amount"
              className="col-span-3"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e?.target?.value)}
            />
          </div>

          <div className=" gap-4">
            <Label htmlFor="firstName" className="text-right">
              Account Number
            </Label>
            <Input
              id="bankAccount"
              placeholder="Enter your account number"
              className="col-span-3"
              type="name"
              value={isTyping ? bankAccount.toUpperCase() : user?.bankAccount}
              onChange={handleChangeBankAccount}
            />
          </div>

          <div className=" gap-4">
            <Label htmlFor="firstName" className="text-right">
              Account Name
            </Label>
            <Input
              id="bankAccountName"
              placeholder="Enter your account name"
              className="col-span-3"
              type="name"
              value={
                isTyping ? bankAccountName.toUpperCase() : user?.bankAccountName
              }
              onChange={handleChangeBankAccountName}
            />
          </div>

          <div className=" gap-4">
            <Label htmlFor="firstName" className="text-right">
              Bank
            </Label>
            <Input
              id="bank"
              placeholder="Enter your bank name"
              className="col-span-3"
              type="name"
              value={isTyping ? bank.toUpperCase() : user?.bank}
              onChange={handleChangeBank}
            />
          </div>

          <MainButton
            text="Cash Out"
            isSubmitable
            width="w-full"
            isLoading={loading}
            action={handleCashout}
          />
        </div>
      </div>
      <div className="w-full max-w-xs ">
        <div className="grid gap-4 py-4 w-[500px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="gap-4">
            <Label htmlFor="affiliatelId" className="text-right">
              Amount
            </Label>
            <p className="font-bold">{formattedAmount}</p>
          </div>

          <div className="gap-4">
            <Label htmlFor="affiliatelId" className="text-right">
              Tax
            </Label>
            <p className="font-bold">{formattedTax}</p>
          </div>

          <div className="gap-4">
            <Label htmlFor="affiliatelId" className="text-right">
              Processing Fee
            </Label>
            <p className="font-bold">{formattedFee}</p>
          </div>

          <div className="gap-4">
            <Label htmlFor="affiliatelId" className="text-right">
              Total Amount
            </Label>
            <p className="font-bold text-green-500 text-2xl">
              {amount === "" ? 0 : formattedTotalAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashOutForm;
