import {useEffect, useState} from "react";
import Head from "next/head";
import Navbar from "../components/molecules/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import Menubar from "../components/molecules/Menubar";
import Footer from "../components/organisms/Footer";
import BackBoneSection from "../components/organisms/BackBoneSection";
import LearnWithPapayaSection from "../components/organisms/LearnWithPapayaSection";
import CreateSection from "../components/organisms/CreateSection";
import ProductsSection from "../components/organisms/ProductsSection";
import SectionSeperator from "../components/molecules/SectionSeperator";
import PageIndicator from "../components/molecules/PageIndicator";
import Modal from "../components/atoms/Modal";
import { useRef } from 'react'

/** eslint-ignore react/react-in-jsx-scope */
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isModal, setIsModal] = useState<boolean>(false)
  const [isOne, setIsOne] = useState<boolean>(false)
  const [isTwo, setIsTwo] = useState<boolean>(false)
  const [isThree, setIsThree] = useState<boolean>(false)

   const myRefOne: any = useRef()
   const myRefTwo: any = useRef()
   const myRefThree = useRef()

useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) =>{
      const entry = entries[0];
      setIsOne(entry.isIntersecting)
      console.log("entry1", entry)
      console.log("entry.isIntersecting1", entry.isIntersecting)
    })

    observer.observe(myRefOne.current)
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) =>{
      const entry = entries[0];
      setIsTwo(entry.isIntersecting)
      console.log("entry2", entry)
      console.log("entry.isIntersecting2", entry.isIntersecting)
    })

    observer.observe(myRefTwo.current)
  })

    useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) =>{
      const entry = entries[0];
      setIsThree(entry.isIntersecting)
      console.log("entry3", entry)
      console.log("entry.isIntersectin3", entry.isIntersecting)
    })

    observer.observe(myRefThree.current)
  })
  return (
    <div className="font-body">
      <Head>
        <title>Papayas studio</title>
        <link rel="icon" href="/assets/logo.svg" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <main className="w-full relative h-full overflow-hidden">
        { isModal ? "" : <Navbar  setIsMenuOpen={setIsMenuOpen} isOne={isOne} setIsOne={setIsOne} isTwo={isTwo} setIsTwo={setIsTwo} isThree={isThree} setIsThree={setIsThree} />}
        <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        
        { isModal && <Modal setIsModal={setIsModal}></Modal>}
        <HeroSection myRefOne={myRefOne}/>
        <SectionSeperator/>
        <PageIndicator/>
        <CreateSection myRefTwo={myRefTwo}/>
        <SectionSeperator/>
        <ProductsSection myRefThree={myRefThree}/>
        <LearnWithPapayaSection setIsModal={setIsModal}/>
        <BackBoneSection/>
        <Footer/>
      </main> 
    </div>
  );
}

export default Home