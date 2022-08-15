import Image from 'next/image'
import styled from 'styled-components'
import {VscArrowRight} from 'react-icons/vsc'
import Link from 'next/link'


const CardDiv = styled.div`
`


const ProductCard = ({info}) => {
   return (
      <CardDiv className="cursor-pointer ml-7 h-[475px]">
          <div className="relative w-[300px] h-[300px] max-w-[300px] 4xl:w-[350px] 4xl:max-w-[350px] overflow-hidden rounded-[24px]">
            <Image src={info.cardImage} layout="fill" objectFit='cover' alt="image"/>
         </div>
         <div className="mt-[15px] ">
            <h2 className="font-bold text-backboneText text-lg xl:text-2xl mb-[10px] leading-[160%]">{info.cardH2}</h2>
            <p className="break-words leading-[17px] font-normal text-backboneText1 4xl:text-[16px] max-w-[300px] 4xl:max-w-[310px] mb-[10px]">{info.cardP}</p>
            <Link href={info.Links}>
               <a target="_blank" className="absolute bottom-0">
                  <button className="flex items-center text-backboneText">
                     {info.btnTxt}<span className='ml-4'><VscArrowRight/></span>
                  </button>
               </a>
            </Link>
         </div>
      </CardDiv>
   )
}

export default ProductCard