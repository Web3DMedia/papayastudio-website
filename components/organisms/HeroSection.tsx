import { BtnSpan, TextSpan} from '../../styles/HeroStyles'
import Image from 'next/image'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Element,Link as BtnLink} from 'react-scroll'
import styled, { keyframes} from 'styled-components'
import {useState, useEffect} from 'react'

const HeroSection = () => {
   const [textNumber, setTextNumber] = useState(1)
   const [mascot, setMascot] = useState(1)

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
          const interval = setInterval(() => {
              setMascot(mascot => Number(mascot) + Number(1) > 2 ? 1 : Number(mascot) + Number(1))
      }, 5000)
      return () => {
        clearInterval(interval)
      }
}, [])

   return (
      <section id="WhoAreWe" className="relative w-full py-10 md:py-32 xl:py-28 4xl:pt-36 ">
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

         <div className='2xl:w-[1440px] m-auto'>
            <p className="relative left-5 md:left-14 lg:left-20 top-96 sm:top-[450px] md:top-12 2xl:top-12 4xl:top-4 font-normal text-xs uppercase">
            Who We <br/> Are
         </p>
         <div className="relative w-full h-full max-w-[1440px] 4xl:max-w-[2000px] mx-auto md:px-14 lg:px-20 4xl:px-10 4xl:py-0 flex flex-col-reverse md:flex-row">
            <div className="relative z-10 w-full sm:pt-6 pl-0 sm:pl-5 md:pt-24 4xl:pt-36 4xl:pl-24">
               
               <span className='flex items-center'>
                  {/*Large screen*/}
                  {
                     textNumber === 1 && (
                        <Span className="hidden xl:pl-16 3xl:pl-0  sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-bold">
                           We are a <TextSpan width="100%">forward</TextSpan> <TextSpan width="85%">thinking</TextSpan> 
                        </Span>
                     )
                  }
                  {
                      textNumber === 2 && (
                        <SpanTwo className="hidden xl:pl-16 3xl:pl-0 sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-bold">
                           We are an <TextSpan width="100%">intuitive</TextSpan> <TextSpan width="85%">design</TextSpan> 
                        </SpanTwo>
                     )
                  }
                  {
                     textNumber === 3 && (
                        <SpanThree className="hidden xl:pl-16 3xl:pl-0 sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-bold">
                           We curate <TextSpan width="100%">creative</TextSpan> <TextSpan width="85%">web3</TextSpan>  
                        </SpanThree>
                     )
                  }
                  {
                     textNumber === 4 && (
                        <SpanFour className="hidden xl:pl-16 3xl:pl-0 sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-bold">
                           We create <TextSpan width="100%">stylized</TextSpan> <TextSpan width="85%">animations</TextSpan>  
                        </SpanFour>
                     )
                  }
                  {/*Mobile view*/}
                  {
                     textNumber === 1 && (
                        <Span  className="block sm:hidden leading-9  text-[32px] font-bold ml-4">
                           We are a <TextSpan width="100%">forward</TextSpan>
                        </Span>
                     )
                  }
                  {
                     textNumber === 2 && (
                        <SpanTwo className="block sm:hidden leading-9 text-[32px] font-bold ml-4">
                           We are an <TextSpan width="100%">intuitive</TextSpan>
                        </SpanTwo>
                     )
                  }
                  {
                     textNumber === 3 && (
                        <SpanThree className="block sm:hidden leading-9 text-[32px] font-bold ml-4">
                           We curate <TextSpan width="100%">creative</TextSpan> 
                        </SpanThree>
                     )
                  }
                  {
                     textNumber === 4 && (
                        <SpanFour className="block sm:hidden leading-9 text-[32px] font-bold ml-4">
                           We create <TextSpan width="100%">stylized</TextSpan>  
                        </SpanFour>
                     )
                  }
                  <Span className="relative ml-2 sm:ml-4 xl:ml-4 4xl:ml-5 lg:pt-3 w-[20px] h-[25px] sm:w-[25px] sm:h-[30px] md:h-[40px] lg:w-[25px] lg:h-[80px]">
                     <Image src='/assets/wave-vector.svg' layout='fill' alt="image" />
                  </Span>
               </span>
               <span className="block sm:hidden">
                  {
                     textNumber === 1 && (
                        <Span className="block sm:hidden text-[32px] font-bold ml-4">
                           <TextSpan width="85%">thinking</TextSpan> web3 design
                        </Span>
                     )
                  }
                  <SpanTwo>
                     {
                     textNumber === 2 && (
                        <SpanTwo className="block sm:hidden text-[32px] font-bold ml-4">
                           <TextSpan width="85%">design</TextSpan> studio for 
                        </SpanTwo>
                     )
                  }
                  </SpanTwo>
                  {
                     textNumber === 3 && (
                        <SpanThree className="block sm:hidden text-[32px] font-bold ml-4">
                           <TextSpan width="85%">web3</TextSpan> and blockchain
                        </SpanThree>
                     )
                  }
                  {
                     textNumber === 4 && (
                        <SpanFour className="block sm:hidden text-[32px] font-bold ml-4">
                           <TextSpan width="85%">animations</TextSpan> &amp; live action

                        </SpanFour>
                     )
                  }
               </span>
               <span className='flex items-center'>
                  <Span className="relative ml-20 mr-2 sm:ml-0 sm:mr-2 md:mr-4 xl:ml-16 3xl:ml-0 w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:h-[60px] lg:w-[60px] lg:h-[80px]">
                     <Image src='/assets/star-vector.svg' layout='fill' alt="image" />
                  </Span>
                  {/*Mobile*/}
                  {
                     textNumber === 1 && (
                        <Span className="block sm:hidden leading-9 text-[32px] font-bold">
                            studio
                        </Span>
                     )
                  }
                  {
                     textNumber === 2 && (
                        <SpanTwo className="block sm:hidden leading-9 text-[32px] font-bold">
                           Web3D content
                        </SpanTwo>
                     )
                  }
                  {
                     textNumber === 3 && (
                        <SpanThree className="block sm:hidden leading-9 text-[32px] font-bold">
                            content
                        </SpanThree>
                     )
                  }
                  {
                     textNumber === 4 && (
                        <SpanFour className="block sm:hidden leading-9 text-[32px] font-bold">
                            video content
                        </SpanFour>
                     )
                  }

                  {/*Large screen*/}
                  {
                     textNumber === 1 && (
                        <Span className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-bold">
                           design studio
                        </Span>
                     )
                  }
                  {
                     textNumber === 2 && (
                        <SpanTwo className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-bold">
                           studio for Web3D content
                        </SpanTwo>
                     )
                  }
                  {
                     textNumber === 3 && (
                        <SpanThree className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-bold">
                           and blockchain content
                        </SpanThree>
                     )
                  }
                  {
                     textNumber === 4 && (
                        <SpanFour className="hidden sm:block sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[65px] 4xl:text-[80px] duration-500 ease-in font-bold">
                           &amp; live action video content
                        </SpanFour>
                     )
                  }
               </span>
               <div className="pt-10 pl-5 md:pl-14 lg:pl-20 xl:pl-32 4xl:pl-40 md:mt-[20px] sm:mt-[18px] xl:mt-[40px]">
                  <p className="md:w-11/12 lg:max-w-[600px] xl:pl-16 3xl:pl-0 xl:max-w-[700px] 4xl:max-w-[780px] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal text-backboneText leading-[30px] px-2">
                     At Papayas studios we are at the forefront of decentralized content creation, helping to simplify the complexities of Blockchain and emerging technologies  
                  </p>
                  <BtnLink to="productsSection" spy={true} smooth={true} offset={50} duration={500} className="pb-[175px] pt-[18px] sm:pb-0 xl:pl-14 3xl:pl-0 flex items-center text-base xl:text-lg font-bold sm:mt-3 lg:mt-3 xl:mt-5 cursor-pointer ml-2 w-[205px]">
                     Our Products <BtnSpan><MdKeyboardArrowRight/></BtnSpan>
                  </BtnLink>
               </div>
            </div>
            <div 
            className="relative top-2 right-2 sm:-right-14 md:absolute bg-transparent md:-top-20 lg:-top-28 md:-right-[230px] lg:-right-[410px] xl:-top-36 xl:-right-56 2xl:-right-40 4xl:-right-96 w-[400px] h-[400px] sm:h-[500px] sm:w-[500px] lg:h-[850px] lg:w-[800px] 4xl:w-[900px] 4xl:h-[1000px]">
               <Image
                  src={`/assets/mascots${mascot}.png`}
                  layout='fill'
                  alt="mascot image"
                  objectFit='contain'
                  objectPosition="top"
               />
            </div>
         </div>
         </div>
      </section>
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

const textTransition = keyframes`
0% {
   opacity: 0;
   transform:translateY(-30px);
   transition: opacity 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
}
50% {
   transform:translateY(15px);
   transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
100% {
   transform:translateY(0px);
   transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
`
const Span = styled.span`
   animation: ${textTransition} linear;
   animation-iteration-count: 1;
   animation-delay: 0s;
   animation-duration: 1s;
`
const SpanTwo = styled.span`
   animation:  ${textTransition} linear;
   animation-iteration-count: 1;
   animation-delay: 0s;
   animation-duration: 1s;
`
const SpanThree = styled.span`
   animation:  ${textTransition} linear;
   animation-iteration-count: 1;
   animation-delay: 0s;
   animation-duration: 1s;
`
const SpanFour = styled.span`
   animation:  ${textTransition} linear;
   animation-iteration-count: 1;
   animation-delay: 0s;
   animation-duration: 1s;
`
export default HeroSection