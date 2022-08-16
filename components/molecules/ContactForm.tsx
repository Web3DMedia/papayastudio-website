import { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "../atoms/DropdownMenu";
import MessageConfirmation from "./MessageConfirmation";
import axios from "axios"

const ContactForm = () => {
     const options = [
    { name: "2D Design/Animation" },
    { name: "3D Animation" },
    { name: "Motion Graphics Design" },
    { name: "Video Production" },
    { name: "Training" },
    { name: "Rendering Farm" },
    { name: "Content Development" },
    { name: "Other" },
  ];
  const [userMail, setUserMail] = useState<string>("");
  const [userDropdown, setUserDropdown] = useState<any>("2D Design/Animation");
  const [userMessage, setUserMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [messageIsSent, setmessageIsSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);


const addToWaitlist = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    if (userMail.trim() === "") {
      setError("Please fill all the fields");
      return true;
    } 
    if (userDropdown.trim() === "") {
      return true;
    }
  if (userMessage.trim() === "") {
      setError("Please fill all the fields");
      return true;
  }
    setLoading(true);
    axios
      .post("/api/mail", { email: userMail, message: userMessage, service: userDropdown })
      .then((res) => {
        setUserMail("");
        setUserDropdown("");
        setUserMessage("");
        setmessageIsSent(true);
        window.scrollTo(0, 0);
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

  return (
    <FormContainer className="bg-white md:w-[600px]  xl:w-[650px] mds:h-[680px] px-4 sm:px-10 py-5 rounded-t-[32px]">
      {messageIsSent === false && (
        <div>
          <div className="text-left">
            <h2 className="text-[#002F31] text-[40px] font-bold leading-[46px] pt-10">
              Contact Us
            </h2>
            <p className="text-[#4A5567] text-[16px] font-normal leading-[16px]">
              Send us a message
            </p>
          </div>
          <form className="mt-[33px]" onSubmit={addToWaitlist}>
            <div className="form-group flex flex-col">
              <label
                htmlFor="userMail"
                className="mb-2 text-[#4A5567] text-[14px] font-bold"
              >
                Email Address
              </label>
              <Input
                className="h-[50px] sm:h-[56px] mb-2 text-[14px] md:text-[16px]"
                name="userMail"
                value={userMail}
                onChange={(e) => setUserMail(e.target.value)}
                placeholder="Enter your email"
              />
              <p className="text-[#9CA3AF] text-xs font-medium">
                Tell us your email adderess so we can follow up!
              </p>
            </div>

            <div className="form-group flex flex-col mt-6">
              <label
                htmlFor="userDropdown"
                className="mb-2 text-[#4A5567] text-[14px] font-bold"
              >
                Reason for contacting us
              </label>
              <DropdownMenu
                setUserDropdown={setUserDropdown}
                userDropdown={userDropdown}
                options={options}
              ></DropdownMenu>
            </div>

            <div className="form-group flex flex-col mt-6">
              <label
                htmlFor="userMessage"
                className="mb-2 text-[#4A5567] text-[14px] font-bold"
              >
                Message
              </label>
              <MessageArea
                className="h-[220px] md:h-[209px] mb-2 text-[14px]  md:text-[16px]"
                name="userMessage"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message here..."
              ></MessageArea>
            </div>
            {error && <h2 className="text-red-700">{error}</h2>}
            <button
              type="submit"
              className="mt-[24px] mb-[84px] bg-[#FF6661] w-full md:w-3/6 cursor-pointer py-3 md:py-5 text-[#FFFFFF] font-bold text-[16px] rounded-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      )}

      {messageIsSent === true && <MessageConfirmation  setmessageIsSent={setmessageIsSent}></MessageConfirmation>}
    </FormContainer>
  );
};

const FormContainer = styled.div`
  @media (max-width: 600px) {
    border: 1px solid #feeeec;
    border-radius: 32px 32px 0px 0px;
  }
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

const Select = styled.select`
  appearance: none;
  border: 1px solid #e3e8ef;
  padding-left: 10px;
  outline: none;
  color: #062638;
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

const Option = styled.option`
  appearance: none;
  padding: 24px;
`;

const MessageArea = styled.textarea`
  border: 1px solid #e3e8ef;
  padding: 10px;
  outline: none;
  border-radius: 12px;
  overflow-y: scroll;

  resize: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--LearnPapayaText2);
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 4px #e1e1fe;
    transition: all 0.1s ease-out;
  }
`;

export default ContactForm;
