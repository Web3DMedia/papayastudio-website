import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
  imgs: String,
}

const LearnWithPapayaContainer = styled.div`
overflow: hidden;
width:100%;
background: var(--FooterBg) url(/assets/footer-bg.jpeg);
background-blend-mode: screen;
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
    width:40%;
        @media (max-width: 1024px) {
        font-size: 36px;
        line-height: 111%;
        }
        @media (max-width: 600px) {
        font-size: 24px;
        width:80%;
        }
`

const ThirdText = styled.h3`
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    width:55%;
    @media (max-width: 1024px) {
    font-size: 20px; 
    }
    @media (max-width: 1024px) {
    font-size: 18px;
    width:90%;
    }
`
const FourthText = styled.h4`
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom:90px;
    }
`
const Aya = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    @media (max-width: 600px) {
    width: 209px;
    height:229px;
    bottom:-20px;
    }
`
const Pap = styled.div`
    position: absolute;
    right: 0;
    top: 123px;

    @media (max-width: 600px) {
    width: 205px;
    height:229px;
    top: 204px;
    }
`
const Vector = styled.div`
    opacity: 0.5;
    position: absolute;
    right: 0;
    top: -40px;
    @media (max-width: 1024px) {
        width: 428px;
        height:477px;
    }
    @media (max-width: 600px) {
        width: 215px;
        height:229px;
        top: 80px;
        right: 50px;
    }
`
const Im = styled.div`
    position:relative;
    margin-left:360px;
    z-index:2;
    @media (max-width: 1024px) {
        margin-left:145px;
    }
    @media (max-width: 800px) {
        margin-left:20px;
    }
`
const Span = styled.div<Props>`
    background: url(${({imgs}) => imgs ? `${imgs}` : ''});
    background-size: cover;
    margin-left: 34px;
    transition: background 0.2s;
    @media (max-width: 1024px) {
        margin-left:20px;
    }
    @media (max-width: 700px) {
        margin-left: 12px;
    }
    &:nth-child(1){
        width:122px;
        height:111px;
        background-size: 1050px;
        background-position-x: -40px;
        background-position-y: -225px;
    }
    &:nth-child(2){
        width:517px;
        height: 284px;
        background-size: 1050px;
        background-position-x: -185px;
        background-position-y: -50px;
    }
    &:nth-child(3){
        width:217px;
        height: 237px;
        background-size: 1050px;
        background-position-x: 310px;
        background-position-y: -95px;
    }

    @media (max-width: 1024px) {
        &:nth-child(1){
            width:88px;
            height:96px;
            background-size: 900px;
            background-position-x: -40px;
            background-position-y: -225px;
        }
        &:nth-child(2){
            width:421px;
            height: 231px;
            background-size: 900px;
            background-position-x: -175px;
        }
        &:nth-child(3){
            width:167px;
            height: 192px;
            background-size: 900px;
            background-position-x: 270px;
            background-position-y: -85px;
        }
    }
    @media (max-width: 600px) {
        &:nth-child(1){
            width:36px;
            height:39px;
            background-size: 400px;
            background-position-x: 0;
        }
        &:nth-child(2){
            width:170px;
            height: 93px;
            background-size: 325px;
            background-position-x: -45px;
            background-position-y: -15px;
        }
        &:nth-child(3){
            width:71px;
            height: 78px;
            background-size: 325px;
            background-position-x: -225px;
            background-position-y: -30px;
        }
    }
`
const SpanTwo = styled.div<Props>`
    background: url(${({imgs}) => imgs ? `${imgs}` : ''});
    background-size: cover;  
    margin-left: 34px;
    transition: background 0.2s;
    @media (max-width: 1024px) {
        margin-left:20px;
    }
    @media (max-width: 600px) {
        margin-left: 12px;
    }
    &:nth-child(1){
        margin-left: 0px;
        width:521px;
        height: 237px;    
        background-size: 1050px;
        background-repeat: no-repeat;
        background-position-x: 15px;
        background-position-y: -370px;
    }
    &:nth-child(2){
        width:517px;
        height: 285px;
        background-size: 1050px;
        background-repeat: no-repeat;
        background-position-x: -540px;
        background-position-y: -370px;
    }

    @media (max-width: 1024px) {
        &:nth-child(1){
            width:427px;
            height:193px;
            background-size: 900px;
            background-position-x: -30px;
            background-position-y: -320px;
        }
        &:nth-child(2){
            width:421px;
            height: 232px;
            background-size: 900px;
            background-position-x: -540px;
            background-position-y: -320px;
        }
    }

    @media (max-width: 600px) {
        &:nth-child(1){
        width:172px;
        height:18px;
        background-size: 500px;
        background-position-x: 30%;
        background-position-y: -290px;
        }
        &:nth-child(2){
        width:170px;
        height: 93px;
        background-size: 600px;
        background-position-x: -540px;
        background-position-y: -320px;
        }
    }
`
const LearnWithPapayaSection = () => {
    const [bg, setBg] = useState<Number>(1)
    
     useEffect(() => {
         const interval = setInterval(() => {
             setBg(bg => Number(bg) + Number(1) > 3 ? 1 : Number(bg) + Number(1))
     }, 5000)
     return () => {
       clearInterval(interval)
     }
}, [])
  return (
    <LearnWithPapayaContainer className='font-heading relative'>
        <FirstText className='pt-24 pl-6 md:pl-20 pb-12 text-primary3'>LEARN <br/>  WITH PAPAYAS</FirstText>

        <SecondText className='pl-6 md:pl-20 xl:pl-40 text-learnpapayatext'>Join Our Learning Academy</SecondText>

        <div className='pl-6 md:pl-20 xl:pl-56 pt-11'>
            <ThirdText className=' text-learnpapayatext2'>At Papaya Studios we are one of the best in the utmost ultimate universe if we are going to the summmer intern product good best inspire gorgueous</ThirdText>

            <FourthText className='flex items-center text-learnpapayatext pt-6'> Contact Us <img src='/assets/component-btn.png' alt='Linkedln' className='ml-2 w-6 h-6'/>  </FourthText>
        </div>

        <Im>
            <div className='flex items-end'>
                <Span imgs={`/assets/Learn${bg}.jpeg`}></Span>            
                <Span imgs={`/assets/Learn${bg}.jpeg`}></Span>            
                <Span imgs={`/assets/Learn${bg}.jpeg`}></Span>            
            </div>
            <div className='flex pt-3 md:pt-5 xl:pt-10'>
                <SpanTwo imgs={`/assets/Learn${bg}.jpeg`}></SpanTwo>            
                <SpanTwo imgs={`/assets/Learn${bg}.jpeg`}></SpanTwo>
            </div>            
        </Im>

            <Aya>
                <Image src="/assets/aya.png" width={307} height={148} alt="papaya" />
            </Aya>



            <Pap>
                <Image src="/assets/pap.png" width={307} height={148} alt="papaya" />
            </Pap>

            <Vector>
                <Image src="/assets/footer-vector.png" width={511} height={569} objectFit="contain" alt="Vector" />
            </Vector>
    </LearnWithPapayaContainer>
  )
}

export default LearnWithPapayaSection