import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/molecules/Navbar";
import Menubar from "../components/molecules/Menubar";
import SectionSeperator from "../components/molecules/SectionSeperator";
import Footer from "../components/organisms/Footer";
import PrivacyPolicyContainer from "../components/organisms/PrivacyPolicyContainer";
import MetaTag from "../components/atoms/MetaTag";

const Privacy = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
   return (
      <div>
         <MetaTag tagName='Privacy Policy' />
         <main className="w-full relative overflow-hidden">
            {/*@ts-ignore */}
            <Navbar setIsMenuOpen={setIsMenuOpen} />
            {/*@ts-ignore */}
            <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="pt-20">
               <SectionSeperator />
               <PrivacyPolicyContainer />
            </div>
            <Footer />
         </main>
      </div>
   )
}

export default Privacy