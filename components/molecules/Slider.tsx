import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

const slider = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`
const BackingSlider = styled.div`
background-position: center;
background-repeat: none;
box-sizing: border-box;
overflow: hidden;
`
const SliderContainer = styled.div`
border-top: 0.5px solid var(--B2);
border-bottom: 0.5px solid var(--B2);
padding:50px 0;
width:1308px;
margin: 0 auto 40px;
overflow: hidden;
box-sizing: border-box;
position: relative;
`
const SliderInnerContainer = styled.div`
display: block;
top: 18%;
width: 200%;
position: absolute;
animation: ${slider} 12s linear infinite;
&:hover {
   animation-play-state: paused;
}
`
const SlideImageContainer = styled.div`
padding: 0 20px;
width: 159px;
height: 74px;
border-radius: 50px;
display: inline-block;
margin: 0 10px;
float: left;
transition: all .2s ease-out;
&:hover {
  transform: scale(1.2);
  opacity: .5;
  cursor: pointer;
`
const SlideImageOne = styled.span`
float: left;
width: 50%;
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
<BackingSlider  className='sm:hidden'>
  <SliderContainer className='text-w flex'>
    <SliderInnerContainer>
      <SlideImageOne>

      <SlideImageContainer>
        <Img src='/assets/polygon.png' alt="polygon" ></Img>
      </SlideImageContainer>
      <SlideImageContainer>
        <Img src='/assets/polygon-studios.png' alt="polygon studios" ></Img>
      </SlideImageContainer>
      <SlideImageContainer>
        <Img src='/assets/polygon.png' alt="polygon" ></Img>
      </SlideImageContainer>
      <SlideImageContainer>
        <Img src='/assets/polygon-studios.png' alt="polygon studios" ></Img>
      </SlideImageContainer>
      <SlideImageContainer>
        <Img src='/assets/polygon.png' alt="polygon" ></Img>
      </SlideImageContainer>
      <SlideImageContainer>
        <Img src='/assets/polygon-studios.png' alt="polygon studios" ></Img>
      </SlideImageContainer>
      
    </SlideImageOne>

    
    <SlideImageOne>

      <SlideImageContainer>
        <Img src='/assets/polygon.png' alt="polygon" ></Img>
      </SlideImageContainer>
      <SlideImageContainer>
        <Img src='/assets/polygon-studios.png' alt="polygon studios" ></Img>
      </SlideImageContainer>
      <SlideImageContainer>
        <Img src='/assets/polygon.png' alt="polygon" ></Img>
      </SlideImageContainer>
      <SlideImageContainer>
        <Img src='/assets/polygon-studios.png' alt="polygon studios" ></Img>
      </SlideImageContainer>
      <SlideImageContainer>
        <Img src='/assets/polygon.png' alt="polygon" ></Img>
      </SlideImageContainer>
      <SlideImageContainer>
        <Img src='/assets/polygon-studios.png' alt="polygon studios" ></Img>
      </SlideImageContainer>
    </SlideImageOne>

    </SliderInnerContainer>
  </SliderContainer>
</BackingSlider>
  )
}

export default Slider