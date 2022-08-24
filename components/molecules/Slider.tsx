import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import Carousel from 'nuka-carousel'

const slider = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`
const BackingSlider = styled.div`
background-position: center;
background-repeat: none;
box-sizing: border-box;
overflow: hidden;
width: 200px;
`
const Img = styled.img`
width:110px;
margin-left: 28px;
&:nth-child(1) {
    margin-left: 0px;
}
@media (max-width: 1024px) {
}`
const Slider = () => {
  return (
    <BackingSlider className='sm:hidden w-[600px]'>
      {/*@ts-ignore */}
      <Carousel
        autoplay={true}
        autoplayInterval={1000}
        wrapAround={true}
        cellSpacing={10}
        easing="easeCubicInOut"
        pauseOnHover={true}
        withoutControls={true}
        slidesToShow={3.2}
      >
        <Img src='/assets/polygon-studios.png' alt="polygon studios" ></Img>
        <Img src='/assets/polygon.png' alt="polygon" ></Img>
        <Img src='/assets/polygon-studios2.png' alt="polygon studios" ></Img>
        <Img src='/assets/polygon2.png' alt="polygon" ></Img>
      </Carousel>
    </BackingSlider>
  )
}

export default Slider