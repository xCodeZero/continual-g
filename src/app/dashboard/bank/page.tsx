"use client";
import { toast } from "@/components/ui/use-toast";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";
import MainButton from "@/components/common/MainButton";
import apiResources from "@/network/resources";
import { apiClient } from "@/network";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { ATOMS } from "@/network/atoms";

const Bank = () => {
  const [transactionNumber, setTransactionNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user, setUser] = useAtom(ATOMS.user);

  const onUploadPaymentPhotoSuccessHandler = (result: any) => {
    setImagePreview((prevState: any) => ({
      ...prevState,
      secureURL: result[0].url,
    }));

    setImagePreview(result[0].url);

    toast({
      title: "Image uploaded successfully",
      description: "Your proof of payment photo is ready to upload.",
      duration: 5000,
      className: "success-toast",
    });
  };

  const handleSubmitPayment = async () => {
    // alert("TES");
    console.log(transactionNumber);
    try {
      if (transactionNumber && amount && imagePreview) {
        setLoading(true);
        const res = await apiClient.post(
          apiResources.topup,
          "/",
          {
            source: "CREDIT",
            source_id: transactionNumber,
            amount: amount,
            status: "PENDING",
            image: imagePreview,
          },
          toast
        );

        console.log(res);

        if (res?.response?.meta?.message) {
          toast({
            title: "Payment Successful!",
            description: res?.response?.meta?.message,
            className: "success-toast",
          });

          setTimeout(() => {
            // startTransition(router.refresh);
            router.replace("/dashboard/topuphistory");
            // window.location.reload();
          }, 1000);

          setLoading(false);
        }
      } else {
        toast({
          title: "Payment submission failed",
          description: "Make sure that the form is fully filled out.",
          className: "error-toast",
        });
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen max-sm:p-4 mt-10">
      <div className="mb-8 text-lg font-semibold">Bank Details</div>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <label htmlFor="transactionNumber" className="text-lg font-semibold">
            Transaction Number:
          </label>
          <input
            type="text"
            id="transactionNumber"
            name="transactionNumber"
            className="w-full border border-gray-300 rounded-md py-2 px-4 mt-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter transaction number"
            onChange={(e) => setTransactionNumber(e.target.value)}
          />
          <label htmlFor="transactionNumber" className="text-lg font-semibold">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="w-full border border-gray-300 rounded-md py-2 px-4 mt-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <MainButton
          text="Submit"
          isSubmitable
          width="w-full"
          isLoading={loading}
          action={handleSubmitPayment}
        />

        <div className="mb-4">
          <label htmlFor="imageUpload" className="text-lg font-semibold mr-5">
            Upload proof of payment:
          </label>
          <UploadButton
            className="z-1"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              onUploadPaymentPhotoSuccessHandler(res);
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>

        <div className="flex justify-center">
          <div className="w-[600px] h-[600px] bg-gray-200 border border-black rounded-md flex items-center justify-center p-2">
            {imagePreview === "" ? (
              <Image
                src="/images/continualg/picture.png"
                alt=""
                width={300}
                height={300}
              />
            ) : (
              <Image src={imagePreview!} alt="" width={300} height={300} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
