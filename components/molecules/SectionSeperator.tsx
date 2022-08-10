import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";

const Imgs = styled.div`
  width: 131px;
  padding: 20px 20px;
  border: 1px solid var(--PrimaryTwo);
  border-radius: 50%;
  @media (max-width: 800px) {
    padding: 10px;
  }
`;
const Line = styled.div`
  background: white;
  border-top: 0.8px solid #ff9d8d;
  padding: 1px;
  height: 1px;
  width: 400px;
  @media (max-width: 1200px) {
    width: 350px;
  }
`;

const SectionSeperator = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      className="flex justify-center items-center reveal fade-bottom"
      data-aos="fade-in"
    >
      <Line></Line>
      <Imgs className="flex justify-center items-center">
        <Image
          src="/assets/seperator-papay.png"
          width={130}
          height={120}
          objectFit="cover"
          alt="image"
        />
      </Imgs>
      <Line></Line>
    </div>
  );
};

export default SectionSeperator;
