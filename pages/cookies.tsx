import { useState } from "react";
import Navbar from "../components/molecules/Navbar";
import Menubar from "../components/molecules/Menubar";
import SectionSeperator from "../components/molecules/SectionSeperator";
import Footer from "../components/organisms/Footer";
import CookiePolicyContiner from "../components/organisms/CookiePolicyContainer";
import MetaTag from "../components/atoms/MetaTag";

const Cookie = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
   return (
      <div>

         <MetaTag title='Cookie Policy' />
         <main className="w-full relative overflow-hidden">
            {/*@ts-ignore */}
            <Navbar setIsMenuOpen={setIsMenuOpen} />
            {/*@ts-ignore */}
            <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="pt-20">
               <SectionSeperator />
               <CookiePolicyContiner />
            </div>
            <Footer />
         </main>
      </div>
   )
}

export default Cookie