import Image from 'next/image';
import React, { useState, SetStateAction, Dispatch, useCallback } from 'react'
import styled from 'styled-components';
import MessageConfirmationTwo from '../molecules/MessageConfirmationTwo';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Script from 'next/script';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

interface IProps {
  setIsModal: Dispatch<SetStateAction<boolean>>
  isModal: boolean,
  userTime?: string,
  userDate?: string,
  setUserTime?: Dispatch<SetStateAction<string>>,
  setUserDate?: Dispatch<SetStateAction<string>>,
  bookasession?: any,
  error?: string,
  messageIsSent?: boolean,
  setmessageIsSent?: Dispatch<SetStateAction<boolean>>,
  loading?: boolean

}

const Modal = ({ setIsModal, isModal, messageIsSent, userTime, userDate, error, setmessageIsSent, setUserDate, setUserTime, bookasession, loading }: IProps) => {

  // const [error, setError] = useState<string>("");
  // const [messageIsSent, setmessageIsSent] = useState<boolean>(false);
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const [notification, setNotification] = useState("");


  // const submitEnquiryForm = (gReCaptchaToken: string) => {
  //   fetch("/api/enquiry", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: userName,
  //       email: userTime,
  //       gRecaptchaToken: gReCaptchaToken,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res, "response from backend");
  //       if (res?.status === "success") {
  //         setNotification(res?.message);
  //       } else {
  //         setNotification(res?.message);
  //       }
  //     });
  // };

  // const addToWaitlist = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   setError("");

  //   if (userTime.trim() === "") {
  //     setError("Please fill all the fields");
  //     return true;
  //   }
  //   if (userName.trim() === "") {
  //     return true;
  //   }
  //   setLoading(true);
  //   axios
  //     .post("/api/waitlist/", { email: userTime, name: userName })
  //     .then((res) => {
  //       setUserTime("");
  //       setUserName("");
  //       setmessageIsSent(true);
  //     })
  //     .catch((err) => {
  //       if (err?.message === "Request failed with status code 500") {
  //         setmessageIsSent(true);
  //         return;
  //       }

  //       setError(
  //         err.response.data?.message ?? "Something went wrong! try again later"
  //       );
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };


  const RemoveModal = () => {
    document.body.style.overflow = "visible";
    setIsModal(false)
  }
  return (
    <FormContainer>
      {messageIsSent === false && (
        <div className="bg-white w-[330px] sm:w-[664px] px-8 sm:px-16 py-10 rounded-[16px] md:rounded-[32px] z-90 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div>
            <div className="text-left">
              <div className='flex justify-end pb-[10px]'>
                <Image src="/assets/close-button.png" width={15} height={15} onClick={() => RemoveModal()} alt="close-button" />
              </div>
              <h2 className="text-[#002F31] text-[30px] md:text-[40px] font-bold leading-[46px]">
                Wait a sec!
              </h2>
              <p className="text-[#4A5567] text-[16px] font-normal leading-[24px] pt-5 w-full md:w-10/12">
                Pleas select the date and time you will like to use our Studio
              </p>
            </div>
            <form className="mt-[33px]">
              <div className="form-group flex flex-col">
                <label
                  htmlFor="userTime"
                  className="mb-2 text-[#4A5567] text-[14px] font-bold"
                >
                  Time
                </label>
                <Input
                  className="h-[50px] sm:h-[56px] text-[14px] md:text-[16px]"
                  name="userTime"
                  type="time"
                  value={userTime}
                  onChange={(e) => setUserTime(e.target.value)}
                  placeholder="Enter your name"
                />

              </div>
              <div className="form-group flex flex-col my-5">
                <label
                  htmlFor="userDate"
                  className="mb-2 text-[#4A5567] text-[14px] font-bold"
                >
                  Date
                </label>
                <Input
                  className="h-[50px] sm:h-[56px] text-[14px] md:text-[16px]"
                  name="userDate"
                  value={userDate}
                  type="date"
                  onChange={(e) => setUserDate(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>


              {error && <h2 className="text-red-700 pt-2">{error}</h2>}
              {notification && <p className="text-red-700 pt-2">{notification}</p>}
              <button
                type="submit"
                onClick={bookasession}
                className="mt-[24px] bg-[#FF6661] w-full md:w-[204px] cursor-dark py-3 md:py-5 text-[#FFFFFF] font-bold text-[16px] rounded-xl"
              >
                {loading ? (
                  <ClipLoader size={20} color="#FFF" />
                ) : (
                  "Book Session"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      {/*@ts-ignore */}
      {messageIsSent === true && <MessageConfirmationTwo setmessageIsSent={setmessageIsSent} isModal={isModal} setIsModal={setIsModal}></MessageConfirmationTwo>}
      {/* <Script
        src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" strategy="beforeInteractive"
      /> */}
    </FormContainer>
  );
};

const FormContainer = styled.div`
position: fixed;
overflow:scroll;
background: rgba(0, 0, 0, 0.16);
backdrop-filter: blur(8px);
width:100%;
top:0;
height:100%;
z-index: 50;
&::-webkit-scrollbar {
  width: 0;
`;

const Input = styled.input`
  border: 1px solid #e3e8ef;
  padding:0 10px;
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

const InputDateTime = styled.input`
`

export default Modal


