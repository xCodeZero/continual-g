import Header from "@/components/common/Header";
import MainButton from "@/components/common/MainButton";
import React from "react";

function WhyChooseUs() {
  const chooseUsData = [
    {
      icon: "/images/continualg/the-science-behind-continual-g.png",
      title: "The Fundamental Science behind Continual-G®",
      desription:
        "Having insufficient cellular glutathione is behind most poor health conditions. It leads to oxidative damage, loss of physiological function, and related symptoms.",
    },
    {
      icon: "/images/continualg/experience-the-power-of-glyteine.png",
      title: "Experience the Power of the Glyteine® in Continual-G®",
      desription:
        "Glyteine® is the only clinically proven supplement capable of boosting your cellular glutathione in a single dose to provide relief from the ravages of oxidative stress.",
    },
    {
      icon: "/images/continualg/improve-health-at-the-cellular-level.png",
      title: "Improve your Health at the Cellular Level",
      desription:
        "Every cell in your body needs to make its own supply of Glyteine to ensure it has enough glutathione to fight oxidative stress. Help your body’s cells stay healthy with Continual-G®.",
    },
  ];

  const ourStats = [
    {
      item: "Years Experience",
      value: "12",
    },
    {
      item: "Distention Collaboration",
      value: "320+",
    },
    {
      item: "Satisfied Customer",
      value: "67+",
    },
  ];
  return (
    <section>
      <div className="flex flex-col gap-8 md:flex-row justify-around">
        <div>
          <img src="/images/choose_us.png" alt="choose us" />
        </div>
        <div>
          <Header
            title="THE KEY TO CONTINUAL GOOD HEALTH"
            description="Rapidly Increase Your Cellular Gluthathione In A Single Dose!"
          />
          <p>Think faster, Fight Stronger, Recover Earlier With CONTINUAL-G®</p>

          <div className="relative mt-5 w-[700px]">
            {chooseUsData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="mb-6 mr-3">
                  <img src={item.icon} alt="choose us icon" />
                </div>
                <div>
                  <p className="text-[28px] font-medium">{item.title}</p>
                  <p className="text-[#000000b0]">{item.desription}</p>
                </div>
              </div>
            ))}
            <MainButton text="EXPLORE MORE" classes="w-[150px] mt-12" />
            <div className="hidden md:block absolute right-0">
              <img src="/images/plane.png" alt="plane" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row-reverse justify-around mt-10">
        <div>
          <img src="/images/choose_us_2.png" alt="choose us" />
        </div>
        <div>
          <Header title="NOURISH YOUR SKIN" description="FROM WITHIN" />

          <p className="my-8">
            Most of us focus on the external appearance and topical maintenance
            of our skin. But ever wondered how to make your skin healthy from
            within?
          </p>

          <Header
            title="What goes on inside your body affects the outside!"
            description=""
          />

          <p className="my-8 w-[700px]">
            Your skin is the largest organ in your body, composed of trillions
            of cells! Every day, your skin must defend itself from a barrage of
            external and internal threats - from humidity to UV radiation to
            pollution and even aging. All of these increase free radicals that
            result in the oxidation of oils in the skin. Leading to a lack of
            skin radiance, age spots, and visible signs of aging.
          </p>

          <MainButton text="EXPLORE MORE" classes="w-[150px]" />

          {/* <div className="flex flex-col gap-8 md:gap-16 md:flex-row ">
            {ourStats.map((item, index) => (
              <div key={index} className="">
                <p className="text-[58px] font-bold">{item.value}</p>
                <p className="text-secondary">{item.item}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
