import React from 'react'
import ContactForm from '../molecules/ContactForm'

const ContactSection = () => {
   return (
      <div className=" min-h-[60vh]  mb-5">
         <div className="bgTransformationOne">
            <div className="bgTransformationOneLeft"/>
            <div className="bgTransformationOneRight"/>
         </div>
         <div className="w-full h-full flex flex-col md:items-center md:justify-center">
            <h3 className="text-[#23262E] font-normal text-xs uppercase mt-4 mb-6 text-center">Get in touch with us</h3>
            <ContactForm/>
         </div>
      </div>
   )
}

export default ContactSection