import { BtnSpan, TextSpan} from '../../styles/HeroStyles'
import Image from 'next/image'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Element,Link as BtnLink} from 'react-scroll'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import TextTransition, { presets } from "react-text-transition";

const HeroSection = () => {
   const [textNumber, setTextNumber] = useState(1)
   const [index, setIndex] = useState(0);

   const firstWebTexts = [
      `We are a forward thinking`,
      `We are an intuitive design`,
      `We curate creative web3`,
      `We create stylized animations`
   ]

   const secondWebTexts = [
      'blockchain web3 design studio',
      'studio for web3 content',
      'and blockchain content',
      '& live action video content'
   ]

   const firstMobileTexts = [
      `We are a forward`,
      `We are an intuitive`,
      `We curate creative`,
      `We create stylized`,
   ]

   const secondMobileTexts = [
      `thinking blockchain`,
      `design studio`,
      `web3 and blockchain`,
      `animations & live action`,
   ]

   const thirdMobileTexts = [
      `design studio`,
      `for web3 content`,
      `content`,
      `video content`
   ]


   useEffect(() => {
      if(textNumber <= 4){
         const interval = setInterval(() => {
            setTextNumber(textNumber + 1)
         }, 5000)
         return () => clearInterval(interval)
      } else {
         setTextNumber(1)
      }
   },[textNumber])

   useEffect(() => {
      const intervalId = setInterval(() =>
         setIndex(index => index + 1),
         5000 // every 5 seconds
      );
      return () => clearTimeout(intervalId);
   }, []);

   return (
      <Element name="whoSection" className="relative w-full h-full md:min-h-screen py-10 md:py-32 xl:py-28 4xl:pt-36 ">
         <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft"/>
            <div className="bgTransformationOneRight"/>
         </div>
         <div className="absolute left-6 top-40 hidden lg:block flex-col items-center">
            <h4 className="text-xs font-normal">01</h4>
            <div className="relative mx-1 h-[150px] my-2">
               <TrackerOutter textNumber={textNumber}/>
               <TrackerInner/>
            </div>
            <h4 className="text-xs font-normal">04</h4>
         </div>
         <p className="absolute left-5 md:left-20 top-[380px] md:top-32 2xl:top-36 4xl:left-[85px] 5xl:left-[80px] 4xl:top-48 font-normal text-xs uppercase">
            Who We <br/> Are
         </p>
         <div className="relative w-full h-full max-w-[1440px] 4xl:max-w-[2000px] mx-auto sm:px-20 4xl:px-10 4xl:py-20 flex flex-col-reverse md:flex-row">
            <div className="relative z-10 w-full sm:pt-6 md:pt-24 lg:pt-28 4xl:pt-36 4xl:pl-24">
               {/*Numerator text*/}
               <div className="flex items-center">
                  <h1 className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-bold">
                     <TextTransition springConfig={presets.gentle}>
                        {firstWebTexts[index % firstWebTexts.length]}
                     </TextTransition>
                  </h1>
                  <h2  className="block sm:hidden text-[24px] font-bold ml-4">
                     <TextTransition springConfig={presets.gentle}>
                        {firstMobileTexts[index % firstMobileTexts.length]}
                     </TextTransition>
                  </h2>
                  <span className="relative sm:ml-2 xl:ml-1 4xl:ml-8 lg:pt-3 w-[20px] h-[25px] sm:w-[25px] sm:h-[30px] md:h-[40px] lg:w-[25px] lg:h-[80px]">
                     <Image src='/assets/wave-vector.svg' layout='fill' alt="image" />
                  </span>
               </div>
               {/*Second mobile text*/}
               <div className="flex items-center">
                  <h2  className="block sm:hidden text-[24px] font-bold ml-4">
                     <TextTransition springConfig={presets.gentle}>
                        {secondMobileTexts[index % firstMobileTexts.length]}
                     </TextTransition>
                  </h2>
               </div>
               {/*Denomitaor text*/}
               <div className="flex items-center">
                  <span className="relative ml-20 sm:ml-0 sm:mr-2 md:mr-4 w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:h-[60px] lg:w-[60px] lg:h-[80px]">
                     <Image src='/assets/star-vector.svg' layout='fill' alt="image" />
                  </span>
                  <h1 className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-bold">
                     <TextTransition springConfig={presets.wobbly}>
                        {secondWebTexts[index % secondWebTexts.length]}
                     </TextTransition>
                  </h1>
                  <h2  className="block sm:hidden text-[24px] font-bold ml-4">
                     <TextTransition springConfig={presets.gentle}>
                        {thirdMobileTexts[index % firstMobileTexts.length]}
                     </TextTransition>
                  </h2>
               </div>

               <div className="pl-4 sm:pl-0 lg:pl-32 4xl:pl-40 md:mt-[20px] sm:mt-[18px] xl:mt-[40px]">
                  <p className="lg:max-w-[600px] xl:max-w-[700px] 4xl:max-w-[780px] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal leading-[30px] px-2">
                     At Papaya Studios we are one of the best in the utmost ultimate universe if we are going to the summmer intern product good best inspire gorgueous  
                  </p>
                  <BtnLink to="productsSection" spy={true} smooth={true} offset={50} duration={500} className="flex items-center text-base xl:text-lg font-bold sm:mt-3 lg:mt-3 xl:mt-5 cursor-pointer ml-2">
                     Our Products <BtnSpan><MdKeyboardArrowRight/></BtnSpan>
                  </BtnLink>
               </div>
            </div>
            <div
               className="relative top-2 -right-32 sm:-right-14 md:absolute bg-transparent md:-top-20 lg:-top-16 md:-right-[230px] lg:-right-[350px] xl:-top-10 xl:-right-20 w-[400px] h-[400px] sm:h-[500px] sm:w-[500px] lg:h-[650px] lg:w-[700px] 4xl:w-[900px] 4xl:h-[1000px]">
                  <Image
                     src='/assets/hero-mascot.png'
                     layout='fill'
                     alt="mascot image"
                     objectFit='contain'
                     objectPosition="top"
                  />
               </div>
         </div>
      </Element>
   )
}

const TrackerOutter = styled.div<{textNumber: number}>`
   width: 5px;
   height: ${({textNumber}) => textNumber === 1 ? '25%' : textNumber === 2 ? '50%' : textNumber === 3 ? '75%' : textNumber === 4 ? '100%' : '25%'};
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
   height: 100%;
   background: #FCD1CA;
   border-radius: 8px;
   position: relative;
   z-index: 1;
   margin-top: 2px;
   margin-left: .8px;
`
export default HeroSection