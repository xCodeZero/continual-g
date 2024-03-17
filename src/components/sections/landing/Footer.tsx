import React from "react";

function Footer() {
  return (
    <div className="text-white bg-primary py-16 px-4">
      <div className=" flex flex-col md:flex-row justify-between gap-16">
        <div>
          <p className="text-[34px] font-bold">CONTINUAL-G®</p>
          <p className="mt-4 mb-8">
            Continual-G® is the only proven dietary supplement that contains
            Glyteine® as the functional dietary ingredient.
          </p>

          <div className="flex gap-4">
            <div>
              <img src="/images/facebook_app_symbol.png" alt="social icon" />
            </div>
            <div>
              <img src="/images/linkedin.png" alt="social icon" />
            </div>
            <div>
              <img src="/images/twitter.png" alt="social icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 w-full">
          <div>
            <p className="font-semibold text-[28px]">Services</p>
            <div className="flex flex-col gap-4 mt-4">
              <p>Services</p>
              <p>Services</p>
              <p>Services</p>
              <p>Services</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-[28px]">Contact</p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-2 items-center">
                <div>
                  <img src="/images/maps_and_flags.png" alt="location icon" />
                </div>
                <p>To be added...</p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <img src="/images/call_icon.png" alt="location icon" />
                </div>
                <p>+01 1234567890</p>
              </div>

              <div className="flex gap-2 items-center">
                <div>
                  <img src="/images/envelop.png" alt="location icon" />
                </div>
                <p>support@continualg.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex justify-center pt-32">
        continualg-nigeria©2024 all right reserve
      </p>
    </div>
  );
}

export default Footer;
