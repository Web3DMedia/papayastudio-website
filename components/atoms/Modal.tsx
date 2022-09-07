import Image from 'next/image';
import React, { useState, SetStateAction, Dispatch, useCallback } from 'react'
import styled from 'styled-components';
import MessageConfirmationTwo from '../molecules/MessageConfirmationTwo';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Script from 'next/script';
import axios from 'axios';

interface IProps {
  setIsModal: Dispatch<SetStateAction<boolean>>
  isModal: boolean

}

const Modal = ({ setIsModal, isModal }: IProps) => {
  const [userMail, setUserMail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [messageIsSent, setmessageIsSent] = useState<boolean>(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState<boolean>(false);


  // const submitEnquiryForm = (gReCaptchaToken: string) => {
  //   fetch("/api/enquiry", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: userName,
  //       email: userMail,
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

  const addToWaitlist = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    if (userMail.trim() === "") {
      setError("Please fill all the fields");
      return true;
    }
    if (userName.trim() === "") {
      return true;
    }
    setLoading(true);
    axios
      .post("/api/waitlist/", { email: userMail, name: userName })
      .then((res) => {
        setUserMail("");
        setUserName("");
        setmessageIsSent(true);
      })
      .catch((err) => {
        if (err?.message === "Request failed with status code 500") {
          setmessageIsSent(true);
          return;
        }

        setError(
          err.response.data?.message ?? "Something went wrong! try again later"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // const handleSumitForm = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     if (!executeRecaptcha) {
  //       console.log("Execute recaptcha not yet available");
  //       return;
  //     }
  //     executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
  //       console.log(gReCaptchaToken, "response Google reCaptcha server");
  //       submitEnquiryForm(gReCaptchaToken);
  //     });
  //   },
  //   [executeRecaptcha]
  // );

  const RemoveModal = () => {
    document.body.style.overflow = "visible";
    setIsModal(false)
  }
  return (
    <FormContainer>
      {messageIsSent === false && (
        <div className="bg-white w-[330px] sm:w-[664px] px-8 sm:px-16 py-10 rounded-[16px] md:rounded-[32px] z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div>
            <div className="text-left">
              <div className='flex justify-end pb-[10px]'>
                <Image src="/assets/close-button.png" width={15} height={15} onClick={() => RemoveModal()} alt="close-button" />
              </div>
              <h2 className="text-[#002F31] text-[30px] md:text-[40px] font-bold leading-[46px]">
                Join our Waitlist
              </h2>
              <p className="text-[#4A5567] text-[16px] font-normal leading-[24px] pt-5 w-full md:w-10/12">
                Be on our waitlist to get to be the first to enroll when we start
                the academy, only limited slots available
              </p>
            </div>
            <form className="mt-[33px]" onSubmit={addToWaitlist}>
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
                  type="email"
                  onChange={(e) => setUserMail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>


              {error && <h2 className="text-red-700 pt-2">{error}</h2>}
              {notification && <p className="text-red-700 pt-2">{notification}</p>}
              <button
                type="submit"
                className="mt-[24px] bg-[#FF6661] w-full md:w-[204px] cursor-dark py-3 md:py-5 text-[#FFFFFF] font-bold text-[16px] rounded-xl"
              >
              Join Waitlist
              </button>
            </form>
          </div>
        </div>
      )}
      {/*@ts-ignore */}
      {messageIsSent === true && <MessageConfirmationTwo setmessageIsSent={setmessageIsSent} isModal={isModal} setIsModal={setIsModal}></MessageConfirmationTwo>}
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" strategy="beforeInteractive"
      />
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


