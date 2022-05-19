import {useState} from "react";
import Head from "next/head";
import Navbar from "../components/molecules/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import Menubar from "../components/molecules/Menubar";
import Footer from "../components/organisms/Footer";
import BackBoneSection from "../components/organisms/BackBoneSection";

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
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <HeroSection/>
      </main> 


      <BackBoneSection></BackBoneSection>

      <Footer></Footer>
    </div>
  );
}

export default Home