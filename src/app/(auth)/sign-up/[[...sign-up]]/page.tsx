"use client";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { apiClient } from "@/network";
import apiResources from "@/network/resources";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [affiliateId, setAffiliateId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async () => {
    setIsSubmitting(true);
    const generatedStrings = Array.from({ length: 1 }, () =>
      Math.random().toString(36).substr(2, 6)
    );

    try {
      if (
        email &&
        password &&
        firstName &&
        lastName &&
        affiliateId &&
        phoneNumber &&
        address
      ) {
        setLoading(true);
        const res = await apiClient.post(
          apiResources.register,
          "/",
          {
            affiliateId: affiliateId.toUpperCase(),
            accountId: ("CGNGR" + generatedStrings).toUpperCase(),
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            address,
          },
          toast
        );

        console.log(res);

        if (res?.response?.meta?.message) {
          toast({
            title: "User creation",
            description: res?.response?.meta?.message,
            className: "success-toast",
          });

          setLoading(false);
          setIsSubmitting(false);
          router.push("/sign-in");
        }
      } else {
        setIsSubmitting(false);
        toast({
          title: "User creation error",
          description: "Plase fill up the form.",
          className: "error-toast",
        });
      }
    } catch (err) {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-tr from-[#ffffff] to-[#fddbc6] ">
      <div className="flex  items-center justify-center h-screen w-screen">
        <div className="flex h-full w-full  flex-col items-center   p-20 max-sm:w-full">
          <Link href="/">
            <Image
              src="/images/continualg/Continual-logo.png"
              alt="register"
              height={228}
              width={228}
              className="object-contain max-sm:w-full mb-14"
            />
          </Link>

          <div className="flex w-full max-w-[500px] flex-col ">
            <div className="mb-2 flex w-full flex-col">
              <h3 className="mb-2 text-3xl  font-semibold text-orange-600">
                Sign Up!
              </h3>
              <p className="mb-2   text-base text-orange-500">
                Welcome! Please sign up!
              </p>
            </div>
            <div className="flex w-full flex-col">
              <input
                onChange={(e) => setAffiliateId(e.target.value)}
                id="referrerId"
                name="referrerId"
                type="text"
                placeholder="Enter Affiliate ID number"
                value={affiliateId.toUpperCase()}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-white outline-none focus:outline-none"
                disabled={isSubmitting}
              />
              <input
                onChange={(e) => setFirstName(e.target.value)}
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-white outline-none focus:outline-none capitalize"
                disabled={isSubmitting}
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-white outline-none focus:outline-none capitalize"
                disabled={isSubmitting}
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-white outline-none focus:outline-none"
                disabled={isSubmitting}
              />
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Please provide a valid contact number"
                value={phoneNumber}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-white outline-none focus:outline-none"
                disabled={isSubmitting}
              />
              <input
                onChange={(e) => setAddress(e.target.value)}
                id="address"
                name="address"
                type="text"
                placeholder="Please provide a valid address"
                value={address}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-white outline-none focus:outline-none"
                disabled={isSubmitting}
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-white outline-none focus:outline-none"
                disabled={isSubmitting}
              />
            </div>
            <div className="my-4 flex w-full flex-col">
              <button
                onClick={handleRegister}
                className="my-2 flex w-full items-center justify-center rounded-md border-black bg-primary p-4 text-center  text-black"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Please wait while we are signing you up...</>
                ) : (
                  <>Sign Up</>
                )}
              </button>
              <Link href="/sign-in">
                <div className="flex w-full items-center justify-center">
                  <p className="text-sm font-normal text-orange-600">
                    You already have account?{" "}
                    <span className="cursor-pointer font-semibold underline underline-offset-2">
                      Sign In!
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
