import styled from 'styled-components'

const FirstText = styled.h1`
font-weight: 400;
font-size: 12px;
line-height: 130%;
`
const SectionHeader = ({children}) => {
   return ( 
        <FirstText className='pt-24 pl-6 md:pl-20 pb-12 text-backboneText'>
          <div>{children}</div>
        </FirstText>
   )
}

export default SectionHeader