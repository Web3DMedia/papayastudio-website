import CryptoPack from '../../public/assets/crypto-pack.png'
import CryptoBundle from '../../public/assets/crypto-bundle.png'
import FishNft from '../../public/assets/fish-nft.png'
import Bloccassests from '../../public/assets/bloccassets.png'
import PapitoandPapina from '../../public/assets/papitoandpapina.png'
import ProductCard from '../molecules/ProductCard'
import Image from 'next/image'
import {Element} from 'react-scroll'
import Carousel from 'nuka-carousel'

import styled, {keyframes} from 'styled-components'

const ProductsSection = () => {
   const products = [
      {
         cardH2:"Assets for Blocasset",
         cardP:"Hundreds of digital asset and designs created for Web3 designers and digital creators. ",
         btnTxt:"View Product",
         cardImage: Bloccassests,
         Links: "https://blocasset.com/"
      },
      {
         cardH2:"Papayas YouTube show",
         cardP:"Highly interactive and engaging videos produced in-house for Papayas YouTube Channel",
         btnTxt:"View Product",
         cardImage: CryptoBundle,
         Links: "/"
      },
      {
         cardH2:"Papito and Papina Mascot",
         cardP:"Our signature brand mascot for Papayas studio",
         btnTxt:"View Product",
         cardImage: PapitoandPapina,
         Links: "/"
      },
      {
         cardH2:"Avatars",
         cardP:"Stunning custom-made avatars for days!",
         btnTxt:"View Product",
         cardImage: CryptoPack,
         Links: "/"
      },
      {
         cardH2:"Blocasset Ad Video",
         cardP:"Thrilling launch video created for Blocasset to introduce its platform to users",
         btnTxt:"View Product",
         cardImage: CryptoBundle,
         Links: "/"
      },
      {
         cardH2:"Blocasset Contributor Launch Video",
         cardP:"Super engaging explainer video created for Blocasset contributors launch",
         btnTxt:"View Product",
         cardImage: FishNft,
         Links: "/"
      },
   ]


   return (
      <Element id="OurProuducts" name="productsSection" className="relative w-full py-28 md:py-32 xl:py-48 4xl:pt-36">
         <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft"/>
            <div className="bgTransformationOneRight"/>
         </div>
         <div className="absolute top-20 left-7 w-[2px] hidden lg:block h-40 bg-[#FCD1CA]"/>
         <div className='2xl:w-[1440px] m-auto'>
            <div className="absolute -top-12 sm:-top-16 w-[250px] h-[250px] lg:-top-24 xl:-top-40 -right-10 sm:right-0 md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[500px] xl:h-[500px]">
            <Image src="/assets/papayas2.png" layout='fill' alt="Product" />
         </div>
         <div className="relative w-full h-full mx-auto Tmd:px-20 xl:pl-40 4xl:py-20">
            <p className="absolute left-5 -top-[60px] md:left-20 xl:left-[80px] md:-top-[70px] xl:-top-[115px] 4xl:-top-20 4xl:left-20 font-normal text-xs uppercase">
               Our <br/> Products
            </p>
            <div className="w-full h-full">
               <h2 className="text-[24px] leading-tight md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold pl-5 md:pl-20 xl:pl-0">What we’ve created</h2>
               {/*@ts-ignore */}
               <div
                  className="productCards overflow-x-scroll flex mt-10 px-5 sm:pl-[60px] xl:pl-0 cursor-pointer z-0"
               >
                  {
                     products?.map((info, index) => (
                        <ProductCard key={index} info={info}/>
                     ))
                  }
               </div>
            </div>
         </div>
         </div>
      </Element>
   )
}

export default ProductsSection