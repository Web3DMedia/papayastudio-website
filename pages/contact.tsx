import Head from "next/head";
import {useState} from "react";
import Navbar from "../components/molecules/Navbar";
import Menubar from "../components/molecules/Menubar";
import Footer from "../components/organisms/Footer";
import SectionSeperator from "../components/molecules/SectionSeperator";
import ContactSection from "../components/organisms/ContactSection";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <div>
      <Head>
        <title>Papayas studio | Contact Us</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <main className="w-full relative overflow-hidden">
        {/*@ts-ignore */}
        <Navbar setIsMenuOpen={setIsMenuOpen}/>
        <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <div className="pt-20">
          <SectionSeperator/>
          <ContactSection/>
        </div>
        <Footer/>
      </main>
    </div>
  )
}

export default Contact