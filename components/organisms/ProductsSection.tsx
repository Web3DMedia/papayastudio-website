import CryptoPack from '../../public/assets/crypto-pack.png'
import CryptoBundle from '../../public/assets/crypto-bundle.png'
import FishNft from '../../public/assets/fish-nft.png'
import ProductCard from '../molecules/ProductCard'
import Image from 'next/image'
import {Element} from 'react-scroll'
import Carousel from 'nuka-carousel'

import styled, {keyframes} from 'styled-components'

const ProductsSection = () => {
   const products = [
      {
         cardH2:"Crypto Pack for Blocasset",
         cardP:"We create super cool web3d fonts if they are not in the catgeory kingdomw",
         btnTxt:"View Product",
         cardImage: CryptoPack,
      },
      {
         cardH2:"Crypto Pack for Blocasset",
         cardP:"We create super cool web3d fonts if they are not in the catgeory kingdomw",
         btnTxt:"View Product",
         cardImage: CryptoBundle,
      },
      {
         cardH2:"Fish NFT",
         cardP:"We create super cool web3d fonts if they are not in the catgeory kingdomw",
         btnTxt:"View Product",
         cardImage: FishNft,
      },
      {
         cardH2:"Crypto Pack for Blocasset",
         cardP:"We create super cool web3d fonts if they are not in the catgeory kingdomw",
         btnTxt:"View Product",
         cardImage: CryptoPack,
      },
      {
         cardH2:"Crypto Pack for Blocasset",
         cardP:"We create super cool web3d fonts if they are not in the catgeory kingdomw",
         btnTxt:"View Product",
         cardImage: CryptoBundle,
      },
      {
         cardH2:"Fish NFT",
         cardP:"We create super cool web3d fonts if they are not in the catgeory kingdomw",
         btnTxt:"View Product",
         cardImage: FishNft,
      },
      {
         cardH2:"Crypto Pack for Blocasset",
         cardP:"We create super cool web3d fonts if they are not in the catgeory kingdomw",
         btnTxt:"View Product",
         cardImage: CryptoPack,
      },
      {
         cardH2:"Crypto Pack for Blocasset",
         cardP:"We create super cool web3d fonts if they are not in the catgeory kingdomw",
         btnTxt:"View Product",
         cardImage: CryptoBundle,
      },
      {
         cardH2:"Fish NFT",
         cardP:"We create super cool web3d fonts if they are not in the catgeory kingdomw",
         btnTxt:"View Product",
         cardImage: FishNft,
      },
   ]


   return (
      <Element name="productsSection" className="relative w-full min-h-screen py-28 md:py-32 xl:py-28 4xl:pt-36">
         <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft"/>
            <div className="bgTransformationOneRight"/>
         </div>
         <div className="absolute top-0 left-7 w-[2px] hidden lg:block h-40 bg-[#FCD1CA]"/>
         <div className="absolute -top-12 sm:-top-16 w-[250px] h-[250px] lg:-top-16 xl:-top-20 -right-10 sm:right-0 md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[420px] xl:h-[420px]">
            <Image src="/assets/products-mascot.png" layout='fill' alt="Product" />
         </div>
         <div className="relative w-full h-full mx-auto md:px-20 xl:px-40 4xl:py-20">
            <p className="absolute left-5 -top-[60px] md:left-20 xl:left-[80px] md:-top-[70px] xl:-top-[100px] 4xl:-top-[50px] 4xl:left-20 font-normal text-xs uppercase">
               Our <br/> Products
            </p>
            <div className="w-full h-full">
               <h2 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold pl-5 md:pl-0">What we’ve created <br/> overtime & more</h2>
               {/*@ts-ignore */}
               <Carousel
                  autoplay={true}
                  autoplayInterval={2000}
                  wrapAround={true}
                  cellSpacing={40}
                  easing="easeCubicInOut"
                  pauseOnHover={true}
                  withoutControls={true}
                  className="productCards overflow-x-scroll flex items-center mt-10 px-5 lg:px-0 cursor-pointer"
               >
                  {
                     products?.map((info, index) => (
                        <ProductCard key={index} info={info}/>
                     ))
                  }
               </Carousel>
            </div>
         </div>
      </Element>
   )
}

export default ProductsSection