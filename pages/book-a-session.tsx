import { useState } from "react";

import Navbar from "../components/molecules/Navbar";
import Menubar from "../components/molecules/Menubar";
import Footer from "../components/organisms/Footer";
import SectionSeperator from "../components/molecules/SectionSeperator";
import MetaTag from "../components/atoms/MetaTag";
import BookASession from "../components/organisms/BookASesstion";
import Modal from "../components/atoms/Modal";

const BookaSession = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    return (
        <div>
            <MetaTag title='Book a Session' />
            <main className="w-full relative overflow-hidden">
                <Navbar setIsMenuOpen={setIsMenuOpen} />
                {/*@ts-ignore */}
                <Menubar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <div className="pt-20">
                    <SectionSeperator />
                    <BookASession></BookASession>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default BookaSession