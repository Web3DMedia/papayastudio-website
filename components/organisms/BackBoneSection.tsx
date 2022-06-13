/* eslint-disable @next/next/no-img-element */

import React from 'react'
import styled, { keyframes} from 'styled-components'


import SectionHeader from '../atoms/SectionHeader'
import data from '../molecules/BackBone'
import SectionSeperator from '../molecules/SectionSeperator'
import Slider from '../molecules/Slider'

const Div = styled.div`

`
const SecondText = styled.h2`
font-weight: 600;
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
const Person = styled.div`
::-webkit-scrollbar {
  width: 0;}
`
const ImageContainer = styled.div`
background: #FFF5F3;
border: 0.5px solid #FCD1CA;
border-radius: 18px;
padding: 11px;
width:270px;
@media (max-width: 1024px) {
width: 230px;
padding: 10px;
}
`
const PartnerContainer = styled.div`
<<<<<<< HEAD
&::-webkit-scrollbar {
 display: none;}
=======
::-webkit-scrollbar {
  width: 0;
  display:none;}
   -ms-overflow-style: none;
  scrollbar-width: none;
>>>>>>> 77188e9b50f0bd030aa3a65c64aa2e36232d6950
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
const BackBoneSection = () => {
  return (
    <Div className='relative'>
        <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft"/>
            <div className="bgTransformationOneRight"/>
        </div>
        <div className="absolute top-20 left-7 w-[2px] hidden lg:block h-40 bg-[#FCD1CA]"/>

        <SectionHeader>THE <br/>BACKBONE</SectionHeader>

        <SecondText className='pl-6 md:pl-20 xl:pl-40 text-backboneText'>Meet The Super Heroes Shaping The Web3 & Blockchain Industry</SecondText>

        <Person className='flex pt-12 xl:pt-20 pl-6 md:pl-20 xl:pl-40 overflow-x-scroll pb-24'>
          {data.map(person => {
            return (
              <div key={person.id} className='mr-6'>
                
                <ImageContainer>
                  <img src={person.image} alt={person.name} className="rounded-2xl" />
                </ImageContainer>

                <ThirdText className='text-backboneText1 pt-3'>{person.name}</ThirdText> 

                <FourthText className='text-backboneText flex items-center pt-1'> <img src='/assets/linkedln.png' alt='Linkedln' className='mr-2 w-4 h-4'/>  Linkedln <span className='ml-2'>&#8594;</span> </FourthText>   

              </div>
            )
          })}
        </Person>
        

        <SectionSeperator></SectionSeperator>
        
        <div className='text-center pt-9 pb-32 text-backboneText'>
          <h1 className='pb-9'>OUR PARTNERS</h1>

            <PartnerContainer className='hidden sm:flex items-center md:justify-center overflow-x-scroll px-4 md:px-0'>
                <Img src='/assets/polygon.png' alt="polygon"  />
              
                <Img src='/assets/polygon-studios.png' alt="polygon"  />

                <Img src='/assets/polygon.png' alt="polygon"  />


                <Img src='/assets/polygon-studios.png' alt="polygon"  />


                <Img src='/assets/polygon.png' alt="polygon"  />


                <Img src='/assets/polygon-studios.png' alt="polygon"  />

              
            </PartnerContainer>

            <Slider></Slider>
        </div>
    </Div>
  )
}

export default BackBoneSection