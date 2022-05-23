import ActivityCard from "../molecules/ActivityCard"

const CreateSection = () => {
   const activityData = [
      {
         name: '2D Animation (Animes)',
         text:"We create super cool web3d fonts if they are nont in the category kingdomw"
      },
      {
         name: '3D Animation',
         text:"We create super cool web3d fonts if they are nont in the category kingdomw"
      },
      {
         name: ' Audio(FX) Production',
         text:"We create super cool web3d fonts if they are nont in the category kingdomw"
      },
      {
         name: 'Video Production',
         text:"We create super cool web3d fonts if they are nont in the category kingdomw"
      },
      {
         name: 'Manga Production',
         text:"We create super cool web3d fonts if they are nont in the category kingdomw"
      },
      {
         name: 'Motion Graphics Design',
         text:"We create super cool web3d fonts if they are nont in the category kingdomw"
      },
      {
         name: 'Live Web3 Production',
         text:"We create super cool web3d fonts if they are nont in the category kingdomw"
      },
   ]
   return (
      <div className="relative w-full min-h-screen py-28 md:py-32  xl:py-28 4xl:pt-36 font-body">
         <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft"/>
            <div className="bgTransformationOneRight"/>
         </div>
         <div className="relative w-full h-full max-w-[1440px] 4xl:max-w-[2000px] mx-auto sm:px-20 4xl:px-10 4xl:py-20">
            <p className="absolute left-5 -top-[50px] md:left-10 xl:left-0 md:-top-[100px] xl:-top-[100px] 4xl:-top-[50px] font-normal text-xs xl:text-base uppercase">
               What We <br/> Do
            </p>
            <div className="h-full w-full ">
               <h2 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold pl-5 md:pl-0">We create blockchain <br/> and web3 focused</h2>
               <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 px-5 md:px-3 lg:px-0">
                  {
                     activityData?.map((info, index) => (
                        <ActivityCard key={index} info={info}/>
                     ))
                  }
               </div>
            </div>
         </div>
      </div>
   )
}

export default CreateSection