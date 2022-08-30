import ActivityCard from "../molecules/ActivityCard";
import AOS from "aos";
import { useEffect } from "react";
import styled from "styled-components";


interface IProps {
  myRefTwo: any
  isTwo: boolean
}


const CreateSection = ({ myRefTwo, isTwo }: IProps) => {

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1500,
    });
  });


  const activityData = [
    {
      name: "2D Animation(Animes)",
      text: "We create 2D animations that are forging the future of community-driven edutainment.",
    },
    {
      name: "3D Animations",
      text: "We create 3D animations that are forging the future of community-driven edutainment.",
    },

    {
      name: "Motion Graphics Design",
      text: "We create stunning motion graphics spots on creative contents.",
    },
    {
      name: "Video Production",
      text: "We produce live-action videos in our in-house studio with great stories woven around design and emerging technologies.",
    },
    {
      name: "Rendering Farm",
      text: "Our render farm technology offers high-quality renders that are 10X faster than the average speed.  Creators can now render their large project files at our studio.",
    },
    {
      name: "Content Development",
      text: "We tell relatable and edutaining stories that are carefully crafted to drive community engagement in the media space.",
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
      <div className="mx-1 h-[150px] absolute top-20 left-7 hidden lg:block ">
        <TrackerOutter isTwo={isTwo} />
        <TrackerInner />
      </div>
      <div className="2xl:w-[1440px] m-auto" ref={myRefTwo}>
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
              We create <br /> content focused:
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


const TrackerOutter = styled.div<{ isTwo: boolean }>`
   width: 5px;
   height: ${({ isTwo }) => isTwo ? '100%' : '0%'};
   background: #FF6661;
   border-radius: 8px;
   z-index: 2;
   position: absolute;
   top: 0;
   left: -1px;
   transition: .8s ease-in height;
`
const TrackerInner = styled.div`
   width: 1.5px;
   height: 95%;
   background: #FCD1CA;
   border-radius: 8px;
   position: relative;
   z-index: 1;
   margin-top: 2px;
   margin-left: .8px;
`
export default CreateSection;
