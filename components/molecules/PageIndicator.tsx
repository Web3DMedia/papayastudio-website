import styled from 'styled-components'

const PageIndicator = () => {
   return (
      <div className="z-50 hidden lg:block bg-transparent w-16 4xl:w-[75px] border-r border-dashed border-[#FF6661] h-full fixed top-0 left-0 pt-36">
      </div>
   )
}

export default PageIndicator


const TrackerOutter = styled.div`
   width: 5px;
   height: 30%;
   background: #FF6661;
   border-radius: 8px;
   z-index: 2;
   position: absolute;
   top: 0;
   left: -1px;
`

const TrackerInner = styled.div`
   width: 1.5px;
   height: 100%;
   background: #FCD1CA;
   border-radius: 8px;
   position: relative;
   z-index: 1;
   margin-top: 2px;
   margin-left: .8px;
`