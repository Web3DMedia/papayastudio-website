import ActivityCard from "../molecules/ActivityCard";
import AOS from "aos";
import { useEffect } from "react";

const CreateSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      delay: 0,
      duration: 1500,
    });
  });
  const activityData = [
    {
      name: "2D Animation(Animes)",
      text: "We create 2D animations that are forging the future of community-driven edutainment for the new web.",
    },
    {
      name: "3D Animations",
      text: "We create 3D animations that are forging the future of community-driven edutainment for the new web.",
    },

    {
      name: "Motion Graphics Design",
      text: "We create stunning motion graphics spots on web3 content.",
    },
    {
      name: "Video Production",
      text: "We produce live-action videos in our in-house studio with great stories woven around web3, blockchain, and emerging technologies.",
    },
    {
      name: "Rendering Farm",
      text: "Our render farm technology offers high-quality renders that are 10X faster than the average speed. web3 creators can now render their large project files at our studio.",
    },

    {
      name: "Content Development",
      text: "We tell relatable and edutaining stories that are carefully crafted to drive community engagement in the web3 media space.",
    },
  ];
  return (
    <section
      className="relative w-full py-28 md:py-32  xl:py-48 4xl:pt-36"
      id="WhatWeDo"
    >
      <div className="bgTransformationOne">
        <div className="bgTransformationOneLeft" />
        <div className="bgTransformationOneRight" />
      </div>
      <div className="absolute top-20 left-7 w-[2px] hidden lg:block h-40 bg-[#FCD1CA]" />
      <div className="2xl:w-[1440px] m-auto">
        <div className="pt-[74px] sm:pt-0 relative w-full h-full mx-auto md:px-0 lg:px-20 xl:px-40 4xl:py-20">
          <p
            className=" absolute left-5 md:left-14 -top-[20px] sm:-top-[60px] lg:left-20 xl:left-[80px] md:-top-[50px] xl:-top-[115px] 4xl:-top-16 4xl:left-20 font-normal text-xs uppercase"
            data-aos="fade-up"
          >
            What We <br /> Do
          </p>
          <div className="h-full w-full ">
            <h2
              className=" text-[24px] leading-tight md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold pl-5 md:pl-14 lg:pl-0 md:pt-12 xl:pt-0"
              data-aos="fade-up"
            >
              We create blockchain <br />
              and web3 focused:
            </h2>
            <div
              className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 px-5 md:pl-14 lg:pl-[0px] lg:px-0"
              data-aos="fade-up"
            >
              {activityData?.map((info, index) => (
                <ActivityCard key={index} info={info} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateSection;
