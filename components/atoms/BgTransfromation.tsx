import React from 'react'
import { keyframes } from 'styled-components'
import styled from 'styled-components'
const BgTransfromation = () => {
    return (

        <BgTransformationOne>
            <BgTransformationOneLeft></BgTransformationOneLeft>
            <BgTransformationOneRight></BgTransformationOneRight>
        </BgTransformationOne>
    )
}

export default BgTransfromation

const interChangeOne = keyframes`
  0% {
    transform: translateX(50%);
  }

  25% {
    transform: translateX(100%);
  }

  50% {
    transform: translateX(50%);
  }

  75% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(50%);
  }
`

const interChangeTwo = keyframes`
  0% {
    transform: translateX(-50%);
  }

  25% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(-50%);
  }

  75% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
`
export const BgTransformationOne = styled.div`
   width: 100%;
   height: 100%;
   z-index: -1;
   position: absolute;
   top: 0;
   left: 0;
   display: flex;
`

export const BgTransformationOneLeft = styled.div`
     height: 100%;
   width: 100%;
   background-image: url('/assets/orang-hero-section-min.png');
   background-position: left center;
   background-repeat: no-repeat;
   background-size: cover;
   filter: blur(172px);
   animation: ${interChangeOne} 4s ease-in-out infinite;
   border-radius: 70% 68% 48% 48% / 28% 28% 72% 72%;
`

export const BgTransformationOneRight = styled.div`
    height: 100%;
   width: 100%;
   background-image: url('/assets/blue-hero-section-min.png');
   background-position: right center;
   background-repeat: no-repeat;
   background-size: cover;
   filter: blur(56px);
   animation: ${interChangeTwo} 4s ease-in-out infinite;`