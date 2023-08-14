import React from 'react'
import BgTransfromation from '../atoms/BgTransfromation'
import ContactForm from '../molecules/ContactForm'
import BookASessionForm from '../molecules/BookASessionForm'

const BookASession = () => {
    return (
        <div className=" min-h-[60vh]  mb-5">
            <BgTransfromation></BgTransfromation>
            <div className="w-full h-full flex flex-col md:items-center md:justify-center">
                <h3 className="text-[#23262E] font-normal text-xs uppercase mt-4 mb-6 text-center">Get in touch with us</h3>
                <BookASessionForm></BookASessionForm>
            </div>
        </div>
    )
}

export default BookASession