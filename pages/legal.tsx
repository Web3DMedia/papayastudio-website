import Head from "next/head";
import {useState} from "react";
import Navbar from "../components/molecules/Navbar";
import Menubar from "../components/molecules/Menubar";
import SectionSeperator from "../components/molecules/SectionSeperator";
import Footer from "../components/organisms/Footer";
import LegalContainer from "../components/organisms/LegalContainer";

const Legal = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
   return (
      <div>
         <Head>
            <title>Papayas studio | Legal</title>
            <link rel="icon" href="/assets/logo.svg" />
         </Head>
         <main className="w-full relative overflow-hidden">
            <Navbar setIsMenuOpen={setIsMenuOpen}/>
            <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <div className="pt-20">
               <SectionSeperator/>
               <LegalContainer/>
            </div>
            <Footer/>
         </main>
      </div>
   )
}

export default Legal