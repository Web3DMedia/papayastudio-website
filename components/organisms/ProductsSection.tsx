import { useEffect, useState, useRef } from "react";
import ProductCard from "../molecules/ProductCard";
import Image from "next/image";
import { Element } from "react-scroll";
import Carousel from "nuka-carousel";
import styled from "styled-components";
import BgTransfromation from "../atoms/BgTransfromation";
import { bg } from "date-fns/locale";
import Link from "next/link";

interface IProps {
  myRefThree: any
  isThree: boolean
}


const ProductsSection = ({ myRefThree, isThree }: IProps) => {
  const [img, setImg] = useState<Number>(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setImg((bg) => (Number(bg) + Number(1) > 3 ? 1 : Number(bg) + Number(1)));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [bg]);


  const [isWidth, setIsWidth] = useState<number>(1)
  const myRefWidth: any = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if (entry.boundingClientRect.width > 1144)
        setIsWidth(3.5)
      else
        setIsWidth(1)
    })

    observer.observe(myRefWidth.current)
  })


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
    <section>
      {/*@ts-ignore */}
      <Element
        id="OurWorks"
        name="productsSection"
        className="relative w-full py-28 md:py-32 xl:py-48 4xl:pt-36"
      >
        <BgTransfromation></BgTransfromation>
        <div className="mx-1 h-[150px] absolute top-20 left-7 hidden lg:block ">
          <TrackerOutter isThree={isThree} />
          <TrackerInner />
        </div>
        <div className="2xl:w-[1440px] m-auto" ref={myRefThree}>
          <div
            className="absolute -top-12 sm:-top-16 w-[250px] h-[250px] lg:-top-24 xl:-top-40 -right-10 sm:right-0 md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[500px] xl:h-[500px]"
            data-aos="fade-up"
          >
            <Image src="/assets/papayas2.png" layout="fill" alt="Product" loading="lazy" />
          </div>

          <div className="relative w-full h-full mx-auto Tmd:px-20 xl:pl-40 4xl:py-20">
            <p
              className="absolute left-5 md:left-14 -top-[60px] lg:left-20 xl:left-[80px] md:-top-[50px] xl:-top-[115px] 4xl:-top-16 4xl:left-20 font-normal text-xs uppercase"
              data-aos="fade-up"
            >
              Our <br /> Works
            </p>
            <div className="w-full h-full">
              <h2
                className="text-[24px] leading-tight md:text-[32px] lg:text-[36px] xl:text-[48px] font-[500] pl-5 md:pl-14 lg:pl-20 xl:pl-0"
                data-aos="fade-up"
              >
                What we’ve created
              </h2>
              <div
                className=" -ml-6 overflow-x-hidden w-[1700px]"
                data-aos="fade-up"
                ref={myRefWidth}
              >
                {/*@ts-ignore */}
                <div
                  className="productCards flex mt-10 px-5 md:pl-04 lg:pl-[85px] xl:pl-0 cursor-scroll"
                >
                  {products?.map((info, index) => (
                    index < 3 && <ProductCard key={index} info={info} />
                  ))}
                </div>
              </div>
              <Link href="/our-works" passHref>
                <HeaderText className="px-5 md:pl-04 lg:pl-[85px] xl:pl-0  pt-[36px] text-[18px] leading-[30px] font-[700] cursor-light">View all works <span className="ml-[12px] bg-primary1 px-[7px] rounded-full">&gt;</span> </HeaderText>
              </Link>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

const TrackerOutter = styled.div<{ isThree: boolean }>`
   width: 5px;
   height: ${({ isThree }) => isThree ? '100%' : '0%'};
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
const HeaderText = styled.button`
  :hover {
    color: var(--PrimaryOne);
    transform:scale(1.1);
  }
`

export default ProductsSection;
