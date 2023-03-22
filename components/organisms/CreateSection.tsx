import ActivityCard from "../molecules/ActivityCard";
import styled from "styled-components";
import BgTransfromation from "../atoms/BgTransfromation";


interface IProps {
  myRefTwo: any
  isTwo: boolean
}


const CreateSection = ({ myRefTwo, isTwo }: IProps) => {

  const activityData = [
    {
      name: "Video Production",
      text: "Elevate your brand with our expert video production services. Whether you need a promotional video, a product demo, corporate training video, commercials to ads . With state-of-the-art equipment and a passion for storytelling, we will bring your vision to life.",
    },
    {
      name: "Studio Rentals",
      text: "Create captivating content in our state-of-the-art studio rentals. Whether you're hosting a talk show, recording a podcast, or producing any other type of media, our versatile spaces are designed to meet your needs.",
    },
    {
      name: "Animations",
      text: " Bring your ideas to life with our professional animation services. Our team of skilled animators specialize in 2D and 3D animation, offering unparalleled creativity and attention to detail. Let us help you tell your story through stunning visuals.",
    },
    {
      name: "Motion Design",
      text: "We create captivating animations that bring your brand to life. From explainer videos to animated logos, our expert motion design services will help you stand out in a competitive market. Contact us to see how we can elevate your brand.",
    },
    {
      name: "Event Coverage",
      text: "Capture the essence of your event with our professional coverage services. Whether it's a corporate conference or training, we provide high-quality coverage that captures the atmosphere and excitement of the occasion.",
    },

    {
      name: "Branding",
      text: "Having a purposeful brand is a game-changer for your company, a brand that aligns with your values and attracts your dream clients. Our studio offers branding deals and we strive to make your brand stand out.",
    },
  ];
  return (
    <section
      className="relative w-full py-28 md:py-32  xl:py-48 4xl:pt-36"
      id="WhatWeDo"

    >
      <BgTransfromation></BgTransfromation>
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
              className=" text-[24px] leading-tight md:text-[32px] lg:text-[36px] xl:text-[48px] font-[500] pl-5 md:pl-14 lg:pl-0 md:pt-12 xl:pt-0"
              data-aos="fade-up"
            >
              Our services include:
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
