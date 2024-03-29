import React, { useState, useEffect, SetStateAction, Dispatch } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
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
@media (max-width: 850px) {
font-size: 36px;
line-height: 111%;
width:60%;
}
@media (max-width: 600px) {
font-size: 24px;
width:80%;
}`
const ThirdText = styled.h3`
font-weight: 400;
font-size: 24px;
line-height: 30px;
width:55%;
z-index:1;
position: relative;
@media (max-width: 1024px) {
font-size: 20px; 
}
@media (max-width: 1024px) {
font-size: 18px;
width:90%;
}
`
const FourthText = styled.button`
margin-top:24px;
font-weight: 700;
font-size: 14px;
width: 152px;
height: 44px;
line-height: 16px;
background:#FF6661;
border: 0.5px solid #FF9D8D;
border-radius: 10px;
@media (max-width: 1024px) {

}`
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
opacity: 0.3;
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
margin-left:460px;
z-index:2;
@media (max-width: 1024px) {
margin-left:275px;
}
@media (max-width: 850px) {
margin-left:110px;
}
`
const Span = styled.div<Props>`
background: url(${({ imgs }) => imgs ? `${imgs}` : ''});
background-size: cover;
margin-left: 34px;
transition: background 0.2s;
@media (max-width: 1024px) {
margin-left:20px;
}
@media (max-width: 800px) {
margin-left: 13px;
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
background-position-x: 350px;
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
background-position-y: -95px;
}

@media (max-width: 850px) {
&:nth-child(1){
width:88px;
height:96px;
background-size: 700px;
background-position-x: 0;
background-position-y: -15px;
}
&:nth-child(2){
width:421px;
height: 231px;
background-size: 750px;
background-position-x: -110px;
background-position-y: -15px;
}
&:nth-child(3){
width:167px;
height: 192px;
background-size: 750px;
background-position-x: 225px;
background-position-y: -55px;
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
@media (max-width: 400px) {
 &:nth-child(1){
width:36px;
 height:39px;
background-size: 400px;
background-position-x: 0;
}
&:nth-child(2){
width:170px;
height: 93px;
background-size: 300px;
background-position-x: -50px;
background-position-y: -10px;
}
&:nth-child(3){
width:71px;
height: 78px;
background-size: 300px;
background-position-x: -210px;
background-position-y: -27px;
}
`
const SpanTwo = styled.div<Props>`
background: url(${({ imgs }) => imgs ? `${imgs}` : ''});
background-size: cover;  
margin-left: 34px;
transition: background 0.2s;
@media (max-width: 1024px) {
margin-left:20px;
}
@media (max-width: 800px) {
margin-left: 13px;
}
&:nth-child(1){
margin-left: 0px;
width:521px;
height: 237px;    
background-size: 1050px;
background-repeat: no-repeat;
background-position-x: 0px;
background-position-y: -370px;
}
&:nth-child(2){
width:517px;
height: 285px;
background-size: 1050px;
background-repeat: no-repeat;
background-position-x: -470px;
background-position-y: -370px;
}

    @media (max-width: 1024px) {
        &:nth-child(1){
            width:427px;
            height:193px;
            background-size: 900px;
            background-position-x: -50px;
            background-position-y: -320px;
        }
        &:nth-child(2){
            width:421px;
            height: 232px;
            background-size: 800px;
            background-position-x: -370px;
            background-position-y: -270px;
        }
    }

@media (max-width: 850px) {
&:nth-child(1){
width:521px;
height: 237px;
background-size: 800px;
background-position-x: -0px;
background-position-y: -275px;
}
&:nth-child(2){
width:517px;
height: 285px;
background-size: 800px;
background-position-x: -380px;
background-position-y: -275px;
}

@media (max-width: 600px) {
&:nth-child(1){
width:175px;
height: 80px;
background-size: 325px;
background-position-x: 5px;
background-position-y: -125px;
}
&:nth-child(2){
width:175px;
height: 93px;
background-size: 325px;
background-position-x: -175px;
background-position-y: -125px;
}
@media (max-width: 400px) {
&:nth-child(1){
width:175px;
height: 80px;
background-size: 300px;
background-position-x: 5px;
background-position-y: -105px;
}
&:nth-child(2){
width:175px;
height: 93px;
background-size: 300px;
background-position-x: -130px;
background-position-y: -105px;
}
`
interface IProps {
    setIsModal: Dispatch<SetStateAction<boolean>>
    myRefFour: any
    isFour: boolean
}

const LearnWithPapayaSection = ({ setIsModal, myRefFour, isFour }: IProps) => {
    const [bg, setBg] = useState<Number>(4)

    useEffect(() => {
        const interval = setInterval(() => {
            setBg(bg => Number(bg) + Number(1) > 6 ? 4 : Number(bg) + Number(1))
        }, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const Modal = () => {
        document.body.style.overflow = "hidden";
        setIsModal(true)
    }
    return (
        <LearnWithPapayaContainer ref={myRefFour}>

            <div className='font-heading relative'>
                <div className="mx-1 h-[150px] absolute top-24 left-7 hidden lg:block ">
                    <TrackerOutter isFour={isFour} />
                    <TrackerInner />
                </div>
                <div className='2xl:w-[1440px] m-auto' data-aos="fade-right">
                    <FirstText className='pt-24 pl-5 md:pl-14 lg:pl-20 pb-12 text-primary3' >STUDIO</FirstText>

                    <SecondText className='pl-5 md:pl-14 lg:pl-20 xl:pl-40 text-learnpapayatext'>Book your Studio Session</SecondText>

                    <div className='pl-5 md:pl-14 lg:pl-20 xl:pl-56 pt-11'>
                        <ThirdText className=' text-learnpapayatext2 pb-5'>

                            We are dedicated to providing you with a space to unleash your creativity and bring your ideas to life.</ThirdText>

                        {/* <ThirdText className=' text-learnpapayatext2'>Ready to kickstart your career?</ThirdText> */}
                        {/* <FourthText className=' text-learnpapayatext cursor-dark mb-4' onClick={() => Modal()}>Join waitlist </FourthText> */}

                        <Link href="/book-a-session">
                            <FourthText className=' text-learnpapayatext cursor-dark mb-4'>Book a session</FourthText>
                        </Link>

                    </div>

                    <Im data-aos="fade-up">
                        <div className='flex items-end'>
                            <Span imgs={`/assets/learn${bg}.webp`}></Span>
                            <Span imgs={`/assets/learn${bg}.webp`}></Span>
                            <Span imgs={`/assets/learn${bg}.webp`}></Span>
                        </div>
                        <div className='flex pt-[13px] md:pt-[20px] xl:pt-[34px]'>
                            <SpanTwo imgs={`/assets/learn${bg}.webp`}></SpanTwo>
                            <SpanTwo imgs={`/assets/learn${bg}.webp`}></SpanTwo>
                        </div>
                    </Im>

                    <Aya>
                        <Image src="/assets/aya.png" width={307} height={148} alt="papaya" />
                    </Aya>

                    <Pap>
                        <Image src="/assets/papaya-text.png" width={307} height={148} alt="papaya" />
                    </Pap>

                    <Vector>
                        <Image src="/assets/footer-vector.png" width={511} height={569} objectFit="contain" alt="Vector" />
                    </Vector>


                </div>
            </div>
        </LearnWithPapayaContainer>
    )
}

const TrackerOutter = styled.div<{ isFour: boolean }>`
   width: 5px;
   height: ${({ isFour }) => isFour ? '100%' : '0%'};
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

export default LearnWithPapayaSection