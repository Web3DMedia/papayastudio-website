import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

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
}`
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
}
`
const FourthText = styled.h4`
font-weight: 400;
font-size: 18px;
line-height: 30px;
@media (max-width: 1024px) {
font-size: 14px;
}`
const Aya = styled.div`
position: absolute;
left: 0;
bottom: 0;
@media (max-width: 1024px) {
   
}
@media (max-width: 600px) {
width: 209px;
height:229px;
}
`
const Pap = styled.div`
position: absolute;
right: 0;
top: 123px;
@media (max-width: 1024px) {
   
}
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
margin-left:360px;
`
const Span = styled.div`
 background: url(/assets/Learn2.jpeg);
 background-size: cover;
 margin-left: 34px;
 &:nth-child(1){
width:100px;
 height:100px;
background-position-x: 0;
}
&:nth-child(2){
width:500px;
 height: 300px;
background-position-x: -75px;
}
&:nth-child(3){
width:100px;
height: 200px;
background-position-x: -150px;
}
`
const SpanTwo = styled.div`
 background: url(/assets/Learn2.jpeg);
 background-size: cover;  
  margin-left: 34px;
&:nth-child(1){
margin-left: 0px;
width:500px;
height: 210px;    
background-position-x: -225px;
}
&:nth-child(2){
width:500px;
height: 250px;
background-position-x: -300px;
}
`
const LearnWithPapayaSection = () => {
  return (
    <LearnWithPapayaContainer className='font-heading relative'>
        <FirstText className='pt-24 pl-6 md:pl-20 pb-12 text-primary3'>LEARN <br/>  WITH PAPAYAS</FirstText>

        <SecondText className='pl-6 md:pl-20 xl:pl-40 text-learnpapayatext'>Join Our Learning Academy</SecondText>

        <div className='pl-56 pt-11'>
            <ThirdText className=' text-learnpapayatext2'>At Papaya Studios we are one of the best in the utmost ultimate universe if we are going to the summmer intern product good best inspire gorgueous</ThirdText>

            <FourthText className='flex items-center text-learnpapayatext pt-6'> Contact Us <img src='/assets/component-btn.png' alt='Linkedln' className='ml-2 w-6 h-6'/>  </FourthText>
        </div>

        <Im>
            <div className='flex items-end'>
                <Span></Span>            
                <Span></Span>            
                <Span></Span>            
            </div>
            <div className='flex pt-10'>
                <SpanTwo></SpanTwo>            
                <SpanTwo></SpanTwo>
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