"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import MainButton from "../common/MainButton";
import { apiClient } from "@/network";
import apiResources from "@/network/resources";
import { useToast } from "@/components/ui/use-toast";

function SignupForm({ setIsLogin }: { setIsLogin: (value: boolean) => void }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [affiliateId, setAffiliateId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async () => {
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
          setIsLogin(true);
        }
      } else {
        toast({
          title: "User creation error",
          description: "Plase fill up the form.",
          className: "error-toast",
        });
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div>
      <DialogHeader>
        <DialogTitle className="flex justify-center my-4 font-semibold">
          Register
        </DialogTitle>
      </DialogHeader>

      <div className="grid gap-4 py-4">
        <div className=" gap-4">
          <Label htmlFor="affiliatelId" className="text-right">
            Affiliate ID
          </Label>
          <Input
            id="referrerId"
            placeholder="Enter Affiliate ID number"
            className="col-span-3"
            type="name"
            value={affiliateId.toUpperCase()}
            onChange={(e) => setAffiliateId(e?.target?.value)}
          />
        </div>

        <div className=" gap-4">
          <Label htmlFor="firstName" className="text-right">
            First Name
          </Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            className="col-span-3"
            type="name"
            value={firstName}
            onChange={(e) => setFirstName(e?.target?.value)}
          />
        </div>

        <div className=" gap-4">
          <Label htmlFor="lastName" className="text-right">
            Last Name
          </Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            className="col-span-3"
            type="name"
            value={lastName}
            onChange={(e) => setLastName(e?.target?.value)}
          />
        </div>

        <div className=" gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Enter your email"
            className="col-span-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
          />
        </div>
        <div className=" gap-4">
          <Label htmlFor="lastName" className="text-right">
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            placeholder="Please provide a valid contact number"
            className="col-span-3"
            type="name"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e?.target?.value)}
          />
        </div>
        <div className=" gap-4">
          <Label htmlFor="lastName" className="text-right">
            Address
          </Label>
          <Input
            id="address"
            placeholder="Please provide a valid address"
            className="col-span-3"
            type="name"
            value={address}
            onChange={(e) => setAddress(e?.target?.value)}
          />
        </div>
        <div className=" gap-4">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <Input
            id="password"
            className="col-span-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e?.target?.value)}
          />
        </div>
      </div>

      <p
        className="text-primary text-right  cursor-pointer"
        onClick={() => setIsLogin(true)}
      >
        Sign in?
      </p>

      <DialogFooter className="my-8">
        <MainButton
          text="Register"
          isSubmitable
          width="w-full"
          isLoading={loading}
          action={handleRegister}
        />
      </DialogFooter>
    </div>
  );
}

export default SignupForm;
