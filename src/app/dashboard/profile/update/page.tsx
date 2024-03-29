"use client";
import Image from "next/image";
import React from "react";
import apiResources from "@/network/resources";
import { apiClient } from "@/network";
import { ATOMS } from "@/network/atoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import MainButton from "@/components/common/MainButton";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function Profile() {
  const [user, setUser] = useAtom(ATOMS.user);
  const [loading, setLoading] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNUmber] = useState("");
  const [address, setAddress] = useState("");
  const [accountNumber, setAccountNUmber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bank, setBank] = useState("");
  const [isTypingFirstName, setIsTypingFirstName] = useState(false);
  const [isTypingLastName, setIsTypingLastName] = useState(false);
  const [isTypingBio, setIsTypingBio] = useState(false);
  const [isTypingPhoneNumber, setIsTypingPhoneNumber] = useState(false);
  const [isTypingAddress, setIsTypingAddress] = useState(false);
  const [isTypingAccountNumber, setIsTypingAccountNumber] = useState(false);
  const [isTypingAccountName, setIsTypingAccountName] = useState(false);
  const [isTypingBank, setIsTypingBank] = useState(false);
  const router = useRouter();

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
          address: string;
          phoneNumber: string;
          bank: string;
          bio: string;
          coverPhoto: string;
          photo: string;
        }>(apiResources.users, "/");
        // Set to global state
        setUser(res);
        setProfilePhoto(res.photo);
        setCoverPhoto(res.coverPhoto);
        setFirstName(res.firstName);
        setLastName(res.lastName);
        setBio(res.bio);
        setPhoneNUmber(res.phoneNumber);
        setAddress(res.address);
        setAccountNUmber(res.bankAccount);
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

  const onUploadCoverSuccessHandler = (result: any) => {
    setCoverPhoto((prevState: any) => ({
      ...prevState,
      // publicId: result?.info?.public_id,
      // width: result?.info?.width,
      // height: result?.info?.height,
      secureURL: result[0].url,
    }));

    // console.log(result[0].url);

    setCoverPhoto(result[0].url);

    toast({
      title: "Image uploaded successfully",
      description: "Your cover photo is ready to upload.",
      duration: 5000,
      className: "success-toast",
    });
  };

  const onUploadProfileSuccessHandler = (result: any) => {
    setProfilePhoto((prevState: any) => ({
      ...prevState,
      // publicId: result?.info?.public_id,
      // width: result?.info?.width,
      // height: result?.info?.height,
      secureURL: result[0].url,
    }));

    // console.log(result[0].url);

    setProfilePhoto(result[0].url);

    toast({
      title: "Image uploaded successfully",
      description: "Your profile photo is ready to upload.",
      duration: 5000,
      className: "success-toast",
    });
  };

  const handleChangeFirstName = (e: any) => {
    setIsTypingFirstName(true);
    const typedValue = e.target.value;
    setFirstName(typedValue);
  };

  const handleChangeLastName = (e: any) => {
    setIsTypingLastName(true);
    const typedValue = e.target.value;
    setLastName(typedValue);
  };

  const handleChangeBio = (e: any) => {
    setIsTypingBio(true);
    const typedValue = e.target.value;
    setBio(typedValue);
  };

  const handlePhoneNUmber = (e: any) => {
    setIsTypingPhoneNumber(true);
    const typedValue = e.target.value;
    setPhoneNUmber(typedValue);
  };

  const handleAddress = (e: any) => {
    setIsTypingAddress(true);
    const typedValue = e.target.value;
    setAddress(typedValue);
  };

  const handleAccountNUmber = (e: any) => {
    setIsTypingAccountNumber(true);
    const typedValue = e.target.value;
    setAccountNUmber(typedValue);
  };

  const handleAccountName = (e: any) => {
    setIsTypingAccountName(true);
    const typedValue = e.target.value;
    setAccountName(typedValue);
  };

  const handleBankName = (e: any) => {
    setIsTypingBank(true);
    const typedValue = e.target.value;
    setBank(typedValue);
  };
  console.log(firstName);

  const handleUpdateProfile = async () => {
    console.log(firstName);

    try {
      if (
        firstName &&
        lastName &&
        phoneNumber &&
        address &&
        accountNumber &&
        accountName &&
        bank
      ) {
        setLoading(true);
        const res = await apiClient.post(
          apiResources.updateprofile,
          "/",
          {
            photo: profilePhoto,
            coverPhoto: coverPhoto,
            firstName: firstName,
            lastName,
            bio,
            phoneNumber,
            address,
            bankAccount: accountNumber.toUpperCase(),
            bankAccountName: accountName.toUpperCase(),
            bank: bank.toUpperCase(),
          },
          toast
        );

        console.log(res);

        if (res?.response?.meta?.message) {
          toast({
            title: "Updating Profile Successful!",
            description: res?.response?.meta?.message,
            className: "success-toast",
          });

          setTimeout(() => {
            // startTransition(router.refresh);
            router.replace("/dashboard/profile");
            // window.location.reload();
          }, 1000);

          setLoading(false);
        }
      } else {
        toast({
          title: "Profile update error",
          description: "Make sure that the form is fully filled out.",
          className: "error-toast",
        });
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full mt-12 items-center bg-darkCyan max-h-screen lg:w-full max-sm:w-[520px] md:w-[930px]">
        <div className="w-[100rem] overflow-hidden rounded-2xl text-center bg-white shadow-2xl z-10">
          <div className="">
            <Image
              className="w-full h-[15rem] border-[5px] border-white object-contain"
              src={
                coverPhoto === ""
                  ? "https://utfs.io/f/cc4951b4-a912-4441-85b5-d0a8c506e205-c2buqn.jpg"
                  : coverPhoto
              }
              alt=""
              width={300}
              height={300}
            />
          </div>

          <div className="flex justify-center -mt-[3.3225rem] z-10">
            <Image
              className="w-[5rem] h-[5rem] rounded-full border-[5px] border-white object-cover"
              src={
                profilePhoto === ""
                  ? "https://utfs.io/f/cc4951b4-a912-4441-85b5-d0a8c506e205-c2buqn.jpg"
                  : profilePhoto
              }
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="px-10 py-4">
            <h1 className="flex items-center text-[1.125rem] text-darkBlue font-bold justify-center">
              <div className="mr-2">
                {isTypingFirstName ? firstName : user?.firstName}
              </div>
              <div> {isTypingLastName ? lastName : user?.lastName}</div>
            </h1>
            {/* <span className="text-grayishBlue text-lg pl-2">26</span> */}

            <div className="text-grayishBlue py-[0.3rem] text-2xl font-bold text-orange-600">
              {user?.accountId}
            </div>
            <p className="font-bold italic">
              “{isTypingBio ? bio : user?.bio === "" ? "Add Bio" : user?.bio}”
            </p>

            <div className="border-b -mx-10 my-4" />
            <div className="items-center justify-center flex">
              <div className="grid gap-4 py-4 w-[500px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="gap-4">
                  <Label htmlFor="affiliatelId" className="text-right">
                    Update Cover Photo
                  </Label>
                  <UploadButton
                    className="z-1"
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      console.log("Files: ", res);
                      onUploadCoverSuccessHandler(res);
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                </div>
                <div className="gap-4">
                  <Label htmlFor="affiliatelId" className="text-right">
                    Update Profile Photo
                  </Label>
                  <UploadButton
                    className="z-1"
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      console.log("Files: ", res);
                      onUploadProfileSuccessHandler(res);
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                </div>
                <div className="gap-4">
                  <Label htmlFor="affiliatelId" className="text-right">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter First Name"
                    className="col-span-3"
                    type="text"
                    value={isTypingFirstName ? firstName : user?.firstName}
                    onChange={handleChangeFirstName}
                  />
                </div>
                <div className="gap-4">
                  <Label htmlFor="affiliatelId" className="text-right">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter Last Name"
                    className="col-span-3"
                    type="text"
                    value={isTypingLastName ? lastName : user?.lastName}
                    onChange={handleChangeLastName}
                  />
                </div>

                <div className="gap-4">
                  <Label htmlFor="affiliatelId" className="text-right">
                    Bio
                  </Label>
                  <Input
                    id="bio"
                    placeholder="Enter Bio"
                    className="col-span-3"
                    type="text"
                    value={isTypingBio ? bio : user?.bio}
                    onChange={handleChangeBio}
                  />
                </div>
                <div className="gap-4">
                  <Label htmlFor="affiliatelId" className="text-right">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    placeholder="Enter Phone Number"
                    className="col-span-3"
                    type="text"
                    value={
                      isTypingPhoneNumber
                        ? phoneNumber.toUpperCase()
                        : user?.phoneNumber
                    }
                    onChange={handlePhoneNUmber}
                  />
                </div>
                <div className="gap-4">
                  <Label htmlFor="affiliatelId" className="text-right">
                    Address
                  </Label>
                  <Input
                    id="address"
                    placeholder="Enter Address"
                    className="col-span-3"
                    type="text"
                    value={isTypingAddress ? address : user?.address}
                    onChange={handleAddress}
                  />
                </div>

                <div className=" gap-4">
                  <Label htmlFor="firstName" className="text-right">
                    Account Number
                  </Label>
                  <Input
                    id="accountNumber"
                    placeholder="Enter Account Number"
                    className="col-span-3"
                    type="number"
                    value={
                      isTypingAccountNumber
                        ? accountNumber.toUpperCase()
                        : user?.bankAccount
                    }
                    onChange={handleAccountNUmber}
                  />
                </div>

                <div className=" gap-4">
                  <Label htmlFor="firstName" className="text-right">
                    Account Name
                  </Label>
                  <Input
                    id="accountName"
                    placeholder="Enter Accout Name"
                    className="col-span-3"
                    type="text"
                    value={
                      isTypingAccountName
                        ? accountName.toUpperCase()
                        : user?.bankAccountName
                    }
                    onChange={handleAccountName}
                  />
                </div>

                <div className=" gap-4">
                  <Label htmlFor="firstName" className="text-right">
                    Bank
                  </Label>
                  <Input
                    id="bank"
                    placeholder="Enter Bank Name"
                    className="col-span-3"
                    type="text"
                    value={isTypingBank ? bank.toUpperCase() : user?.bank}
                    onChange={handleBankName}
                  />
                </div>

                <MainButton
                  text="Update Pofile"
                  isSubmitable
                  width="w-full"
                  isLoading={loading}
                  action={handleUpdateProfile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
