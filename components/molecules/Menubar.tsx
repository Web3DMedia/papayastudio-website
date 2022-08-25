import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { MenuDiv } from '../../styles/MenubarStyles'
import { Dispatch, SetStateAction } from 'react'
import { Link as ScrollLink } from 'react-scroll'

interface IProps {
   isMenuOpen: boolean
   setIsMenuOpen: Dispatch<SetStateAction<boolean>>
   isOne: boolean
   isTwo: boolean
   isThree: boolean
}


const Menubar = ({ isMenuOpen, setIsMenuOpen, isOne, isTwo, isThree }: IProps) => {
   const closeMenuBar = () => {
      setIsMenuOpen(false)
   }
   return (
      <MenuDiv isMenuOpen={isMenuOpen} className="z-50 lg:hidden">
         <div className="block max-h-screen">
            <div className="relative border-b border-dashed h-[60px] border-[#FCD1CA] z-10">
               <button
                  onClick={closeMenuBar}
                  className="bg-[#FF6661] p-2 rounded-full cursor-pointer flex items-center justify-center lg:hidden outline-none absolute right-[10px] md:right-[20px] lg:right-[50px] top-3">
                  <MdClose fontSize={20} color="#fff" />
               </button>
            </div>
            <div className="relative flex flex-col items-center justify-center mt-[70px] bg-transparent z-10">
               <Link href="/#WhoAreWe" passHref>
                  <ScrollLink to="whoSection" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenuBar}>
                     <a className="flex items-center font-bold xl:text-lg text-[#FFFFFF] mb-10">
                        <Image
                           src='/assets/orange-logo.svg'
                           width={25}
                           height={25}
                           alt="orange logo"
                           className={isOne ? "logo opacity-1 -ml-2" : "logo opacity-0"}
                        />
                        <h2 className="">who</h2>
                     </a>
                  </ScrollLink>

               </Link>
               <Link href="/#WhatWeDo" passHref>
                  <ScrollLink to="whatSection" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenuBar}>
                     <a className="flex items-center font-bold xl:text-lg text-[#FFFFFF] mb-0 lg:mb-10">
                        <Image
                           src='/assets/orange-logo.svg'
                           width={25}
                           height={25}
                           alt="orange logo"
                           className={isTwo ? "logo opacity-1 -ml-2" : "logo opacity-0"}
                        />
                        what
                     </a>
                  </ScrollLink>
               </Link>
               <Link href="/#OurProuducts" passHref>
                  <ScrollLink to="productsSection" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenuBar}>
                     <a className="flex items-center font-bold xl:text-lg text-[#FFFFFF] mb-10">
                        <Image
                           src='/assets/orange-logo.svg'
                           width={25}
                           height={25}
                           alt="orange logo"
                           className={isThree ? "logo opacity-1 -ml-2" : "logo opacity-0"}
                        />
                        our works
                     </a>
                  </ScrollLink>
               </Link>
               <Link href="/contact" passHref>
                  <a onClick={closeMenuBar} className="ml-4 border-2 border-[#FCD1CA] px-[20px] py-[10px] font-bold text-[18px] text-white rounded-xl cursor-pointer">
                     Get in touch
                  </a>
               </Link>
            </div>
            <div className="absolute top-80 left-3 w-[150px] h-[150px] z-0 rounded-full border border-dashed border-[#FCD1CA] opacity-30 bg-transparent">
               <div className="absolute left-[42px] top-12 w-[95px] h-[95px] z-0 rounded-full border border-dashed border-[#FCD1CA] opacity-60 bg-transparent">

               </div>
            </div>

            <div className="absolute top-80 -right-3 w-[200px] h-[200px] z-0 rounded-full border border-dashed border-[#FCD1CA] opacity-30 bg-transparent">
               <div className="absolute left-[42px] top-14 w-[140px] h-[140px] z-0 rounded-full border border-dashed border-[#FCD1CA] opacity-60 bg-transparent">
                  <div className="absolute left-[86px] top-[83px] w-[40px] h-[40px] z-0 rounded-full border border-dashed border-[#FCD1CA] opacity-90 bg-transparent"></div>
               </div>
            </div>
         </div>
      </MenuDiv>
   )
}

export default Menubar