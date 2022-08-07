import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import {VscArrowRight} from 'react-icons/vsc'
import Link from 'next/link'


const slider = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`

const CardDiv = styled.div`
   cursor: pointer;
   &:first-child {
      margin-left: 0px;
   }

   &:last-child {
      margin-right: 0px;
   }
   animation: ${slider} 1s linear infinite;
&:hover {
   animation-play-state: paused;
}
`


const ProductCard = ({info}) => {
   return (
      <CardDiv className="cursor-pointer ml-10">
        <div>
          <div className="relative w-[300px] h-[300px] max-w-[300px] 4xl:w-[350px] 4xl:max-w-[350px] overflow-hidden rounded-[24px]">
            <Image src={info.cardImage} layout="fill" objectFit='cover' alt="image"/>
         </div>
         <div className="mt-[15px] ">
            <h2 className="font-bold text-backboneText text-lg xl:text-2xl mb-[10px] leading-[160%]">{info.cardH2}</h2>
            <p className="break-words leading-[17px] font-normal text-backboneText1 4xl:text-[16px] max-w-[300px] 4xl:max-w-[310px] mb-[10px]">{info.cardP}</p>
            <Link href={info.Links}>
               <a target="_blank">
                  <button className="flex items-center text-backboneText">
                     {info.btnTxt}<span className='ml-4'><VscArrowRight/></span>
                  </button>
               </a>
            </Link>
         </div>
        </div>
      </CardDiv>
   )
}

export default ProductCard