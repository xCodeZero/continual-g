"use client";

import React, { useState } from "react";
import MainButton from "@/components/common/MainButton";
import AuthWrapperForm from "@/components/forms/AuthWrapperForm";
import Header from "@/components/common/Header";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function NewsLetter() {
  const [email, setEmail] = useState("");
  return (
    <div className="relative w-full">
      <div className="md:text-[38px] font-semibold text-center mb-6 bg-primary text-white  flex-row flex items-center justify-evenly w-auto max-sm:text-sm">
        <div className="flex items-center justify-center mr-5">
          <img
            src="/images/continualg/free-shipping.png"
            alt="free shipping"
            width={40}
            height={40}
          />
          <span className="ml-2">FREE SHIPPING</span>
        </div>
        <div
          className="divider"
          style={{ width: "2px", height: "90px", backgroundColor: "white" }}
        ></div>
        <div className="flex items-center justify-center mr-5">
          <img
            src="/images/continualg/return.png"
            alt="easy returns"
            width={60}
            height={60}
          />
          <span className="ml-2">EASY RETURNS</span>
        </div>
        <div
          className="divider"
          style={{ width: "2px", height: "90px", backgroundColor: "white" }}
        ></div>
        <div className="flex items-center justify-center mr-5">
          <img
            src="/images/continualg/security-shield.png"
            alt="secure"
            width={40}
            height={40}
          />
          <span className="ml-2">100% SECURE</span>
        </div>
        <div
          className="divider"
          style={{ width: "2px", height: "90px", backgroundColor: "white" }}
        ></div>
        <div className="flex items-center justify-center mr-5">
          <img
            src="/images/continualg/quality-control.png"
            alt="quality"
            width={40}
            height={40}
          />
          <span className="ml-2">QUALITY</span>
        </div>
      </div>

      <div className="text-secondary text-center">
        <Header
          title="Kickstart Your Body's Production of Glutathione TODAY!"
          description=""
        />
      </div>
      <div className="flex justify-center mt-12">
        <div className="relative w-full md:max-w-[600px]">
          <p className=" h-[70px] text-white font-semibold text-2xl"></p>
          <div className="block mt-3 md:mt-0 md:absolute md:top-3 right-3">
            <Dialog>
              <DialogTrigger asChild>
                {/* <MainButton text="GET STARTED" classes="w-[580px]" /> */}
                <Button className="w-[580px] bg-primary hover:bg-orange-300">
                  GET STARTED
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <AuthWrapperForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute left-0 top-0">
        <img src="/images/plane_left.png" alt="plane left" />
      </div>

      <div className="hidden md:block absolute right-0 top-0">
        <img src="/images/plane_right.png" alt="plane right" />
      </div>
    </div>
  );
}

export default NewsLetter;
