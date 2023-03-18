import { useEffect, useState } from "react";
import Navbar from "../components/molecules/Navbar";
import Menubar from "../components/molecules/Menubar";
import Footer from "../components/organisms/Footer";
import MetaTag from "../components/atoms/MetaTag";
import SectionSeperator from "../components/molecules/SectionSeperator";
import Link from 'next/link'
import styled from "styled-components";
import Image from 'next/image'
import { bg } from "date-fns/locale";

const OurWorks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [img, setImg] = useState<Number>(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setImg((bg) => (Number(bg) + Number(1) > 3 ? 1 : Number(bg) + Number(1)));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [bg]);
    const products = [
        {
            cardH2: "Assets for Blocasset",
            cardP:
                "Hundreds of digital asset and designs created for Web3 designers and digital creators.",
            btnTxt: "View Work",
            cardImage: `/assets/bloccassets-asset.png`,
            Links: "https://blocasset.com/",
        },
        {
            cardH2: "DesignBant Show",
            cardP:
                "Highly interactive and engaging videos produced in-house for Papayas YouTube Channel.",
            btnTxt: "View Work",
            cardImage: "/assets/design-bant.jpeg",
            Links: "https://www.youtube.com/channel/UCKcRE2nLh_iN2yrfygPr_SA",
        },
        {
            cardH2: "Papito and Papina Mascot",
            cardP: "Our signature brand mascot for Papayas studio.",
            btnTxt: "View Work",
            cardImage: "/assets/papito-and-papina-new-two.jpeg",
            Links: "",
        },
        {
            cardH2: "Avatars",
            cardP: "Stunning custom-made avatars for days!",
            btnTxt: "View Work",
            cardImage: `/assets/backbone${img}1.jpeg`,
            Links: "",
        },
        {
            cardH2: "Blocasset Contributor Launch Video",
            cardP:
                "Super engaging explainer video created for Blocasset contributors launch.",
            btnTxt: "View Work",
            cardImage: "/assets/bloccasset-contributors.jpeg",
            Links: "",
        },
    ];
    return (
        <div>

            <MetaTag title='Our Works' />
            <main className="w-full relative overflow-hidden">
                {/*@ts-ignore */}
                <Navbar setIsMenuOpen={setIsMenuOpen} isThree={true} />
                {/*@ts-ignore */}
                <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isThree={true} />
                <div className="pt-32 2xl:w-[1440px] m-auto">
                    <SectionSeperator />
                    <p className="text-center pt-[14px] pb-[64px]">OUR WORKS</p>
                    <div className="w-[80%] grid sm:grid-cols-2 xl:grid-cols-3 m-auto gap-10">
                        {products?.map((product, index) => (
                            <CardDiv className="h-[475px] cursor-default relative" key={index}>
                                <div className="relative md:w-[300px] lg:w-[400px]  xl:w-[350px] h-[300px] max-w-[400px] 4xl:w-[350px] 4xl:max-w-[350px] overflow-hidden rounded-[24px]">
                                    <Image src={product.cardImage} layout="fill" objectFit='cover' alt="image" />
                                </div>
                                <div className="mt-[15px] ">
                                    <h2 className="font-[500] text-backboneText text-lg xl:text-2xl mb-[10px] leading-[160%]">{product.cardH2}</h2>
                                    <p className="break-words leading-[20px] font-normal text-backboneText1 w-[100%] lg:w-[90%] 4xl:text-[16px] mb-[10px]">{product.cardP}</p>
                                    {
                                        product.Links.length > 1 && <Link href={product.Links}>
                                            <a target="_blank" className="absolute bottom-0">
                                                <Button className="flex items-center text-backboneText cursor-light">
                                                    {product.btnTxt}<span className='ml-4'>&#8594;</span>
                                                </Button>
                                            </a>
                                        </Link>
                                    }
                                </div>
                            </CardDiv>))}
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default OurWorks

const CardDiv = styled.div`
`
const Button = styled.button`
  :hover {
    color: var(--PrimaryOne);
    transform:scale(1.1);
  }
`