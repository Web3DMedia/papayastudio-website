import { useEffect, useState } from "react";
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
  const [isFour, setIsFour] = useState<boolean>(false)
  const [isFive, setIsFive] = useState<boolean>(false)

  const myRefOne: any = useRef()
  const myRefTwo: any = useRef()
  const myRefThree: any = useRef()
  const myRefFour: any = useRef()
  const myRefFive: any = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setIsOne(entry.isIntersecting)
    })

    observer.observe(myRefOne.current)
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setIsTwo(entry.isIntersecting)
    })

    observer.observe(myRefTwo.current)
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setIsThree(entry.isIntersecting)
    })

    observer.observe(myRefThree.current)
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setIsFour(entry.isIntersecting)
    })

    observer.observe(myRefFour.current)
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setIsFive(entry.isIntersecting)
    })

    observer.observe(myRefFive.current)
  })


  return (
    <div className="font-body">
      <Head>
        <title>Papayas studio</title>
        <link rel="icon" href="/assets/logo.svg" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <main className="w-full relative h-full overflow-hidden">
        {isModal ? "" : <Navbar setIsMenuOpen={setIsMenuOpen} isOne={isOne} isTwo={isTwo} isThree={isThree} />}
        <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isOne={isOne} isTwo={isTwo} isThree={isThree} />

        {isModal && <Modal isModal={isModal} setIsModal={setIsModal}></Modal>}
        <HeroSection myRefOne={myRefOne} />
        <SectionSeperator />
        <PageIndicator />
        <CreateSection isTwo={isTwo} myRefTwo={myRefTwo} />
        <SectionSeperator />
        <ProductsSection isThree={isThree} myRefThree={myRefThree} />
        <LearnWithPapayaSection setIsModal={setIsModal} isFour={isFour} myRefFour={myRefFour} />
        <BackBoneSection isFive={isFive} myRefFive={myRefFive} />
        <Footer />
      </main>
    </div>
  );
}

export default Home