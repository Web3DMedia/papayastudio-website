import Image from "next/image";
import React, { SetStateAction, Dispatch } from "react";
import Link from "next/link";
import styled from "styled-components";

const TextHeader = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 46px;
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
  padding: 9px 0 117px 0;
`;

import MessageSent from "../../public/assets/message-sent.png";

interface IProps {
  setmessageIsSent: Dispatch<SetStateAction<boolean>>;
}

const MessageConfirmation = ({ setmessageIsSent }: IProps) => {
  return (
    <div className="bg-white w-[330px] sm:w-[664px] px-4 sm:px-16 py-10 rounded-[32px] z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-center">
        <div
          className="flex justify-end cursor-pointer pt-[65px] pb-[15px]"
          onClick={() => setmessageIsSent(false)}
        >
          <Image src="/assets/close-button.png" width={15} height={15} />
        </div>
        <Image
          src={MessageSent}
          width={120}
          height={120}
          objectFit="contain"
        ></Image>
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
