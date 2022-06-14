import Head from "next/head";
import {useState} from "react";
import Navbar from "../components/molecules/Navbar";
import Menubar from "../components/molecules/Menubar";
import SectionSeperator from "../components/molecules/SectionSeperator";
import Footer from "../components/organisms/Footer";
import CookiePolicyContiner from "../components/organisms/CookiePolicyContainer";

const Cookie = () => {
const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
   return (
      <div>
         <Head>
            <title>Papayas studio | Cookie Policy</title>
            <link rel="icon" href="/assets/logo.svg" />
         </Head>
         <main className="w-full relative overflow-hidden">
            <Navbar setIsMenuOpen={setIsMenuOpen}/>
            <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <div className="pt-20">
               <SectionSeperator/>
               <CookiePolicyContiner/>
            </div>
            <Footer/>
         </main>
      </div>
   )
}

export default Cookie