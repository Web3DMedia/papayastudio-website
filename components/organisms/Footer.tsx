import styled from 'styled-components'
import Image from "next/image";

const FooterContainer = styled.div`
overflow: hidden;
width:100%;
background: var(--FooterBg) url(/assets/Rectangle.png);
`
const FirstText = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 52px;
padding: 21px 0 26px;
`
const SecondText = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 160%;
padding: 0 0 92px;
`
const ThirdText = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 20px;
z-index:2;
`
const Aya = styled.div`
position: absolute;
left: 0;
bottom: 0;
`
const Pap = styled.div`
position: absolute;
right: 0;
top: 123px;
`
const Vector = styled.div`
position: absolute;
right: 0;
top: -40px;
`
const Circle = styled.div`
margin: 0 18px;
width: 5px;
height: 5px;
background: #FF6661;
border-radius: 50%;
`
const Socials = styled.div`
font-style: normal;
Width: 10%;
font-weight: 700;
font-size: 24px;
line-height: 26px;
color: var(--FooterText3);
margin-left: 100px;
z-index:3;
`
const SocialContainer = styled.div`
display: flex;
`
const Footer = () => {
    return (
        <FooterContainer className='flex justify-between pl-24 relative'>

            <div className='pt-28'>
                <Image src="/assets/footer-logo.png" width={127} height={35} alt="papaya" objectFit='contain' />

                <FirstText className='text-footerText'>
                    Have an Idea?
                </FirstText>


                <SecondText className='text-footerText3 w-48'> Reach out to us <a href="mailto:info @papayas.com"></a>info@papayas.com</SecondText>


                <div className='flex items-center pb-7'>
                    <ThirdText className='text-footerText2'>© 2022 Web3D Media Inc. All rights reserved</ThirdText>
                    <Circle></Circle>
                    <ThirdText className='text-footerText3'>Legal</ThirdText>
                </div>

                <Aya>
                    <Image src="/assets/aya.png" width={307} height={148} alt="papaya" />
                </Aya>

            </div>


            <div className='pt-60 pr-20'>
                <SocialContainer className='pb-5'>
                    <Socials>Dribble</Socials>
                    <Socials>Behance</Socials>
                    <Socials>Youtube</Socials>
                    <Socials>Discord</Socials>
                </SocialContainer>
                <SocialContainer>
                    <Socials>Twitter</Socials>
                    <Socials>Instagram</Socials>
                    <Socials>Linkedln</Socials>
                    <Socials>Opensea</Socials>
                </SocialContainer>

                <Pap>
                    <Image src="/assets/pap.png" width={307} height={148} alt="papaya" />
                </Pap>
            </div>

            <Vector>
                <Image src="/assets/footer-bg-vector.png" width={511} height={569} objectFit="contain" alt="Vector" />
            </Vector>

        </FooterContainer >
    )
}

export default Footer