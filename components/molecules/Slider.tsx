import styled from 'styled-components'
import Carousel from 'nuka-carousel'
const BackingSlider = styled.div`
background-position: center;
background-repeat: none;
box-sizing: border-box;
overflow: hidden;
`
const Img = styled.img`
width:110px;
&:nth-child(1) {
    margin-left: 0px;
}
@media (max-width: 1024px) {
}`
const Slider = () => {
  return (
    <BackingSlider className='sm:hidden w-[500px] m-auto px-8'>
      {/*@ts-ignore */}
      <Carousel
        autoplay={true}
        autoplayInterval={1000}
        wrapAround={true}
        cellSpacing={0}
        easing="easeCubicInOut"
        pauseOnHover={true}
        withoutControls={true}
        slidesToShow={2}
      >
        <Img src='/assets/polygon-studios.png' alt="polygon studios" loading="lazy" ></Img>
        <Img src='/assets/polygon.png' alt="polygon" loading="lazy"></Img>
        <Img src='/assets/polygon-studios2.png' alt="polygon studios" loading="lazy"></Img>
        <Img src='/assets/polygon2.png' alt="polygon" loading="lazy" ></Img>
      </Carousel>
    </BackingSlider>
  )
}

export default Slider