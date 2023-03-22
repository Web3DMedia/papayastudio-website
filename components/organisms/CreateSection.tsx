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
      name: "Animations",
      text: "Are you in need of a high-quality 2D or 3D design and animation service? Look no further! Our team of expert designers and animators will bring your ideas to life with stunning visuals and animations that will captivate your audience.",
    },
    {
      name: "Studio Rentals",
      text: "Our design studio facilities in Lagos provide rentals and creative production globally, and we are ready to take up your next big project mainstream. Trust us for effective media experiences.",
    },

    {
      name: "Motion Design",
      text: "We create captivating animations that bring your brand to life. From explainer videos to animated logos, our expert motion design services will help you stand out in a competitive market. Contact us to see how we can elevate your brand.",
    },
    {
      name: "Event Coverage",
      text: "Capture the essence of your event with our professional coverage services. Whether it's a corporate conference, a music festival or training, we provide high-quality coverage that captures the atmosphere and excitement of the occasion.",
    },
    {
      name: "Video Production",
      text: "We specialize in creating compelling visual content that captures your brand's essence and communicates your message effectively to your audience. Whether you need a promotional video, a product demo or a corporate training video, we have the expertise and experience to bring your vision to life.",
    },
    {
      name: "Branding",
      text: "Having a purposeful brand is a game-changer for your company, a brand that aligns with your values and attracts your dream clients. Our studio offers branding deals and we strive to make your brand stand out. Creative problem solution for brands and product.",
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
              Our <br /> services include:
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
