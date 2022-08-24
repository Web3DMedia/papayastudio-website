import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Select = styled.div`
  border: 1px solid #e3e8ef;
  padding: 16px 0px 16px 10px;
  outline: none;
  color: #062638;
  border-radius: 12px;

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
const OptionContainer = styled.div`
  margin: 5px 0 0 0;
  border: 1px solid #f3f4f6;
  box-shadow: 0px 4px 6px -1px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.1);
  border-radius: 8px;
  background: var(--footerText3);
`;
const Option = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 14px 0 14px 16px;
  color: #374151;
  &:hover {
    background: #f9fafb;
  }
  &:hover .dropdownarrow {
    opacity: 1;
  }
`;
const DropdownMenu = ({ setUserDropdown, userDropdown, options }) => {

  const [optionSelect, setOptionSelect] = useState<boolean>(false);

  const active = (index: any) => {
    if (userDropdown === index) {
      return setUserDropdown(index);
    }
    setUserDropdown(index);
  };

  const SelectOption = (index: any) => {
    active(index)
    setOptionSelect(false)
  }
  return (
    <div className="relative">
      <div className="relative">
        {options.map((option: any, index: any) => (
          <div onClick={() => setOptionSelect(!optionSelect)} key={index}>
            {userDropdown === option.name &&
              <Select className="text-[14px]">{option.name}</Select>}
            <div className="absolute top-1/4 right-[21px]">
              <Image
                src="/assets/dropdown-arrow.png"
                width={10}
                height={5}
                objectFit="contain"
                alt="dropdown-arrow"
                className={optionSelect ? "rotate-0" : "rotate-180"}
              />
            </div>
          </div>
        ))}
      </div>
      {
        optionSelect && <OptionContainer className="absolute overflow-y-scroll customInfoWrapper h-[135px] sm:h-[180px] z-10 bg-white w-full">
          {options.map((option: any, index: any) => (
            <Option className="flex justify-between pr-[16px]" onClick={() => SelectOption(option.name)} key={index}>
              <h1>{option.name}</h1>
              <Image
                src="/assets/dropdown-select.png"
                width={13}
                height={9}
                objectFit="contain"
                alt="dropdown-select"
                className="dropdownarrow opacity-0"
              />
            </Option>
          ))}
        </OptionContainer>
      }
    </div>
  );
};

export default DropdownMenu;
