import {useState} from 'react'
import styled from 'styled-components'

interface IProps{
   info:{
      name:string,
      text:string
   }
}

const ActivityCard = ({info}:IProps) => {
   const [onHover , setOnHover] = useState<boolean>(false)

   return (
      <CardWrapper 
         className="my-5 mx-2 relative cursor-pointer"
         onMouseEnter={() => setOnHover(true)}
         onMouseLeave={() => setOnHover(false)}
         onHover={onHover}
      >
         <div className="flex items-center">
            <div className="overflow-hidden rounded-full mr-2">
               <ImageArrow filterState={onHover}/>
            </div>
            <h2 className={onHover ? "text-[18px] md:text-[20px] xl:text-[34px] font-semibold text-[#FF6661] duration-200 ease-in-out" :"text-[18px] md:text-[20px] xl:text-[34px] font-semibold text-[#555555] duration-200 ease-in-out"}>/ {info.name}</h2>
         </div>
         <p className="max-w-[300px] 3xl:max-w-[400px] text-[#555555] font-medium ml-12 text-[14px] xl:text-base">
            {info.text}
         </p>
      </CardWrapper>
   )
}

const CardWrapper = styled.div<{onHover: boolean}>`
   &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${props => props.onHover ? "#FF6661" : "#E5E7EB"};
      transition: 200ms ease-in-out all;
      bottom: -10px;
   }
`

const ImageArrow = styled.div<{filterState: boolean}>`
   width: 50px;
   height: 50px;
   object-fit: contain;
   background-image: url(/assets/active-arrow.png);
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   -webkit-filter: ${({filterState}) => filterState ? "grayscale(0)":"grayscale(100%)"}; /* Safari 6.0 - 9.0 */
   filter: ${({filterState}) => filterState ? "grayscale(0)":"grayscale(100%)"};
   transition: ease-in-out 200ms filter ;

   @media screen and (max-width: 1024px) {
      width: 30px;
      height: 30px;
   }
`

export default ActivityCard