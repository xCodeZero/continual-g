// components/PhoneNumberInput.tsx

import React from "react";
import PhoneInput from "react-phone-number-input/input";
import CountrySelectDropdown from "react-phone-number-input/input";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <PhoneInput
      placeholder="Contact number"
      value={value}
      onChange={onChange}
      countryselectcomponent={CountrySelectDropdown}
      className="my-2 w-full border-b border-white  bg-transparent py-2  text-black outline-none focus:outline-none"
    />
  );
};

export default PhoneNumberInput;
