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
   }
`

export const BtnSpan  = styled.div`
   background:  #FF6661;
   height: 20px;
   width: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100%;
   margin-left: 12px;
`


export const TextSpan = styled.span<{width:string}>`
   position: relative;

   &::before{
      content: "";
      position: absolute;
      width: ${(props) => props.width};
      height: 3px;
      background: #FF6661;
      bottom: 5px;
      left: 0;
   }
`