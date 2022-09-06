import styled from 'styled-components'

export const TextDiv = styled.div`
   h3{ 
      font-size: 72px;
      font-weight: 700;
      font-size: 72px;
      line-height: 111%;
      letter-spacing: -0.03em;

      @media screen and (max-width:1920px){
         font-size:68px;
      }

      @media screen and (max-width: 1024px){
         font-size: 62px;
      }

      @media screen and (max-width:768px){
         font-size: 45px;
      }

      @media screen and (max-width:640px){
         font-size: 40px;
      }
   }
`

export const BtnSpan  = styled.button`
   background: #FF6661;
   border-radius:12px;
   color: white;
   height: 56px;
   width: 152px;
   border: 1px solid #FCD1CA;
   font-weight: 700;
font-size: 16px;
line-height: 16px;
`


export const TextSpan = styled.span<{width:string}>`
   position: relative;

   &::before{
      content: "";
      position: absolute;
      width: ${(props) => props.width};
      height: 2px;
      background: #FF6661;
      bottom: 5px;
      left: 0;
   }
`