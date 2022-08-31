import { BtnSpan, TextSpan } from "../../styles/HeroStyles";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Element, Link as BtnLink } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import BgTransfromation from "../atoms/BgTransfromation";

interface IProps {
  myRefOne: any;
}

const HeroSection = ({ myRefOne }: IProps) => {
  const [textNumber, setTextNumber] = useState(2);
  const [mascot, setMascot] = useState(1);

  useEffect(() => {
    if (textNumber <= 4) {
      const interval = setInterval(() => {
        setTextNumber(textNumber + 1);
      }, 5000);
      return () => clearInterval(interval);
    } else {
      setTextNumber(1);
    }
  }, [textNumber]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMascot((mascot) =>
        Number(mascot) + Number(1) > 2 ? 1 : Number(mascot) + Number(1)
      );
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const papayamascots = [
    {
      name: "Papito",
      image: `/assets/mascotspapaya2.png`,
      width: 570,
      height: 570
    },
    {
      name: "Papina",
      image: `/assets/mascotspapaya1.png`,
      width: 475,
      height: 475
    },

  ];
  return (
    <section
      id="WhoAreWe"
      className="relative w-full py-10 md:py-32 xl:py-28 4xl:pt-36 "
      ref={myRefOne}
    >

      <BgTransfromation></BgTransfromation>
      <div className="absolute left-6 top-40 hidden lg:block flex-col items-center">
        <h4 className="text-xs font-normal">01</h4>
        <div className="relative mx-1 h-[150px] my-2">
          <TrackerOutter textNumber={textNumber} />
          <TrackerInner />
        </div>
        <h4 className="text-xs font-normal">04</h4>
      </div>

      <div className="2xl:w-[1440px] m-auto">
        <p className="relative left-5 md:left-14 lg:left-20 top-96 sm:top-[450px] md:top-12 2xl:top-12 4xl:top-4 font-normal text-xs uppercase">
          Who We <br /> Are
        </p>
        <div className="relative w-full h-full max-w-[1440px] 4xl:max-w-[2000px] -ml-0 md:-ml-5 xl:-ml-0 mx-auto md:px-14 lg:px-20 4xl:px-10 4xl:py-0 flex flex-col-reverse md:flex-row">
          <div className="relative z-10 w-full sm:pt-6 pl-0 sm:pl-5 md:pt-24 4xl:pt-36 4xl:pl-24">
            <span className="flex items-center">
              {/*Large screen*/}
              {textNumber === 1 && (
                <Span className="hidden xl:pl-16 3xl:pl-0  sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-[500]">
                  We are a <TextSpan width="100%">forward</TextSpan>{" "}
                  <TextSpan width="85%">thinking</TextSpan>
                </Span>
              )}
              {textNumber === 2 && (
                <SpanTwo className="hidden xl:pl-16 3xl:pl-0 sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-[500]">
                  We are an <TextSpan width="100%">intuitive</TextSpan>{" "}
                  <TextSpan width="85%">design</TextSpan>
                </SpanTwo>
              )}
              {textNumber === 3 && (
                <SpanThree className="hidden xl:pl-16 3xl:pl-0 sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-[500]">
                  We curate <TextSpan width="100%">content</TextSpan>{" "}
                  <TextSpan width="85%">about</TextSpan>
                </SpanThree>
              )}
              {textNumber === 4 && (
                <SpanFour className="hidden xl:pl-16 3xl:pl-0 sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-[500]">
                  We create <TextSpan width="100%">animations</TextSpan>{" "}
                  <TextSpan width="85%">and</TextSpan>
                </SpanFour>
              )}
              {/*Mobile view*/}
              {textNumber === 1 && (
                <Span className="block sm:hidden leading-9  text-[32px] font-[500] ml-4">
                  We are a <TextSpan width="100%">forward</TextSpan>
                </Span>
              )}
              {textNumber === 2 && (
                <SpanTwo className="block sm:hidden leading-9 text-[32px] font-[500] ml-4">
                  We are an <TextSpan width="100%">intuitive</TextSpan>
                </SpanTwo>
              )}
              {textNumber === 3 && (
                <SpanThree className="block sm:hidden leading-9 text-[32px] font-[500] ml-4">
                  We curate <TextSpan width="100%">content</TextSpan>
                </SpanThree>
              )}
              {textNumber === 4 && (
                <SpanFour className="block sm:hidden leading-9 text-[32px] font-[500] ml-4">
                  We create <TextSpan width="100%">animations</TextSpan>
                </SpanFour>
              )}
            </span>
            <span className="block sm:hidden">
              {textNumber === 1 && (
                <Span className="block sm:hidden text-[32px] font-[500] ml-4">
                  <TextSpan width="85%">thinking</TextSpan> design
                </Span>
              )}
              <SpanTwo>
                {textNumber === 2 && (
                  <SpanTwo className="block sm:hidden text-[32px] font-[500] ml-4">
                    <TextSpan width="85%">design</TextSpan> studio for
                  </SpanTwo>
                )}
              </SpanTwo>
              {textNumber === 3 && (
                <SpanThree className="block sm:hidden text-[32px] font-[500] ml-4">
                  <TextSpan width="85%">about</TextSpan> design and
                </SpanThree>
              )}
              {textNumber === 4 && (
                <SpanFour className="block sm:hidden text-[32px] font-[500] ml-4">
                  <TextSpan width="85%">and</TextSpan> live action
                </SpanFour>
              )}
            </span>
            <span className="flex items-center">
              <Span className="relative ml-12 mr-2 sm:ml-0 sm:mr-2 md:mr-4 xl:ml-16 3xl:ml-0 w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:h-[60px] lg:w-[60px] lg:h-[80px]">
                <Image
                  src="/assets/star-vector.svg"
                  layout="fill"
                  alt="image"
                  loading="lazy"
                />
              </Span>
              {/*Mobile*/}
              {textNumber === 1 && (
                <Span className="block sm:hidden leading-9 text-[32px] font-[500]">
                  studio
                </Span>
              )}
              {textNumber === 2 && (
                <SpanTwo className="block sm:hidden leading-9 text-[32px] font-[500]">
                  brands &amp; creators
                </SpanTwo>
              )}
              {textNumber === 3 && (
                <SpanThree className="block sm:hidden leading-9 text-[32px] font-[500]">
                  technologies
                </SpanThree>
              )}
              {textNumber === 4 && (
                <SpanFour className="block sm:hidden leading-9 text-[32px] font-[500]">
                  video content
                </SpanFour>
              )}

              {/*Large screen*/}
              {textNumber === 1 && (
                <Span className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-[500]">
                  design studio
                </Span>
              )}
              {textNumber === 2 && (
                <SpanTwo className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-[500]">
                  studio for brands &amp; creators
                </SpanTwo>
              )}
              {textNumber === 3 && (
                <SpanThree className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-[500]">
                  design and technologies
                </SpanThree>
              )}
              {textNumber === 4 && (
                <SpanFour className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-[500]">
                  live-action video for creators
                </SpanFour>
              )}
            </span>
            <div className="pl-5 md:pl-14 lg:pl-20 xl:pl-32 4xl:pl-40 md:mt-[18px] sm:mt-[16px] xl:mt-[20px]">
              <p className="md:w-11/12 lg:max-w-[550px] xl:pl-16 3xl:pl-0 xl:max-w-[600px] 4xl:max-w-[780px] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal text-backboneText leading-[30px] px-2 pt-9 sm:pt-0">
                At Papayas studios we are at the forefront of digital content creation creating stories and experiences for every aspect of web2 and web3 designs.
              </p>
              {/*@ts-ignore */}
              <BtnLink
                to="productsSection"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="pb-[175px] pt-[15px] sm:pb-0 xl:pl-14 3xl:pl-0 flex items-center text-base xl:text-lg font-[500] mt-2   ml-2 w-[205px]"
              >
                <BtnSpan className="cursor-dark">Our Works</BtnSpan>
              </BtnLink>
            </div>
          </div>

          {papayamascots.map((papayamascot, index) => {
            return (index + 1) == mascot &&
              <div className="relative top-2 -right-4 sm:-right-14 md:absolute bg-transparent md:-top-20 lg:-top-2 md:-right-[270px] lg:-right-96 xl:-top-4 xl:-right-36 2xl:-right-48 4xl:-right-80 w-[400px] h-[400px] sm:h-[500px] sm:w-[500px] lg:h-[700px] lg:w-[600px] 4xl:w-[600px] 4xl:h-[700px]">
                <div className={index + 1 === 2 ? "xl:mt-10" : ""}>
                  <Image
                    key={index}
                    src={papayamascot.image}
                    width={papayamascot.width}
                    height={papayamascot.height}
                    loading="lazy"
                    alt={papayamascot.name}
                    objectFit="contain"
                    objectPosition="top"
                  />
                </div>
              </div>
          })}

        </div>
      </div>
    </section>
  );
};

const TrackerOutter = styled.div<{ textNumber: number }>`
  width: 5px;
  height: ${({ textNumber }) =>
    textNumber === 1
      ? "25%"
      : textNumber === 2
        ? "50%"
        : textNumber === 3
          ? "75%"
          : textNumber === 4
            ? "100%"
            : "25%"};
  background: #ff6661;
  border-radius: 8px;
  z-index: 2;
  position: absolute;
  top: 0;
  left: -1px;
  transition: 0.8s ease-in height;
`;
const TrackerInner = styled.div`
  width: 1.5px;
  height: 100%;
  background: #fcd1ca;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  margin-top: 2px;
  margin-left: 0.8px;
`;

const textTransition = keyframes`
0% {
   opacity: 0;
   transform:translateY(0px);
   transition: opacity 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
100% {
   transform:translateY(0px);
   transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
`;
const Span = styled.span`
  animation: ${textTransition} linear;
  animation-iteration-count: 1;
  animation-delay: 0s;
  animation-duration: 1s;
`;
const SpanTwo = styled.span`
  animation: ${textTransition} linear;
  animation-iteration-count: 1;
  animation-delay: 0s;
  animation-duration: 1s;
`;
const SpanThree = styled.span`
  animation: ${textTransition} linear;
  animation-iteration-count: 1;
  animation-delay: 0s;
  animation-duration: 1s;
`;
const SpanFour = styled.span`
  animation: ${textTransition} linear;
  animation-iteration-count: 1;
  animation-delay: 0s;
  animation-duration: 1s;
`;
const interChangeOne = keyframes`
  0% {
    transform: translateX(50%);
  }

  25% {
    transform: translateX(100%);
  }

  50% {
    transform: translateX(50%);
  }

  75% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(50%);
  }
`

const interChangeTwo = keyframes`
  0% {
    transform: translateX(-50%);
  }

  25% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(-50%);
  }

  75% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
`
const BgTransformationOne = styled.div`
   width: 100%;
   height: 100%;
   z-index: -1;
   position: absolute;
   top: 0;
   left: 0;
   display: flex;
`

const BgTransformationOneLeft = styled.div`
     height: 100%;
   width: 100%;
   background-image: url('/assets/orang-hero-section-min.png');
   background-position: left center;
   background-repeat: no-repeat;
   background-size: cover;
   filter: blur(172px);
   animation: ${interChangeOne} 4s ease-in-out infinite;
   border-radius: 70% 68% 48% 48% / 28% 28% 72% 72%;
`

const BgTransformationOneRight = styled.div`
    height: 100%;
   width: 100%;
   background-image: url('/assets/blue-hero-section-min.png');
   background-position: right center;
   background-repeat: no-repeat;
   background-size: cover;
   filter: blur(56px);
   animation: ${interChangeTwo} 4s ease-in-out infinite;
`
export default HeroSection;
