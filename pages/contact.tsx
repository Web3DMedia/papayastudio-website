import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/molecules/Navbar";
import Menubar from "../components/molecules/Menubar";
import Footer from "../components/organisms/Footer";
import SectionSeperator from "../components/molecules/SectionSeperator";
import ContactSection from "../components/organisms/ContactSection";
import MetaTag from "../components/atoms/MetaTag";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <div>
      <MetaTag tagName='Contact Us' />
      <main className="w-full relative overflow-hidden">
        <Navbar setIsMenuOpen={setIsMenuOpen} />
        {/*@ts-ignore */}
        <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="pt-20">
          <SectionSeperator />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Contact