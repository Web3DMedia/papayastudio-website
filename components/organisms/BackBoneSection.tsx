/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import BgTransfromation from '../atoms/BgTransfromation'

import data from '../../data/BackBone'
import SectionSeperator from '../molecules/SectionSeperator'
import Slider from '../molecules/Slider'

const Div = styled.div`
`
const FirstText = styled.h1`
font-weight: 400;
font-size: 12px;
line-height: 130%;
`
const SecondText = styled.h2`
font-weight: 500;
font-size: 48px;
line-height: 111%;
letter-spacing: -0.03em;
width:65%;
@media (max-width: 1024px) {
font-size: 36px;
line-height: 111%;
width:80%;
}
@media (max-width: 600px) {
font-size: 24px;
width:90%;
}`
const ThirdText = styled.h3`
font-weight: 400;
font-size: 24px;
line-height: 160%;
@media (max-width: 1024px) {
font-size: 20px; 
}
@media (max-width: 1024px) {
font-size: 18px; 
}
`
const FourthText = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 160%;
@media (max-width: 1024px) {
font-size: 14px;
}`
const FifthText = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 160%;
width:max-content;
@media (max-width: 1024px) {
font-size: 14px;
}`
const Person = styled.div`
::-webkit-scrollbar {
  width: 0;}
`
const ImageContainer = styled.div`
background: #FFF5F3;
border: 0.5px solid #FCD1CA;
border-radius: 18px;
padding: 11px 11px 4px 11px;
width:270px;
@media (max-width: 1024px) {
width: 230px;
padding: 10px 10px 4px 10px ;
}
`
const PartnerContainer = styled.div`
&::-webkit-scrollbar {
 display: none;}
`
const Img = styled.img`
width:110px;
margin-left: 28px;
&:nth-child(1) {
    margin-left: 0px;
}
@media (max-width: 1024px) {
}
`
interface IProps {
  myRefFive: any
  isFive: boolean
}
const BackBoneSection = ({ myRefFive, isFive }: IProps) => {
  return (
    <Div className='relative' ref={myRefFive}>
      <BgTransfromation></BgTransfromation>
      <div className="mx-1 h-[150px] absolute top-24 left-7 hidden lg:block ">
        <TrackerOutter isFive={isFive} />
        <TrackerInner />
      </div>

      <div className='2xl:w-[1440px] m-auto'>
        <FirstText className='pt-24 pl-5 md:pl-14 lg:pl-20 pb-12 text-backboneText' > THE <br />  BACKBONE</FirstText>

        <SecondText className='pl-6 md:pl-20 xl:pl-40 text-backboneText' data-aos="fade-up">Meet The Super Heroes</SecondText>

        <Person className='flex pt-12 xl:pt-20 ml-[20px] md:ml-14 lg:ml-20 xl:pl-0 overflow-x-scroll pb-24 xl:ml-40' data-aos="fade-up">
          {data.map(person => {
            return (
              <div key={person.id} className='mr-6'>

                <ImageContainer>
                  <Image src={person.image} alt={person.name} width={270} height={270} className="rounded-2xl" draggable="false" loading="lazy" />
                </ImageContainer>


                <ThirdText className='text-black pt-3'>{person.name}</ThirdText>

                <FourthText className='text-backboneText1'>{person.title}</FourthText>
                <div className='w-[100px] xl:w-[110px]'>

                  {
                    person.id > 3 ? (
                      <FifthText className='text-backboneText w-[30px] flex items-center pt-1 opacity-30'> <img src='/assets/linkedln.png' alt='Linkedln' className='mr-2 w-4 h-4' />  Linkedin <span className='ml-2'>&#8594;</span> </FifthText>

                    ) : (<Link href={person.linkedin}>
                      <a target="_blank" className='cursor-light'>
                        <FifthText className='text-backboneText w-[30px] flex items-center pt-1 hover:text-primary1 hover:scale-110 hover:ml-[5px]'> <img src='/assets/linkedln.png' alt='Linkedln' className='mr-2 w-4 h-4' loading="lazy" />  Linkedin <span className='ml-2'>&#8594;</span> </FifthText>
                      </a>
                    </Link>)
                  }
                </div>
              </div>
            )
          })}
        </Person>
      </div>


      <SectionSeperator></SectionSeperator>

      <div className='text-center pt-9 pb-32 text-backboneText' data-aos="fade-up">
        <h1 className='pb-9'>OUR PARTNERS</h1>

        <PartnerContainer className='hidden sm:flex items-center md:justify-center overflow-x-scroll px-4 md:px-0'>
          <Img loading="lazy" src='/assets/polygon.png' alt="polygon" />

          <Img loading="lazy" src='/assets/polygon-studios.png' alt="polygon" />
        </PartnerContainer>

        <Slider></Slider>
      </div>
    </Div>
  )
}

const TrackerOutter = styled.div<{ isFive: boolean }>`
   width: 5px;
   height: ${({ isFive }) => isFive ? '100%' : '0%'};
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

export default BackBoneSection