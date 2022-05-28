import {TextDiv, BtnSpan, TextSpan} from '../../styles/HeroStyles'
import Image from 'next/image'
import {MdKeyboardArrowRight} from 'react-icons/md'

const HeroSection = () => {
   return (
      <div className="relative w-full h-full md:min-h-screen py-10 md:py-32 xl:py-28 4xl:pt-36 font-body">
         <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft"/>
            <div className="bgTransformationOneRight"/>
         </div>
         <div className="relative w-full h-full max-w-[1440px] 4xl:max-w-[2000px] mx-auto sm:px-20 4xl:px-10 4xl:py-20 flex flex-col-reverse md:flex-row">
            <div className="relative z-10 w-full sm:pt-6 md:pt-24 lg:pt-28 4xl:pt-36 4xl:pl-24">
               <p className="absolute -top-20 left-4 sm:-top-14 sm:-left-16 md:left-0 md:top-4 lg:-left-0 xl:-left-[80px] lg:top-[20px] xl:top-[30px]  3xl:left-0 4xl:-left-[150px] 4xl:top-14 font-normal text-xs uppercase">
                  Who We <br/> Are
               </p>
               <span className='flex items-center'>
                  <h2 className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[64px] xl:text-[72px] 4xl:text-[80px] font-bold">
                     We are a <TextSpan width="100%">forward</TextSpan> <TextSpan width="85%">thinking</TextSpan> 
                  </h2>
                  <h2  className="block sm:hidden text-[32px] font-bold ml-4">
                     We are a <TextSpan width="100%">forward</TextSpan>
                  </h2>
                  <span className="relative sm:ml-2 xl:ml-4 4xl:ml-8 lg:pt-3 w-[20px] h-[25px] sm:w-[25px] sm:h-[30px] md:h-[40px] lg:w-[25px] lg:h-[80px]">
                     <Image src='/assets/wave-vector.svg' layout='fill' alt="image" />
                  </span>
               </span>
               <span className="block sm:hidden">
                  <h3 className="block sm:hidden text-[32px] font-bold ml-4">
                     <TextSpan width="85%">thinking</TextSpan> blockchain
                  </h3>
               </span>
               <span className='flex items-center'>
                  <span className="relative ml-24 sm:ml-0 sm:mr-2 md:mr-4 w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:h-[60px] lg:w-[60px] lg:h-[80px]">
                     <Image src='/assets/star-vector.svg' layout='fill' alt="image" />
                  </span>
                  <h3 className="block sm:hidden text-[32px] font-bold">
                     design studio
                  </h3>
                  <h3 className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[64px] xl:text-[72px] 4xl:text-[80px] font-bold">
                     blockchain design studio
                  </h3>
               </span>
               <div className="pl-4 sm:pl-0 lg:pl-32 4xl:pl-40 md:mt-[20px] sm:mt-[18px] xl:mt-[40px]">
                  <p className="lg:max-w-[600px] xl:max-w-[700px] 4xl:max-w-[780px] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal leading-[30px] px-2">
                     At Papaya Studios we are one of the best in the utmost ultimate universe if we are going to the summmer intern product good best inspire gorgueous 
                  </p>
                  <button className="flex items-center text-lg font-bold sm:mt-3 lg:mt-3 xl:mt-5">
                     Our Products <BtnSpan><MdKeyboardArrowRight/></BtnSpan>
                  </button>
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
      </div>
   )
}

export default HeroSection