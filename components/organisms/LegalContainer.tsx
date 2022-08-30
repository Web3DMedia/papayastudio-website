import Link from 'next/link'
import Image from 'next/image'

const LegalContainer = () => {
   return (
      <div className=" min-h-[60vh] mb-5 flex flex-col items-center justify-center">
         <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft" />
            <div className="bgTransformationOneRight" />
         </div>
         <h3 className="text-[#002F31] font-normal text-xs uppercase my-5">Legal</h3>
         <div className="md:w-[650px] md:h-[680px] bg-white my-7 rounded-t-[32px] py-10 px-8 xl:px-[60px]">
            <h3 className="font-bold leading-[36px] md:leading-[46px] text-[30px] md:text-[36px] text-[#002F31]">Papayas Studios Legal</h3>
            <p className="max-w-[476px] mt-[16px] text-[14px] font-normal leading-[20px] text-[#4A5567]">
               Papayas Studios takes your privacy seriously and is committed to ensuring a smooth experience. The documents below are details of how Papayas Studios manages your data
            </p>
            <div className="mt-[38px] w-full xl:w-auto md:grid ml-11 -translate-x-11 md:gap-y-5 xl:gap-y-5 xl:gap-x-14 md:grid-cols-2 text-[#23262E]">
               <Link href="/privacy">
                  <a>
                     <div className="md:w-[250px] md:h-[150px] bg-[#FCD1CA1F] cursor-light border-[0.5px] border-[#FF9D8D] rounded-2xl px-[18px] py-[25px] flex flex-row items-center md:items-start md:flex-col md:justify-between ">
                        <div className="w-[38px] h-[45px] relative mr-5">
                           <Image
                              src="/assets/privacy.png"
                              layout='fill'
                              alt="privacy icon"
                           />
                        </div>
                        <h2 className="font-normal leading-8 text-xl">Privacy Policy</h2>
                     </div>
                  </a>
               </Link>
               <Link href="/terms">
                  <a>
                     <div className="my-[18px] md:my-0 md:w-[250px] md:h-[150px] bg-[#FCD1CA1F] cursor-light border-[0.5px] border-[#FF9D8D] rounded-2xl px-[18px] py-[25px] flex flex-row items-center md:items-start md:flex-col md:justify-between ">
                        <div className="w-[38px] h-[45px] relative mr-5">
                           <Image
                              src="/assets/terms.png"
                              layout='fill'
                              alt="Terms icon"
                           />
                        </div>
                        <h2 className="font-normal leading-8 text-xl">Terms and condition</h2>
                     </div>
                  </a>
               </Link>
               <Link href="/cookies">
                  <a>
                     <div className="md:w-[250px] md:h-[150px] bg-[#FCD1CA1F] cursor-light border-[0.5px] border-[#FF9D8D] rounded-2xl px-[18px] py-[25px] flex flex-row items-center md:items-start md:flex-col md:justify-between ">
                        <div className="w-[40px] h-[45px] relative mr-5">
                           <Image
                              src="/assets/cookie.png"
                              layout='fill'
                              alt="Cookie icon"
                           />
                        </div>
                        <h2 className="font-normal leading-8 text-xl">Cookies policies</h2>
                     </div>
                  </a>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default LegalContainer