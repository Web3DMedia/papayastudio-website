import styled from 'styled-components'


export const HeaderBar = styled.div`
   -webkit-backdrop-filter: grayscale() blur(10px); /* Safari 9+ */
    backdrop-filter: grayscale() blur(10px); /* Chrome and Opera */
   background-color: rgba(255, 255, 255, 0.3);
`

export const TrackerOutter = styled.div<{textNumber: number}>`
   width: ${({textNumber}) => textNumber === 1 ? '25%' : textNumber === 2 ? '50%' : textNumber === 3 ? '75%' : textNumber === 4 ? '100%' : '25%'};;
   height: 5px;
   background:  #FF6661;
   border-radius: 8px;
   z-index: 2;
   position: absolute;
   top: 0;
   transition: .8s ease-in width;
`

export const TrackerInner = styled.div`
   width: 100px;
   height: 1.5px;
   background: #FCD1CA;
   border-radius: 8px;
   position: relative;
   z-index: 1;
   margin-top: 2px;
`