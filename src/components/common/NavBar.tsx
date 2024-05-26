"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "@/components/common/MainButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

import { Toaster } from "@/components/ui/toaster";

import AuthWrapperForm from "@/components/forms/AuthWrapperForm";
import Link from "next/link";
import { Button } from "../ui/button";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0  md:shadow-none z-20">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <div>
            <Link href="/">
              <img
                src="/images/Continual-G.png"
                alt="logo"
                className="object-cover"
              />
            </Link>
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              <Link href="/">
                <Button className="bg-transparent text-black hover:bg-orange-300">
                  Home
                </Button>
              </Link>
            </p>
            {/* <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              <Link href="/packages">
                <Button className="bg-transparent text-black hover:bg-orange-300">
                  Packages
                </Button>
              </Link>
            </p> */}
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              <Link href="/affiliate-program">
                <Button className="bg-transparent text-black hover:bg-orange-300">
                  Affiliate Program
                </Button>
              </Link>
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
            >
              <Link href="/sign-up">
                <Button className="bg-transparent text-black hover:bg-orange-300">
                  Become an affiliate!
                </Button>
              </Link>
            </p>

            {/* Add more links here */}
          </div>
          <div className="flex items-center gap-[40px] select-none w-[24x] h-[24px] cursor-pointer">
            <Link href="/sign-up">
              <img src="/images/hamburger.png" alt="hamburger" />
            </Link>
            {/* <Dialog>
              <DialogTrigger asChild>
                <img src="/images/hamburger.png" alt="hamburger" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <AuthWrapperForm />
              </DialogContent>
            </Dialog> */}
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img
              src="/images/Continual-G.png"
              alt="logo"
              className="w-[7rem] object-contain"
            />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.png"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in  w-[24px] h-[24px] object-contain"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                <Link href="/">Home</Link>
              </p>
              {/* <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                <Link href="/packages">Packages</Link>
              </p> */}
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                <Link href="/affiliate-program"> Affiliate Program</Link>
              </p>
              <Link href="/sign-up">
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                  <Link href="/sign-up">Become an affiliate!</Link>
                </p>
              </Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
