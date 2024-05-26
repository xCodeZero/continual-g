"use client";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { apiClient, cookieStorageManager } from "@/network";
import apiResources from "@/network/resources";
import { useToast } from "@/components/ui/use-toast";
import { storageKeys } from "@/network/storageKeys";
import { useRouter } from "next/navigation";

const page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (accountId && password) {
        setIsSubmitting(true);

        const loginRes = await apiClient.post(
          apiResources.login,
          "/",
          {
            accountId,
            password,
          },
          toast
        );

        // NOTE: On login success
        // Save the user token to cookie
        // Redirect to Dashboard

        const userToken = loginRes?.response?.data?.token;
        if (userToken) {
          cookieStorageManager.addOrUpdateItem(
            storageKeys.token,
            loginRes?.response?.data?.token
          );

          setTimeout(() => {
            setIsSubmitting(false);
            router.push("/dashboard/applicants");
          }, 1000);
        }
      }
    } catch (err) {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center rounded-lg">
      <div className="flex  items-center justify-center h-screen w-screen">
        <div className="flex h-full w-full  flex-col items-center   p-20 max-sm:w-full">
          <Link href="/">
            <Image
              src="/images/continualg/Continual-logo.png"
              alt="register"
              height={328}
              width={328}
              className="object-contain max-sm:w-full mb-14"
            />
          </Link>

          <div className="flex w-full max-w-[500px] flex-col ">
            <div className="mb-2 flex w-full flex-col">
              <h3 className="mb-2 text-3xl  font-semibold text-orange-600">
                Login
              </h3>
              <p className="mb-2   text-base text-orange-500">
                Welcome back! Please sign in!
              </p>
            </div>
            <div className="flex w-full flex-col">
              <input
                onChange={(e) => setAccountId(e.target.value)}
                id="accountId"
                name="accountId"
                type="text"
                placeholder="Account ID"
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-black outline-none focus:outline-none uppercase"
                disabled={isSubmitting}
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-black outline-none focus:outline-none"
                disabled={isSubmitting}
              />
            </div>
            <div className="my-4 flex w-full flex-col">
              <button
                onClick={handleLogin}
                className="my-2 flex w-full items-center justify-center rounded-md border-black bg-primary p-4 text-center  text-black"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Please wait while we are signing you in...</>
                ) : (
                  <>Sign In</>
                )}
              </button>
              <Link href="/sign-up">
                <div className="flex w-full items-center justify-center">
                  <p className="text-sm font-normal text-orange-600">
                    Not an affiliate yet?{" "}
                    <span className="cursor-pointer font-semibold underline underline-offset-2">
                      Apply Now!
                    </span>
                  </p>
                </div>
              </Link>
              <Toaster />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
