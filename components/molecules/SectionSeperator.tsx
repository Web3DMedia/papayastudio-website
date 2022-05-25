import Image from 'next/image'
import styled from 'styled-components'

const Imgs = styled.div`
width:110px;
padding: 15px 10px;
border: 1px solid var(--PrimaryTwo);
border-radius: 50%;
@media (max-width:800px) {
   padding: 10px;
}
`
const Line = styled.div`
background:white;
border-top: 0.8px solid #FF9D8D;
padding:1px;
height:1px;
width:400px;
`

const SectionSeperator = () => {
   return (
      <div className='flex justify-center items-center'>
         <Line></Line>
         <Imgs className='flex justify-center items-center'>
            <Image src="/assets/seperator-papay.png" width={80} height={74} objectFit="cover" alt="image"/>
         </Imgs>
         <Line></Line>
      </div>
   )
}

export default SectionSeperator