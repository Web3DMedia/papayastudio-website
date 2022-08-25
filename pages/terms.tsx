import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/molecules/Navbar";
import Menubar from "../components/molecules/Menubar";
import SectionSeperator from "../components/molecules/SectionSeperator";
import Footer from "../components/organisms/Footer";
import LegalContainer from "../components/organisms/LegalContainer";
import TermsContainer from "../components/organisms/TermsContainer";
import MetaTag from "../components/atoms/MetaTag";

const Terms = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
   return (
      <div>
         <MetaTag tagName='Terms & Condition' />
         <main className="w-full relative overflow-hidden">
            {/*@ts-ignore */}
            <Navbar setIsMenuOpen={setIsMenuOpen} />
            {/*@ts-ignore */}
            <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="pt-20">
               <SectionSeperator />
               <TermsContainer />
            </div>
            <Footer />
         </main>
      </div>
   )
}

export default Terms