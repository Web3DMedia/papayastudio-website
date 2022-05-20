import Image from 'next/image'

const SectionSeperator = () => {
   return (
      <div className="h-20 xl:h-24 flex items-center justify-center relative my-5">
         <div className='h-[1.5px] bg-[#FF9D8D] w-full max-w-3xl xl:max-w-7xl'/>
         <div className='border border-[#FF9D8D] h-[60px] w-[60px] xl:h-[90px] xl:w-[90px] absolute left-1/2 bg-white rounded-full'>
            <Image src="/assets/seperator-papaya.png" layout='fill' alt="image"/>
         </div>
      </div>
   )
}

export default SectionSeperator