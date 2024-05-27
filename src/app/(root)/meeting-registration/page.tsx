"use client";
import React, { use } from "react";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import PhoneNumberInput from "@/components/input/PhoneNumberInput";
import apiResources from "@/network/resources";
import { apiClient } from "@/network";

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

const professionalRoles: string[] = [
  "Affiliate",
  "Medical Doctor",
  "Pharmacist",
  "Medical Scientist",
  "Journalist",
  "Prospective Distributor",
  "Other (please specify)",
];

const MeetingRegistration = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [roleState, setRoleState] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questionsOrTopics, setQuestionsOrTopics] = useState("");
  const [consent, setConsent] = useState(false);
  const [specialization, setSpecialization] = useState("");
  const [organization, setOrganization] = useState("");
  const [otherProfession, setOtherProfession] = useState("");

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };

  const handleRoleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoleState(e.target.value);
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedReasons((prevReasons) =>
      prevReasons.includes(value)
        ? prevReasons.filter((reason) => reason !== value)
        : [...prevReasons, value]
    );
  };

  const sendEmail = async () => {
    setLoading(true);
    try {
      await apiClient.post(
        apiResources.meetingmail,
        "/",
        {
          to: email,
          name: firstName,
          subject: "Video Meeting Reservation",
        },
        toast
      );

      toast({
        title: "Email Sent!",
        description: "We sent you an email, please check your email",
        duration: 5000,
        className: "success-toast",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setIsSubmitting(true);
    const generatedStrings = Array.from({ length: 1 }, () =>
      Math.random().toString(36).substr(2, 6)
    );

    try {
      if (
        firstName &&
        lastName &&
        email &&
        phoneNumber &&
        state &&
        roleState &&
        selectedReasons &&
        consent
      ) {
        setLoading(true);
        const res = await apiClient.post(
          apiResources.registermeeting,
          "/",
          {
            firstName,
            lastName,
            email,
            phoneNumber,
            state,
            profession: otherProfession !== "" ? otherProfession : roleState,
            reason: selectedReasons,
            question: questionsOrTopics,
            agree: consent,
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
          router.push("/");
        }
      } else {
        setIsSubmitting(false);
        toast({
          title: "User creation error",
          description: "Please fill up the form.",
          className: "error-toast",
        });
      }
    } catch (err) {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen max-sm:mb-96 max-sm:mt-12">
      <div className="flex  items-center justify-center h-screen w-screen">
        <div className="flex h-full w-full  flex-col items-center p-20 max-sm:w-full">
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
              <h4 className="mb-2 text-lg font-semibold text-orange-600">
                <p className="mb-2   text-base text-orange-500">
                  We are excited to invite you to the official launching of
                  Continual-G and an enriching virtual meeting featuring Dr.
                  Wallace Bridge, the formulator of Continual-G, and his
                  esteemed team. Join us to explore the groundbreaking benefits
                  and clinical applications of Glyteine. Register below to
                  secure your spot!
                </p>
              </h4>
            </div>
            <div className="flex w-full flex-col">
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
              {roleState !== "Other (please specify)" ? (
                <select
                  id="professionalRole"
                  name="professionalRole"
                  value={roleState}
                  onChange={handleRoleStateChange}
                  className="my-2 w-full border-b border-white bg-transparent py-2 text-black outline-none focus:outline-none"
                  disabled={isSubmitting}
                >
                  <option value="">Professional Role</option>
                  {professionalRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  onChange={(e) => setOtherProfession(e.target.value)}
                  id="professionalRole"
                  name="professionalRole"
                  type="text"
                  placeholder="Other Profession"
                  value={otherProfession}
                  className="my-2 w-full border-b border-white  bg-transparent py-2  text-black outline-none focus:outline-none"
                  disabled={isSubmitting}
                />
              )}

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

              <div className="my-4">
                <h4 className="mb-2 text-lg font-semibold text-orange-600">
                  Reason for Attending*
                </h4>
                <div className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="reason"
                      value="Learn About Glyteine"
                      className="mr-2"
                      onChange={handleReasonChange}
                      disabled={isSubmitting}
                    />
                    Learn About Glyteine
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="reason"
                      value="Gain Insights from the Launch"
                      className="mr-2"
                      onChange={handleReasonChange}
                      disabled={isSubmitting}
                    />
                    Gain Insights from the Launch
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="reason"
                      value="Networking Opportunities"
                      className="mr-2"
                      onChange={handleReasonChange}
                      disabled={isSubmitting}
                    />
                    Networking Opportunities
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="reason"
                      value="Other"
                      className="mr-2"
                      onChange={handleReasonChange}
                      disabled={isSubmitting}
                    />
                    Other
                  </label>
                </div>
                {selectedReasons.includes("Other") && (
                  <input
                    type="text"
                    placeholder="Please specify"
                    className="my-2 w-full border-b border-white bg-transparent py-2 text-black outline-none focus:outline-none"
                    value={otherReason}
                    onChange={(e) => setOtherReason(e.target.value)}
                    disabled={isSubmitting}
                  />
                )}
              </div>
              <div className="my-4">
                <h4 className="mb-2 text-lg font-semibold text-orange-600">
                  Questions or Topics You Hope to See Addressed*
                </h4>
                <textarea
                  placeholder="Enter your questions or topics here..."
                  className="my-2 w-full border border-gray-400 rounded bg-transparent py-2 text-black outline-none focus:outline-none"
                  value={questionsOrTopics}
                  onChange={(e) => setQuestionsOrTopics(e.target.value)}
                  rows={4}
                  disabled={isSubmitting}
                />
              </div>
              <div className="my-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="consent"
                    className="mr-2"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    disabled={isSubmitting}
                  />
                  I agree to receive updates and information about future
                  events, products, and promotions from Continual-G
                </label>
              </div>
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

              <Toaster />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRegistration;
