import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BgTransfromation from '../atoms/BgTransfromation'


const LoadingContainer = styled.div`
height:100vh;
width:100%;
position:fixed;
z-index:400;
background:white;
overflow:hidden;
`
const Counter = styled.div`
width: 295px;
left: 364px;
top: 403px;
background: #FEDBD5;
border: 0.5px dashed #FF6661;
border-radius: 16px;
z-index: 1;
`
const TrackerOutter = styled.div<{ textNumber: number }>`
   width: ${({ textNumber }) => textNumber === 1 ? '20%' : textNumber === 2 ? '40%' : textNumber === 3 ? '60%' : textNumber === 4 ? '80%' : textNumber === 5 ? '100%' : '0%'};
   height: 6px;
   background:  #FF6661;
   border-radius: 8px;
   z-index: 2;
   position: absolute;
   top: 0;
   transition: .5s ease-in width;
`

const TrackerInner = styled.div`
   width: 100px;
   height: 2px;
   background: #FCD1CA;
   border-radius: 8px;
   position: relative;
   z-index: 1;
   margin-top: 2px;
`
const LoadingScreen = () => {
    const [textNumber, setTextNumber] = useState(0)

    useEffect(() => {
        if (textNumber <= 6) {
            const interval = setInterval(() => {
                setTextNumber(textNumber + 1)
            }, 1500)
            return () => clearInterval(interval)
        } else {
            setTextNumber(1)
        }
    }, [textNumber])
    return (
        <div>
            <LoadingContainer className='flex items-center justify-center'>
                <div className="flex items-center cursor-light absolute top-8 left-8 xl:left-16">
                    <span className="relative w-[30px] h-[25px] md:w-[40px] md:h-[30px] xl:w-[30px] xl:h-[30px]">
                        <Image
                            src="/assets/logo.svg"
                            layout="fill"
                            alt="logo"
                        />
                    </span>
                    <h2 className=" text-[18px] sm:text-[22px] md:text-[25px] xl:text-[35px] font-[500] sm:ml-2">Papayas</h2>
                </div>

                <BgTransfromation></BgTransfromation>
                <div className='flex justify-between items-center relative'>
                    <div className='mt-6 xl:-mt-0 hidden sm:block' >
                        <Image
                            src="/assets/papina.png"
                            width={274}
                            height={274}
                            alt="paptio"
                            objectFit="contain"
                            objectPosition="top"
                        />
                    </div>
                    <div
                        className='xl:-ml-44 sm:-ml-48 -ml-64 xl:-mt-14 -mt-10 block xl:hidden'>
                        <Image
                            src="/assets/lazer-left.svg"
                            width={450}
                            height={59}
                            alt="paptio"
                            objectFit="contain"
                            objectPosition="top"
                        />
                    </div>
                    <div
                        className='xl:-ml-28 -ml-36 xl:-mt-12 -mt-10 hidden xl:block'>
                        <Image
                            src="/assets/left-large.svg"
                            width={525}
                            height={79}
                            alt="paptio"
                            objectFit="contain"
                            objectPosition="top"
                        />
                    </div>
                    <Counter className='-mt-12 lg:-mx-56 sm:-mx-[210px] -mx-[229px]'>
                        <div className="flex w-auto items-center justify-center  py-[15px] sm:py-[11px] md:py-[15px] xl:py-[22px]">
                            <h4 className="text-[20px]">{textNumber === 1 ? '01' : textNumber === 2 ? '02' : textNumber === 3 ? '03' : textNumber === 4 ? '04' : textNumber === 5 ? '05' : '01'}</h4>
                            <div className="relative mx-4">
                                <TrackerOutter textNumber={textNumber} />
                                <TrackerInner />
                            </div>
                            <h4 className="text-[20px]">05</h4>
                        </div>
                    </Counter>
                    <div
                        className='xl:-mr-28 xl:-mt-12 -mt-10 hidden xl:block'>
                        <Image
                            src="/assets/right-large.svg"
                            width={525}
                            height={79}
                            alt="paptio"
                            objectFit="contain"
                            objectPosition="top"
                        />
                    </div>
                    <div
                        className='xl:-mr-44 sm:-mr-48 -mr-64 xl:-mt-14 -mt-10  block xl:hidden'>
                        <Image
                            src="/assets/lazer-right.svg"
                            width={450}
                            height={59}
                            alt="paptio"
                            objectFit="contain"
                            objectPosition="top"
                        />
                    </div>
                    <div className='mt-6 xl:-mt-0 hidden sm:block'>
                        <Image
                            src="/assets/papito.png"
                            width={254}
                            height={254}
                            alt="paptio"
                            objectFit="contain"
                            objectPosition="top"
                        />
                    </div>
                </div>

            </LoadingContainer>
        </div>
    )
}

export default LoadingScreen