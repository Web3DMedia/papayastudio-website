import Image from "next/image";
import React from "react";
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
  padding: 9px 0 174px 0;
`;

import MessageSent from "../../public/assets/message-sent.png";

const MessageConfirmation = () => {
  return (
    <div className="text-center pt-[77px]">
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
  );
};

export default MessageConfirmation;
