import Image from "next/image";
import React, { SetStateAction, Dispatch } from "react";
{/*@ts-ignore */ }
import Link from "next/link";
import styled from "styled-components";

import MessageConfirmed from "../../public/assets/lottie/message-confirm.json"

const TextHeader = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 46px;
  padding: 24px 0;
  mix-blend-mode: normal;
  color: var(--MessageSent);
`;
const TextParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  mix-blend-mode: normal;
  color: var(--MessageSentTwo);
  width: 80%;
  margin: auto;
  padding: 0px 0 90px 0;
`;

import MessageSent from "../../public/assets/tick.png";

interface IProps {
  setmessageIsSent: Dispatch<SetStateAction<boolean>>;
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const MessageConfirmation = ({ setmessageIsSent, isModal, setIsModal }: IProps) => {

  const CloseModal = () => {
    document.body.style.overflow = "visible";
    setmessageIsSent(false)
    setIsModal(false)
  }
  return (
    <div className={isModal ? "bg-white w-[340px] sm:w-[664px] px-4 sm:px-16 py-10 rounded-[32px] z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" : "bg-white w-[330px] sm:w-[664px] px-4 sm:px-16 py-10 rounded-[32px] z-20"}>
      <div className="text-center">
        <div
          className="flex justify-end pt-[20px] lg:pt-[25px] pb-[35px] md:pt-[20px] pr-[15px] sm:pr-[0px]"
          onClick={() => CloseModal()}
        >
          <Image src="/assets/close-button.png" width={15} height={15} alt="close-button" />
        </div>
        {<div className="-mb-2">
          <Image
            src={MessageSent}
            width={120}
            height={120}
            objectFit="contain"
          ></Image></div>}
        {/*@ts-ignore */}
        {/* {hide === false && <Player src={MessageConfirmed} background="transparent" style={{ width: "120px", height: "120px" }} autoplay speed={1} keepLastFrame></Player>} */}

        <TextHeader>Message sent</TextHeader>
        <TextParagraph>
          We’ve recieved your message and will be intouch, in the meantime,
          checkout our design assets market place,{" "}
          <Link href="https://blocasset.com/">
            <a target="_blank" className="text-primary1">
              Blocasset
            </a>
          </Link>
        </TextParagraph>
      </div>
    </div>
  );
};

export default MessageConfirmation;
