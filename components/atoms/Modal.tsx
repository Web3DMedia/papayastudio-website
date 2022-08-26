import Image from 'next/image';
import React, { useState, SetStateAction, Dispatch } from 'react'
import styled from 'styled-components';
import MessageConfirmation from '../molecules/MessageConfirmation';
import ReCAPTCHA from "react-google-recaptcha";

interface IProps {
  setIsModal: Dispatch<SetStateAction<boolean>>
  isModal: boolean

}

const Modal = ({ setIsModal, isModal }: IProps) => {
  const [userMail, setUserMail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [messageIsSent, setmessageIsSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      userMail.length === 0 ||
      userName.length === 0 ||
      recaptchaRef === null
    ) {
      setError("Please fill all the fields");
    } else {
      setError("");
      setUserMail("");
      setUserName("");
      console.log(recaptchaRef)
      console.log(userMail, userName);
      console.log("Submitted");
      setmessageIsSent(true);
    }
  }

  const RemoveModal = () => {
    document.body.style.overflow = "visible";
    setIsModal(false)
  }
  const recaptchaRef = React.createRef();
  const TEST_SITE_KEY = "6LcsiIMhAAAAAFc9EBIHi7WfbTNYgHqvn7mnOu25"

  return (
    <FormContainer>
      {messageIsSent === false && (
        <div className="bg-white w-[330px] sm:w-[664px] px-8 sm:px-16 py-10 rounded-[16px] md:rounded-[32px] z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div>
            <div className="text-left">
              <div className='flex justify-end pb-[10px] cursor-pointer'>
                <Image src="/assets/close-button.png" width={15} height={15} onClick={() => RemoveModal()} alt="close-button" />
              </div>
              <h2 className="text-[#002F31] text-[30px] md:text-[40px] font-bold leading-[46px]">
                Join our Waitlist
              </h2>
              <p className="text-[#4A5567] text-[16px] font-normal leading-[16px] pt-5 w-full md:w-10/12">
                Be on our waitlist to get to be the first to enroll when we start
                the academy, only limited slots available
              </p>
            </div>
            <form className="mt-[33px]" onSubmit={handleSubmit}>
              <div className="form-group flex flex-col">
                <label
                  htmlFor="userName"
                  className="mb-2 text-[#4A5567] text-[14px] font-bold"
                >
                  Full name
                </label>
                <Input
                  className="h-[50px] sm:h-[56px] text-[14px] md:text-[16px]"
                  name="userName"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                />

              </div>
              <div className="form-group flex flex-col my-5">
                <label
                  htmlFor="userMail"
                  className="mb-2 text-[#4A5567] text-[14px] font-bold"
                >
                  Email address
                </label>
                <Input
                  className="h-[50px] sm:h-[56px] text-[14px] md:text-[16px]"
                  name="userMail"
                  value={userMail}
                  onChange={(e) => setUserMail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              {/*@ts-ignore */}
              <ReCAPTCHA sitekey={TEST_SITE_KEY} ref={recaptchaRef} />

              {error && <h2 className="text-red-700 pt-2">{error}</h2>}
              <button
                type="submit"
                className="mt-[24px] bg-[#FF6661] w-full md:w-[204px] cursor-pointer py-3 md:py-5 text-[#FFFFFF] font-bold text-[16px] rounded-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
      {/*@ts-ignore */}
      {messageIsSent === true && <MessageConfirmation setmessageIsSent={setmessageIsSent} isModal={isModal} setIsModal={setIsModal}></MessageConfirmation>}
    </FormContainer>
  );
};

const FormContainer = styled.div`
position: fixed;
overflow:scroll;
background: rgba(0, 0, 0, 0.16);
backdrop-filter: blur(8px);
width:100%;
height:100%;
z-index: 15;
&::-webkit-scrollbar {
  width: 0;
`;

const Input = styled.input`
  border: 1px solid #e3e8ef;
  padding-left: 10px;
  outline: none;
  border-radius: 12px;
  font-size: 18px;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 4px #e1e1fe;
    transition: all 0.1s ease-out;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--LearnPapayaText2);
  }
`;


export default Modal