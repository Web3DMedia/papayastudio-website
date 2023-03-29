import { useRouter } from 'next/router'
import { useState } from 'react';

import Navbar from "../../components/molecules/Navbar";
import Menubar from "../../components/molecules/Menubar";
import Footer from "../../components/organisms/Footer";
import SectionSeperator from "../../components/molecules/SectionSeperator";

import MetaTag from '../../components/atoms/MetaTag'
import styled from 'styled-components';
import BgTransfromation from '../../components/atoms/BgTransfromation';
import PageIndicator from '../../components/molecules/PageIndicator';

const CaseStudy = () => {
    const router = useRouter()
    const { id } = router.query
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const isTwo = false
    return (
        <div>
            post: {id}
            <div>

                <MetaTag title='Our Works' />
                <main className="w-full relative overflow-hidden">
                    <PageIndicator />
                    {/*@ts-ignore */}
                    <Navbar setIsMenuOpen={setIsMenuOpen} isThree={true} />
                    {/*@ts-ignore */}
                    <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isThree={true} />
                    <BgTransfromation></BgTransfromation>
                    <div className="absolute left-6 top-40 hidden lg:block flex-col items-center">
                        <h4 className="text-xs font-normal">01</h4>
                        <div className="relative mx-1 h-[150px] my-2">
                            <TrackerOutter isTwo={isTwo} />
                            <TrackerInner />
                        </div>
                        <h4 className="text-xs font-normal">04</h4>
                    </div>
                    <div className="pt-[112px] pb-[164px] 2xl:w-[1440px] m-auto">
                        <div className="pt-[74px] sm:mt-[144px] relative w-full h-full mx-auto md:px-0 lg:px-20 xl:px-40 4xl:py-20">
                            <p
                                className=" absolute left-5 md:left-14 -top-[20px] sm:-top-[60px] lg:left-20 xl:left-[80px] md:-top-[50px] xl:-top-[115px] 4xl:-top-16 4xl:left-20 font-normal text-xs uppercase"
                                data-aos="fade-up"
                            >
                                CASE STUDY
                            </p>


                            <div className='flex justify-between items-center mb-[50px]'>
                                <h1 className='text-backboneText w-[100%] sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[72px] font-[500]'>eGator</h1>
                                <p className='w-[95%] text-backboneText1 sm:text-[18px] leading-[27px] font-[400]'>Our render farm technology offers high-quality renders that are 10X faster than the average speed. web3 creators can now render their large project files at our studio.</p>
                            </div>

                            <div className='flex justify-between'>
                                <div className=''>
                                    <h1 className='text-backboneText text-[20px] font-[500] pb-[12px]'>Project type</h1>
                                    <p className='text-backboneText1 text-[18px] font-[400]'>Logo Design, Animation and Mobile Design</p>
                                </div>
                                <div>
                                    <h1 className='text-backboneText text-[20px] font-[500] pb-[12px]' >Date</h1>
                                    <p className='text-backboneText1  text-[18px] font-[400]'>September 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default CaseStudy

const TrackerOutter = styled.div<{ isTwo: boolean }>`
   width: 5px;
   height: ${({ isTwo }) => isTwo ? '100%' : '0%'};
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