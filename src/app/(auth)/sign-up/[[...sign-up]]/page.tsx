"use client";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { apiClient } from "@/network";
import apiResources from "@/network/resources";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import "react-phone-number-input/style.css";
import PhoneNumberInput from "@/components/input/PhoneNumberInput";
import { UploadButton } from "@/utils/uploadthing";
import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

const statesOfNigeria: string[] = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

interface IDType {
  label: string;
  value: string;
}

const idTypes: IDType[] = [
  { label: "Passport", value: "passport" },
  { label: "Driver's License", value: "drivers_license" },
  { label: "National ID", value: "national_id" },
  { label: "Voter ID", value: "voter_id" },
  { label: "Other", value: "other" },
];

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
  const [state, setState] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedID, setSelectedID] = useState<string>("");
  const [idImage, setIdImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isImageClicked, setIsImageClicked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleIDChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedID(e.target.value);
  };

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
        // affiliateId &&
        phoneNumber &&
        address &&
        state &&
        idImage &&
        selectedID
      ) {
        setLoading(true);
        const res = await apiClient.post(
          apiResources.register,
          "/",
          {
            affiliateId: "",
            accountId: "",
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            address,
            state,
            idImage,
            idType: selectedID,
          },
          toast
        );

        console.log(res);

        if (res?.response?.meta?.message) {
          sendEmail();
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

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setIdImage(file);
  };

  const onUploadPaymentPhotoSuccessHandler = (result: any) => {
    setImagePreview((prevState: any) => ({
      ...prevState,
      secureURL: result[0].url,
    }));

    setImagePreview(result[0].url);

    setIdImage(result[0].url);

    toast({
      title: "Image uploaded successfully",
      description: "Your ID is ready to upload.",
      duration: 5000,
      className: "success-toast",
    });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const sendEmail = async () => {
    setLoading(true);
    try {
      await apiClient.post(
        apiResources.mail,
        "/",
        {
          to: email,
          name: firstName,
          subject: "Affiliate Application",
        },
        toast
      );

      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
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
              height={200}
              width={200}
              className="object-contain max-sm:w-[150px] mb-14"
            />
          </Link>

          <div className="flex w-full max-w-[500px] flex-col ">
            <div className="mb-2 flex w-full flex-col">
              <h3 className="mb-2 text-3xl  font-semibold text-orange-600">
                Sign Up!
              </h3>
              <p className="mb-2   text-base text-orange-500">
                Welcome! Join our affiliate program.
              </p>
            </div>
            <div className="flex w-full flex-col">
              {/* <input
                onChange={(e) => setAffiliateId(e.target.value)}
                id="referrerId"
                name="referrerId"
                type="text"
                placeholder="Enter Affiliate ID"
                value={affiliateId.toUpperCase()}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-black outline-none focus:outline-none"
                disabled={isSubmitting}
              /> */}
              <input
                onChange={(e) => setFirstName(e.target.value)}
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-black outline-none focus:outline-none capitalize"
                disabled={isSubmitting}
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-black outline-none focus:outline-none capitalize"
                disabled={isSubmitting}
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-black outline-none focus:outline-none"
                disabled={isSubmitting}
              />

              <div className="my-2 w-full border-b border-white  bg-transparent py-2  text-black outline-none focus:outline-none">
                <PhoneNumberInput
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                <p>Entered phone number: {phoneNumber}</p>
              </div>

              <input
                onChange={(e) => setAddress(e.target.value)}
                id="address"
                name="address"
                type="text"
                placeholder="Please provide a valid address"
                value={address}
                className="my-2 w-full border-b border-white  bg-transparent py-2  text-black outline-none focus:outline-none"
                disabled={isSubmitting}
              />
              <select
                id="state"
                name="state"
                value={state}
                onChange={handleStateChange}
                className="my-2 w-full border-b border-white bg-transparent py-2 text-black outline-none focus:outline-none"
                disabled={isSubmitting}
              >
                <option value="">Select State</option>
                {statesOfNigeria.map((stateName) => (
                  <option key={stateName} value={stateName}>
                    {stateName}
                  </option>
                ))}
              </select>
              <select
                id="idType"
                name="idType"
                value={selectedID}
                onChange={handleIDChange}
                className="my-2 w-full border-b border-white bg-transparent py-2 text-black outline-none focus:outline-none"
              >
                <option value="">Select ID Type</option>
                {idTypes.map((idType: IDType) => (
                  <option key={idType.value} value={idType.value}>
                    {idType.label}
                  </option>
                ))}
              </select>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <label htmlFor="imageUpload" className="">
                  Upload your ID photo
                </label>
                <UploadButton
                  className="z-1"
                  endpoint="imageUploader"
                  onClientUploadComplete={onUploadPaymentPhotoSuccessHandler}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
                {imagePreview && (
                  <div onClick={toggleModal} style={{ cursor: "pointer" }}>
                    <Image src={imagePreview} alt="" width={150} height={150} />
                  </div>
                )}
                <Modal
                  isOpen={isModalOpen}
                  onClose={toggleModal}
                  imageUrl={imagePreview || ""}
                />
              </div>

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
