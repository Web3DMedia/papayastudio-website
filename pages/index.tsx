import {useState} from "react";
import Head from "next/head";
import Navbar from "../components/molecules/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import Menubar from "../components/molecules/Menubar";
import CreateSection from "../components/organisms/CreateSection";
import ProductsSection from "../components/organisms/ProductsSection";
import SectionSeperator from "../components/molecules/SectionSeperator";

/** eslint-ignore react/react-in-jsx-scope */
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <div className="font-body">
      <Head>
        <title>Papayas studio</title>
        <link rel="icon" href="/assets/logo.svg" />
      </Head>

      <main className="w-full relative h-full overflow-hidden">
        <Navbar setIsMenuOpen={setIsMenuOpen}/>
        <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <div>
          <HeroSection/>
          <SectionSeperator/>
          <CreateSection/>
          <SectionSeperator/>
          <ProductsSection/>
        </div>
      </main> 
    </div>
  );
}

export default Home