import { useEffect, useState } from "react";
import ProductCard from "../molecules/ProductCard";
import Image from "next/image";
import { Element } from "react-scroll";
import Carousel from "nuka-carousel";
import AOS from "aos";

const ProductsSection = () => {
  const [img, setImg] = useState<Number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImg((bg) => (Number(bg) + Number(1) > 3 ? 1 : Number(bg) + Number(1)));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  });

  const products = [
    {
      cardH2: "Assets for Blocasset",
      cardP:
        "Hundreds of digital asset and designs created for Web3 designers and digital creators. ",
      btnTxt: "View Product",
      cardImage: `/assets/bloccassets.png`,
      Links: "https://blocasset.com/",
    },
    {
      cardH2: "DesignBants Show",
      cardP:
        "Highly interactive and engaging videos produced in-house for Papayas YouTube Channel",
      btnTxt: "View Product",
      cardImage: "/assets/crypto-bundle.png",
      Links: "/",
    },
    {
      cardH2: "Papito and Papina Mascot",
      cardP: "Our signature brand mascot for Papayas studio",
      btnTxt: "View Product",
      cardImage: "/assets/papitoandpapina.png",
      Links: "/",
    },
    {
      cardH2: "Avatars",
      cardP: "Stunning custom-made avatars for days!",
      btnTxt: "View Product",
      cardImage: `/assets/backbone${img}1.jpeg`,
      Links: "/",
    },
    {
      cardH2: "Blocasset Contributor Launch Video",
      cardP:
        "Super engaging explainer video created for Blocasset contributors launch",
      btnTxt: "View Product",
      cardImage: "/assets/fish-nft.png",
      Links: "/",
    },
  ];

  return (
    <Element
      id="OurProuducts"
      name="productsSection"
      className="relative w-full py-28 md:py-32 xl:py-48 4xl:pt-36"
    >
      <div className="bgTransformationOne">
        <div className="bgTransformationOneLeft" />
        <div className="bgTransformationOneRight" />
      </div>
      <div className="absolute top-20 left-7 w-[2px] hidden lg:block h-40 bg-[#FCD1CA]" />
      <div className="2xl:w-[1440px] m-auto">
        <div
          className="absolute -top-12 sm:-top-16 w-[250px] h-[250px] lg:-top-24 xl:-top-40 -right-10 sm:right-0 md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[500px] xl:h-[500px]"
          data-aos="fade-up"
        >
          <Image src="/assets/papayas2.png" layout="fill" alt="Product" />
        </div>

        <div className="relative w-full h-full mx-auto Tmd:px-20 xl:pl-40 4xl:py-20">
          <p
            className="absolute left-5 md:left-14 -top-[60px] lg:left-20 xl:left-[80px] md:-top-[50px] xl:-top-[115px] 4xl:-top-16 4xl:left-20 font-normal text-xs uppercase"
            data-aos="fade-up"
          >
            Our <br /> Products
          </p>
          <div className="w-full h-full">
            <h2
              className="text-[24px] leading-tight md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold pl-5 md:pl-14 lg:pl-20 xl:pl-0"
              data-aos="fade-up"
            >
              What we’ve created
            </h2>
            <div
              className=" -ml-6 overflow-x-hidden"
              data-aos="fade-up"
            >
              {/*@ts-ignore */}
              <Carousel
                autoplay={true}
                autoplayInterval={2000}
                wrapAround={true}
                cellSpacing={0}
                easing="easeCubicInOut"
                pauseOnHover={true}
                withoutControls={true}
                className="productCards flex mt-10 px-5 md:pl-04 lg:pl-[85px] xl:pl-0 cursor-pointer z-0"
              >
                {products?.map((info, index) => (
                  <ProductCard key={index} info={info} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ProductsSection;
