import Link from 'next/Link'
import Image from 'next/Image'

const LegalContainer = () => {
   return (
      <div className=" min-h-[60vh] mb-5 flex flex-col items-center justify-center">
         <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft"/>
            <div className="bgTransformationOneRight"/>
         </div>
         <h3 className="text-[#002F31] font-normal text-xs uppercase my-5">Legal</h3>
         <div className="md:w-[650px] md:h-[680px] bg-white my-7 rounded-t-[32px] py-10 px-10 xl:px-[60px]">
            <h3 className="font-bold text-[36px] text-[#002F31]">Papayas Studios Legal</h3>
            <p className="max-w-[476px] mt-[16px] text-[14px] font-normal leading-[20px] text-[#002F31]">
               Papayas Studios takes your privacy seriously and is committed to ensuring a smooth experience. The documents below are details of how Papayas Studios manages your data
            </p>
            <div className="mt-10 flex flex-col md:grid md:pl-5 xl:pl-0 md:gap-y-5 xl:gap-5 md:grid-cols-2">
               <Link href="/privacy">
                  <a>
                     <div className="my-5 md:m-0 md:w-[250px] md:h-[150px] bg-[#FCD1CA1F] border-[0.5px] border-[#FF9D8D] rounded-2xl px-[18px] py-[25px] flex flex-row items-center md:items-start md:flex-col md:justify-between ">
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
                     <div className="my-5 md:m-0 md:w-[250px] md:h-[150px] bg-[#FCD1CA1F] border-[0.5px] border-[#FF9D8D] rounded-2xl px-[18px] py-[25px] flex flex-row items-center md:items-start md:flex-col md:justify-between ">
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
                     <div className="my-5 md:m-0 md:w-[250px] md:h-[150px] bg-[#FCD1CA1F] border-[0.5px] border-[#FF9D8D] rounded-2xl px-[18px] py-[25px] flex flex-row items-center md:items-start md:flex-col md:justify-between ">
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
               <Link href="/discalaimer">
                  <a>
                     <div className="my-5 md:m-0 md:w-[250px] md:h-[150px] bg-[#FCD1CA1F] border-[0.5px] border-[#FF9D8D] rounded-2xl px-[18px] py-[25px] flex flex-row items-center md:items-start md:flex-col md:justify-between ">
                        <div className="w-[45px] h-[45px] relative mr-5">
                           <Image
                              src="/assets/discalaimer.png"
                              layout='fill'
                              alt="Notice icon"
                           />
                        </div>
                        <h2 className="font-normal leading-8 text-xl">Discalaimer notice</h2>
                     </div>
                  </a>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default LegalContainer