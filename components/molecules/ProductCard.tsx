import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'


const CardDiv = styled.div`
`


const ProductCard = ({ info }) => {
   return (
      <CardDiv className="ml-7 md:ml-14 lg:ml-7 h-[475px] cursor-default">
         <div className="relative w-[300px] h-[300px] max-w-[300px] 4xl:w-[350px] 4xl:max-w-[350px] overflow-hidden rounded-[24px]">
            <Image src={info.cardImage} layout="fill" objectFit='cover' alt="image" />
         </div>
         <div className="mt-[15px] ">
            <h2 className="font-[500] text-backboneText text-lg xl:text-2xl mb-[10px] leading-[160%]">{info.cardH2}</h2>
            <p className="break-words leading-[20px] font-normal text-backboneText1 4xl:text-[16px] max-w-[300px] 4xl:max-w-[310px] mb-[10px]">{info.cardP}</p>
            {
               info.Links.length !== 0 && <Link href={info.Links}>
                  <a target="_blank" className="absolute bottom-0">
                     <Button className="flex items-center text-backboneText cursor-light">
                        {info.btnTxt}<span className='ml-4'>&#8594;</span>
                     </Button>
                  </a>
               </Link>
            }
         </div>
      </CardDiv>
   )
}
const Button = styled.button`
  :hover {
    color: var(--PrimaryOne);
    transform:scale(1.1);
  }
`
export default ProductCard