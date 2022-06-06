import styled from 'styled-components'
import Image from "next/image";
import Link from 'next/link';

const FooterContainer = styled.div`
    overflow: hidden;
    width:100%;
    background: var(--FooterBg) url(/assets/footer-bg.jpeg);
    background-blend-mode: screen;
`
const FirstText = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 52px;
    padding: 43px 0 32px;
    position: relative;
    z-index:2;
    @media (max-width: 1024px) {
        font-size: 36px;
        line-height: 39px;  
    }
`
const SecondText = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    padding: 0 0 92px;
    position:relative;
    z-index:2;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
    @media (max-width: 1024px) {
        padding: 0 0 48px;
    }
`
const ThirdText = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    z-index:2;
    @media (max-width: 1024px) {
        font-size: 16px;  
    }
`
const Aya = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;

    @media (max-width: 600px) {
    width: 209px;
    height:229px;
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
    opacity: 0.2;
    position: absolute;
    right: 0;
    top: 0px;
    @media (max-width: 1024px) {
        width: 428px;
        height:477px;
        right: 60px;
        top:-30px;
    }
    @media (max-width: 600px) {
        width: 215px;
        height:229px;
        top: 80px;
        right: 50px;
    }
`
const Mascot = styled.div`
    position: absolute;
    top: -220px;
    width:548px;
    transform: scaleX(-1);
    right: -10px;
    @media (max-width: 1024px) {
        top: -110px;
        width:316px;
    }
    @media (max-width: 600px) {
        width:195px;
        top: 80px;
    }
`
const Circle = styled.div`
    margin: 0 18px;
    width: 5px;
    height: 5px;
    background: var(--PrimaryOne);
    border-radius: 50%;
`
const Socials = styled.div`
    font-style: normal;
    width: 80px;
    font-weight: 500;
    font-size: 24px;
    text-align:left;
    line-height: 26px;
    color: var(--FooterText3);
    margin-left: 120px;
    z-index:2;
    &:nth-child(1) {
        margin-left: 0px;
    }
    &:nth-child(5) {
        margin-left: -40px;
    }
    @media (max-width: 1024px) {
        margin-left: 70px;
        font-size: 20px;
        width:40px;
    }
    @media (max-width: 800px) {
        width:40px;
    }
    @media (max-width: 600px) {
        margin-left: 0px;
        padding-bottom: 25px;
    }
`
const SocialContainer = styled.div`
    display: flex;

    @media (max-width: 600px) {
        flex-direction: column;
        width:130%;
    }
`
const Div = styled.div`

`
const Footer = () => {
    return (
        <div className='relative'>
            <FooterContainer className='px-6 xl:pl-24 xl:px-0 relative'>

                <div className='pt-16 xl:pt-28'>
                    <Image src="/assets/footer-logo.png" width={127} height={35} alt="papaya" objectFit='contain' />

                    <FirstText className='text-footerText'>
                        Have an Idea?
                    </FirstText>

                    <Div className='md:flex md:justify-between'>
                        <div>
                            <SecondText className='text-footerText3 w-48'> Reach out to us <a href="mailto:info @papayas.com"></a>info@papayas.com</SecondText>
                        </div>

                        <div className='flex justify-between md:block md:pr-12 xl:pr-32'>
                            <SocialContainer className='md:pb-5'>
                                <Socials>Dribble</Socials>
                                <Socials>Behance</Socials>
                                <Socials>Youtube</Socials>
                                <Socials>Discord</Socials>
                            </SocialContainer>
                            <SocialContainer>
                                <Socials>
                                    <Link href='https://twitter.com/studiopapayas'>
                                        <a target="_blank">Twitter</a>
                                    </Link>
                                </Socials>
                                <Socials>
                                    <Link href='https://www.instagram.com/studiopapayas/'>
                                        <a target='_blank'>Instagram</a>
                                    </Link>
                                </Socials>
                                <Socials>Linkedln</Socials>
                                <Socials>Opensea</Socials>
                                <Socials className='md:hidden flex items-center ml-2'> <Circle className='p-1'></Circle> Legal</Socials>
                            </SocialContainer>
                        </div>
                        
                    </Div>


                    <div className='flex items-center pb-7 pt-12 md:pt-0'>
                        <ThirdText className='text-footerText2'>© 2022 Web3D Media Inc. All rights reserved</ThirdText>
                        <div className='hidden md:flex md:items-center' >
                            <Circle></Circle>
                            <ThirdText className='text-footerText3'>Legal</ThirdText>
                        </div>
                    </div>

                    <Aya>
                        <Image src="/assets/aya.png" width={307} height={148} alt="papaya" />
                    </Aya>

                </div>



                <Pap>
                    <Image src="/assets/pap.png" width={307} height={148} alt="papaya" />
                </Pap>

                <Vector>
                    <Image src="/assets/footer-vector.png" width={511} height={569} objectFit="contain" alt="Vector" />
                </Vector>

            </FooterContainer >
            
            <Mascot>
                <Image src="/assets/footer-mascot.png" width={548} height={548} objectFit="contain" alt="papaya mascot" />
            </Mascot>
        </div>
    )
}

export default Footer