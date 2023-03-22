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
                    <div className="mx-1 h-[150px] absolute top-20 left-7 hidden lg:block ">
                        <TrackerOutter isTwo={isTwo} />
                        <TrackerInner />
                    </div>
                    <div className="pt-[112px] pb-[164px] 2xl:w-[1440px] m-auto">

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