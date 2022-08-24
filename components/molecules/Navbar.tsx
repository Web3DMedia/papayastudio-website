import Image from 'next/image'
import Link from 'next/link'
import { FiMenu } from "react-icons/fi"
import styled from 'styled-components'
import { TrackerInner, TrackerOutter, HeaderBar } from '../../styles/NavbarStyles'
import { Dispatch, SetStateAction } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useState, useEffect } from 'react'

import { getEventListeners } from 'events'

interface IProps {
   setIsMenuOpen: Dispatch<SetStateAction<boolean>>
   isOne?: boolean
   isTwo?: boolean
   isThree?: boolean
   isFour?: boolean
   isFive?: boolean
}


const NavLinks = styled.div`
&:hover .logo {
   opacity: 1;
}
`

const Navbar = ({ setIsMenuOpen, isOne, isTwo, isThree, isFour, isFive }: IProps) => {
   const [textNumber, setTextNumber] = useState(1)

   useEffect(() => {
      if (textNumber <= 4) {
         const interval = setInterval(() => {
            setTextNumber(textNumber + 1)
         }, 5000)
         return () => clearInterval(interval)
      } else {
         setTextNumber(1)
      }
   }, [textNumber])

   const openMenuBar = () => {
      setIsMenuOpen(true)
   }
   return (
      <HeaderBar className="fixed top-0 left-0 w-full h-[80px] flex items-center justify-between 3xl:justify-around  px-[10px] sm:px-[50px] lg:px-[100px] xl:px-[150px] 3xl:px-[200px] 4xl:pl-[425px] 4xl:pr-[400px] z-40">
         <Link href="/" passHref>
            <ScrollLink to="whoSection" spy={true} smooth={true} offset={50} duration={500} className="flex items-center cursor-pointer">
               <span className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px] xl:w-[30px] xl:h-[30px]">
                  <Image
                     src="/assets/logo.svg"
                     layout="fill"
                     alt="logo"
                  />
               </span>
               <h2 className=" text-[18px] sm:text-[22px] md:text-[25px] xl:text-[35px] font-bold sm:ml-2">Papayas</h2>
            </ScrollLink>
         </Link>
         <div className="hidden lg:flex items-center">
            <Link href="/#WhoAreWe" passHref>
               <NavLinks className="flex items-center font-bold cursor-pointer xl:text-lg" >
                  <Image
                     src='/assets/orange-logo.svg'
                     width={25}
                     height={25}
                     alt="orange logo"
                     className={isOne ? "logo opacity-1" : "logo opacity-0"}
                  />
                  <h2 className="ml-1">who</h2>
               </NavLinks>
            </Link>
            <Link href="/#WhatWeDo" passHref>
               <NavLinks className="flex items-center mx-12 cursor-pointer font-bold xl:text-lg">
                  <Image
                     src='/assets/orange-logo.svg'
                     width={25}
                     height={25}
                     alt="orange logo"
                     className={isTwo ? "logo opacity-1" : "logo opacity-0"}
                  />
                  what
               </NavLinks>
            </Link>
            <Link href="/#OurProuducts" passHref>
               <NavLinks className="flex items-center font-bold cursor-pointer xl:text-lg" >
                  <Image
                     src='/assets/orange-logo.svg'
                     width={25}
                     height={25}
                     alt="orange logo"
                     className={isThree ? "logo opacity-1" : "logo opacity-0"}
                  />
                  our works
               </NavLinks>
            </Link>
         </div>
         <Link href="/contact" passHref>
            <a className=" border border-primary hidden lg:block lg:px-[25px] lg:py-[10px] xl:px-[30px] xl:py-[15px] font-bold text-[18px] text-black rounded-xl cursor-pointer">
               Get in touch
            </a>
         </Link>
         <div className="flex w-[150px] items-center justify-center lg:hidden">
            <h4 className="text-xs">01</h4>
            <div className="relative mx-1">
               <TrackerOutter isOne={isOne} isTwo={isTwo} isThree={isThree} isFour={isFour} isFive={isFive} />
               <TrackerInner />
            </div>
            <h4 className="text-xs">05</h4>
         </div>
         <button
            onClick={openMenuBar}
            className="text-white bg-[#FF6661] p-2 rounded-full cursor-pointer flex items-center justify-center lg:hidden outline-none">
            <FiMenu fontSize={20} />
         </button>
      </HeaderBar>
   )
}

export default Navbar