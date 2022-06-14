import Image from 'next/image'
import styled from 'styled-components'
import {VscArrowRight} from 'react-icons/vsc'

const CardDiv = styled.div`
   cursor: pointer;
   &:first-child {
      margin-left: 0px;
   }

   &:last-child {
      margin-right: 0px;
   }
`

const ProductCard = ({info}) => {
   return (
      <CardDiv className="mx-5 4xl:mx-10 cursor-pointer">
         <div className="relative w-[300px] h-[300px] max-w-[300px] 4xl:w-[350px] 4xl:max-w-[350px] overflow-hidden rounded-[24px]">
            <Image src={info.cardImage} layout="fill" objectFit='cover' alt="image"/>
         </div>
         <div className="mt-[15px] ">
            <h2 className="font-bold text-lg xl:text-2xl mb-[10px] leading-[160%]">{info.cardH2}</h2>
            <p className="break-words leading-[17px] font-normal 4xl:text-[16px] max-w-[300px] 4xl:max-w-[310px] mb-[10px]">{info.cardP}</p>
            <button className="flex items-center">
               {info.btnTxt}<span className='ml-4'><VscArrowRight/></span>
            </button>
         </div>
      </CardDiv>
   )
}

export default ProductCard