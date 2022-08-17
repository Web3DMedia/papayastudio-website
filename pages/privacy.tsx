import Head from "next/head";
import {useState} from "react";
import Navbar from "../components/molecules/Navbar";
import Menubar from "../components/molecules/Menubar";
import SectionSeperator from "../components/molecules/SectionSeperator";
import Footer from "../components/organisms/Footer";
import PrivacyPolicyContainer from "../components/organisms/PrivacyPolicyContainer";

const Privacy = () => {
const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
   return (
      <div>
         <Head>
            <title>Papayas studio | Privacy Policy</title>
            <link rel="icon" href="/assets/logo.svg" />
         </Head>
         <main className="w-full relative overflow-hidden">
            {/*@ts-ignore */}
            <Navbar setIsMenuOpen={setIsMenuOpen}/>
            <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <div className="pt-20">
               <SectionSeperator/>
               <PrivacyPolicyContainer/>
            </div>
            <Footer/>
         </main>
      </div>
   )
}

export default Privacy