import {useState} from 'react'
import styled from 'styled-components'

const ContactForm = () => {
   const [userMail, setUserMail] = useState<string>("")
   const [userMeassage, setUserMeassage] = useState<string>("")
   const [error, setError] = useState<string>("")

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (userMail.length === 0 || userMeassage.length === 0) {
         setError("Please fill all the fields")
      } else {
         setError("")
         console.log("Submitted")
      }
   }

   return (
      <div className="bg-white md:w-[600px]  xl:w-[650px] mds:h-[680px] px-10 py-5 rounded-t-[32px]">
         <div className="text-left">
            <h2 className="text-[#002F31] text-[40px] font-bold leading-[46px]">Contact Us</h2>
            <p className="text-[#4A5567] text-[16px] font-normal leading-[16px]">Send us a message</p>
         </div>
         <form className="mt-[33px]" onSubmit={handleSubmit}>
            <div className="form-group flex flex-col">
               <label htmlFor="userMail" className='mb-2 text-[#4A5567] text-[14px] font-bold'>Email Address</label>
               <Input 
                  className="h-[50px] sm:h-[56px] mb-2 text-[14px] md:text-[16px]"
                  name="userMail"
                  value={userMail}
                  onChange={(e) => setUserMail(e.target.value)}
               />
               <p className="text-[#9CA3AF] text-xs font-medium">Tell us your email adderess so we can follow up!</p>
            </div>
            <div className="form-group flex flex-col mt-6">
               <label htmlFor="userMessage" className='mb-2 text-[#4A5567] text-[14px] font-bold'>Message</label>
               <MessageArea 
                  className="h-[220px] md:h-[209px] mb-2 text-[14px]  md:text-[16px]"
                  name="userMessage"
                  value={userMeassage}
                  onChange={(e) => setUserMeassage(e.target.value)}
                  placeholder="Type your message here..."
               ></MessageArea>
            </div>
            {error && <h2 className="text-red-700 mt-5">{error}</h2>}
            <button type='submit' className="mt-[30px] bg-[#FF6661] w-full md:w-3/6 cursor-pointer py-3 md:py-5 text-[#FFFFFF] font-bold text-[16px] rounded-xl">
               Send Message
            </button>
         </form>
      </div>
   )
}

const Input = styled.input`
   border: 1px solid #E3E8EF;
   padding-left: 10px;
   outline: none;
   border-radius: 12px;
   font-size: 18px;

   &:hover, &:focus {
      box-shadow: 0px 0px 0px 4px #E1E1FE;
      transition: all 0.1s ease-out;
   }
`

const MessageArea = styled.textarea`
   border: 1px solid #E3E8EF;
   padding: 10px;
   outline: none;
   border-radius: 12px;
   overflow-y: scroll;

   resize: none;
   

   &:hover, &:focus {
      box-shadow: 0px 0px 0px 4px #E1E1FE;
      transition: all 0.1s ease-out;
   }
`

export default ContactForm