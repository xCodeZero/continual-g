import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center bg-darkCyan min-h-screen">
      {/* <Image
        className="min-w-[50rem] min-h-[50rem] fixed bottom-[34.75%] right-[51.85%] z-0"
        src=""
        alt=""
      />
      <Image
        className="min-w-[50rem] min-h-[50rem] fixed top-[52.25%] left-[48%] z-0"
        src=""
        alt=""
      /> */}

      <main className="w-[21.875rem] overflow-hidden rounded-2xl text-center bg-white shadow-2xl z-10">
        <div className="">{/* <Image src="" alt="" /> */}</div>

        <div className="flex justify-center -mt-[3.3225rem] z-10">
          {/* <Image
            className="w-[6.6rem] h-[6.6rem] rounded-full border-[5px] border-white"
            src=""
            alt=""
          /> */}
        </div>

        <div className="px-10 py-4">
          <h1 className="inline text-[1.125rem] text-darkBlue font-bold">
            Victor Crest
          </h1>
          <span className="text-grayishBlue text-lg pl-2">26</span>

          <div className="text-grayishBlue text-sm py-[0.3rem]">London</div>

          <div className="border-b -mx-10 my-4" />

          <div className="flex flex-row text-[1.125rem] px-[1.1rem] py-2 justify-between items-center">
            <div>
              <div className="text-darkBlue tracking-wide font-bold">80K</div>
              <div className="text-grayishBlue -mx-6 text-[0.6rem] tracking-[0.1rem]">
                Followers
              </div>
            </div>

            <div>
              <div className="text-darkBlue tracking-wide font-bold">803K</div>
              <div className="text-grayishBlue -mx-6 text-[0.6rem] tracking-[0.1rem]">
                Likes
              </div>
            </div>

            <div>
              <div className="text-darkBlue tracking-wide font-bold">1.4K</div>
              <div className="text-grayishBlue -mx-6 text-[0.6rem] tracking-[0.1rem]">
                Photos
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
