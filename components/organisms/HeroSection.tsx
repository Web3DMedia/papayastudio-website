import {TextDiv, BtnSpan, TextSpan} from '../../styles/HeroStyles'
import Image from 'next/image'
import {MdKeyboardArrowRight} from 'react-icons/md'

const HeroSection = () => {
   return (
      <div className="relative min-h-screen pt-[85px]">
         <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft"/>
            <div className="bgTransformationOneRight"/>
         </div>
         <div className='w-full h-full xl:px-[150px] 3xl:px-[200px] 4xl:px-[250px] mx-auto flex flex-row'>

            <div className='relative lg:w-[80%] lg:ml-32 xl:ml-0 xl:w-[70%] h-full'>
               <TextDiv className="relative lg:pt-40 md:pt-24 md:pl-10 lg:pl-5">
                  <div className="absolute lg:top-[80px] xl:top-[70px] lg:-left-10 xl:-left-[60px] max-w-[60px] text-xs font-normal">
                     <p>WHO WE ARE</p>
                  </div>
                  <div className='flex'>
                     <h3 className="relative">
                        We are a <TextSpan width="100%">forward</TextSpan> <TextSpan width="85%">thinking</TextSpan>
                     </h3>
                     <span className="lg:ml-2 xl:ml-4">
                        <Image src='/assets/wave-vector.svg' width={25} height={80} alt="image" />
                     </span>
                  </div>
                  <div className='flex'>
                     <span className="mr-4">
                        <Image src='/assets/star-vector.svg' width={60} height={80} alt="image" />
                     </span>

                     <h3 className="relative ">
                        blockchain design studio
                     </h3>
                  </div>
                  <div className='lg:mt-5 xl:mt-10 ml-28'>
                     <p className="max-w-3xl break-words font-normal lg:text-xl xl:text-[22px] 3xl:text-[24px]">
                        At Papaya Studios we are one of the best in the utmost ultimate universe if we are going to the summmer intern product good best inspire gorgueous 
                     </p>
                     <button className="flex items-center text-lg font-bold lg:mt-3 xl:mt-5">
                        Our products <BtnSpan><MdKeyboardArrowRight/></BtnSpan>
                     </button>
                  </div>
               </TextDiv>
            </div>
            <div className="absolute bg-transparent top-4 lg:top-10 md:-right-[230px] lg:-right-[350px] xl:right-0 sm:h-[400px] sm:w-[500px] lg:h-[650px] lg:w-[700px]">
               <Image
                  src='/assets/hero-mascot.png'
                  layout='fill'
                  alt="mascourt image"
                  objectFit='contain'
               />
            </div>
         </div>
      </div>
   )
}

export default HeroSection