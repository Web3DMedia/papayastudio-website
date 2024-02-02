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
            tags: ["3D Animation"],
            btnTxt: "View Work",
            cardImage: `/assets/bloccassets-asset.png`,
            Links: "https://blocasset.com/",
        },
        {
            cardH2: "DesignBant Show",
            tags: ["Video Production", "Podcast"],
            btnTxt: "View Work",
            cardImage: "/assets/design-bant.jpeg",
            Links: "https://www.youtube.com/channel/UCKcRE2nLh_iN2yrfygPr_SA",
        },
        {
            cardH2: "Papito and Papina Mascot",
            tags: ["3D", "Design"],
            btnTxt: "View Work",
            cardImage: "/assets/papito-and-papina-new-two.jpeg",
            Links: "",
        },
        {
            cardH2: "Avatars",
            tags: ["2D"],
            btnTxt: "View Work",
            cardImage: `/assets/backbone${img}1.jpeg`,
            Links: "",
        },
        {
            cardH2: "Blocasset Contributor Launch Video",
            tags: ["3D Animation"],
            btnTxt: "View Work",
            cardImage: "/assets/bloccasset-contributors.jpeg",
            Links: "",
        },
        {
            cardH2: "Egator Case Study",
            tags: ["Case Study"],
            btnTxt: "View Work",
            cardImage: "/assets/egator.png",
            Links: "https://www.behance.net/gallery/163575065/Egator"
        },
        {
            cardH2: "3D Icon Set",
            tags: ["3D Design", "Case Study"],
            btnTxt: "View Work",
            cardImage: "/assets/3DIcon.jpg",
            Links: "https://t.co/lHLbQnPYbl"
        },
        {
            cardH2: "Blocasset-Unblock your Ideas",
            tags: ["Video Production"],
            btnTxt: "View Work",
            cardImage: "/assets/Blocasset-Papayas-Website.jpg",
            Links: "https://youtu.be/SUOj85tP_qg"
        },
        {
            cardH2: "Egator Motion Video",
            tags: ["2D Motion Design"],
            btnTxt: "View Work",
            cardImage: "/assets/eGator-motion.jpg",
            Links: " https://youtu.be/dzPmO_nTI3M"
        },
        {
            cardH2: "Papayas Trivia Tuesday",
            tags: ["Video Production"],
            btnTxt: "View Work",
            cardImage: "/assets/trivia.webp",
            Links: "https://youtube.com/playlist?list=PLhd6qRj-FAcSe8n5dsbmtedmprMQO_OnJ"
        },
        {
            cardH2: "Home Pod",
            tags: ["3D Animation"],
            btnTxt: "View Work",
            cardImage: "/assets/homepod.webp",
            Links: "https://youtu.be/nMIDNQ7zP6I"
        },
        {
            cardH2: "Blocasset Tutorial",
            tags: ["Video Production"],
            btnTxt: "View Work",
            cardImage: "/assets/tutorial.webp",
            Links: "https://youtu.be/NLUcJkjDmqY"
        },
        {
            cardH2: "Introducing Blocathon",
            tags: ["3D Animation"],
            btnTxt: "View Work",
            cardImage: "/assets/run.webp",
            Links: "https://youtu.be/IoUScPHSdNQ"
        },
        {
            cardH2: "Blocathon-Unleash your Creativity",
            tags: ["2D Motion Design"],
            btnTxt: "View Work",
            cardImage: "/assets/blocathonn.png",
            Links: "https://youtu.be/Wao2s_duPkw"
        },
        {
            cardH2: "Blocathon",
            tags: ["2D Motion Design"],
            btnTxt: "View Work",
            cardImage: "/assets/win.png",
            Links: "https://youtu.be/XI6TvvpfIpI"
        },
        {
            cardH2: "POP Video",
            tags: ["2D Motion Design"],
            btnTxt: "View Work",
            cardImage: "/assets/pop.png",
            Links: "https://youtube.com/shorts/A3oFHbNRW4c?feature=share"
        },
        {
            cardH2: "Web3bridge Conference",
            tags: ["Live Video Production"],
            btnTxt: "View Work",
            cardImage: "/assets/conference.png",
            Links: "https://youtu.be/83-8HY64puQ"
        },
        {
            cardH2: "Papayas Mascot Swinging",
            tags: ["3D Animation"],
            btnTxt: "View Work",
            cardImage: "/assets/swing.webp",
            Links: "https://www.instagram.com/reel/CjIqnUgIXaP/?utm_source=ig_web_copy_link"
        },
        {
            cardH2: "Web3Ladies at 1",
            tags: ["Live Video Production"],
            btnTxt: "View Work",
            cardImage: "/assets/web3ladies.webp",
            Links: "https://youtu.be/0LH94BpfNOk"
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
                <div className="pt-[112px] pb-[164px] 2xl:w-[1440px] m-auto">
                    <SectionSeperator />
                    <p className="text-center pt-[14px] pb-[64px]">OUR WORKS</p>
                    <div className="w-[70%] sm:w-[90%] lg:w-[80%] grid sm:grid-cols-2 xl:grid-cols-3 m-auto gap-10">
                        {products?.map((product, index) => (
                            <Link href={product.Links} key={index}>
                                <a target="_blank" className="bottom-0">
                                    <CardDiv className="ml-7 md:ml-14 lg:ml-7 h-[475px] cursor-light">
                                        <div className="relative w-[300px] h-[300px] 4xl:w-[350px] 4xl:max-w-[386px] overflow-hidden rounded-[24px]">
                                            <Image src={product.cardImage} layout="fill" objectFit='cover' alt="image" />
                                        </div>
                                        <div className="mt-[15px] ">
                                            <h2 className="font-[500] text-backboneText text-lg xl:text-2xl mb-[10px] leading-[160%]">{product.cardH2}</h2>
                                            {/* <p className="break-words leading-[20px] font-normal text-backboneText1 4xl:text-[16px] max-w-[300px] 4xl:max-w-[310px] mb-[10px]">{product.cardP}</p> */}
                                            <div className='flex gap-[12px]'>
                                                {product.tags[0] && <p className='border-backboneText1 text-backboneText1 border-[0.5px] rounded-3xl px-[12px] py-[3px] w-fit'>{product.tags[0]}</p>}
                                                {product.tags[1] && <p className='border-backboneText1 text-backboneText1 border-[0.5px] rounded-3xl px-[12px] py-[3px] w-fit'>{product.tags[1]}</p>}
                                            </div>
                                        </div>
                                    </CardDiv>
                                </a>
                            </Link>))}
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