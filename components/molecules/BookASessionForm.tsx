import { useEffect, useState } from "react";
import styled from "styled-components";
import DropdownMenu from "../atoms/DropdownMenu";
import MessageConfirmation from "./MessageConfirmation";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Modal from "../atoms/Modal";

const BookASessionForm = () => {
    const options = [
        { name: "Studio Rental" },
        { name: "Video Podcast Production" },
    ];

    const rentalPackages = [
        { name: "1 hour" },
        { name: "5 hours" },
        { name: "10 hours" }
    ];
    const videoPackages = [
        { name: "2 hours" },
        { name: "4 hours" },
        { name: "6 hours" },
        { name: "8 hours" },
    ];
    //opening hours 9-5 mon fri
    const [userName, setUserName] = useState<string>("");
    const [userPhone, setUserPhone] = useState<string>("");
    const [userMail, setUserMail] = useState<string>("");
    const [userServiceDescription, setUserServiceDescription] = useState<string>("Studio Rental");
    const [userPackages, setUserPackages] = useState<string>("");
    const [userMessage, setUserMessage] = useState<string>("");
    const [userPrice, setUserPrice] = useState<string>("350");
    const [userTime, setUserTime] = useState<string>("");
    const [userDate, setUserDate] = useState<string>("");

    const [error, setError] = useState<string>("");
    const [messageIsSent, setmessageIsSent] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false)

    const bookasession = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const config = {
                headers: {
                    "x-auth-key": `${process.env.NEXT_PUBLIC_X_AUTH_KEY}`,
                },
            };
            const formData = {
                name: userName,
                email: userMail,
                phone_number: userPhone,
                interest: userServiceDescription,
                package: userPackages,
                session_start_time: userTime,
                session_date: userDate,
            };
            console.log(formData)
            if (userTime === "" || userDate === "") {
                setError("Please fill all the fields");
            } else {

            }
            await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/papayas/booking`,
                formData,
                config
            );
            setmessageIsSent(true)
            setLoading(false);
            setUserName("")
            setUserMail("")
            setUserPhone("")
            setUserDate("")
            setUserServiceDescription("Studio Rentals")
            setUserPrice("350")
            setUserPackages("2 hours")
            setUserTime("")

        } catch (error) {
            setLoading(false);
        }
    };
    const Modals = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (userName === "" || userMail === "" || userServiceDescription === "" || userPackages === "" || userPrice === "") {
            setError("Please fill all the fields");
        } else {
            document.body.style.overflow = "hidden";
            setIsModal(true)
        }
    }
    useEffect(() => {
        if (userServiceDescription === "Studio Rental") {
            setUserPackages("1 hour")
        } else {
            setUserPackages("2 hours")
        }
    }, [userServiceDescription])
    return (
        <>

            {isModal && <Modal loading={loading} isModal={isModal} messageIsSent={messageIsSent} setmessageIsSent={setmessageIsSent} error={error} setIsModal={setIsModal} userTime={userTime} userDate={userDate} setUserDate={setUserDate} setUserTime={setUserTime} bookasession={bookasession}></Modal>}
            <FormContainer className="bg-white md:w-[600px]  xl:w-[650px] px-4 sm:px-10 py-5 rounded-t-[32px]">
                {(
                    <div>
                        <div className="text-left">
                            <h2 className="text-[#002F31] text-[40px] font-bold leading-[46px] pt-10">
                                Book a Studio Session
                            </h2>
                            <p className="text-[#4A5567] text-[16px] font-normal leading-[24px]">
                                Book your podcast recording session today. Each booking is per day; feel free to book multiple days or reach out with any questions. For editing services, please contact us for a personalized quote
                            </p>
                        </div>
                        <form className="mt-[33px]">
                            <div className="form-group flex flex-col mt-6">
                                <label
                                    htmlFor="userName"
                                    className="mb-2 text-[#4A5567] text-[14px] font-bold"
                                >
                                    Name
                                </label>
                                <Input
                                    className="h-[50px] sm:h-[56px] mb-2 text-[14px] md:text-[16px]"
                                    name="userName"
                                    value={userName}
                                    type="name"
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group flex flex-col mt-6">
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
                                    type="email"
                                    onChange={(e) => setUserMail(e.target.value)}
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group flex flex-col mt-6">
                                <label
                                    htmlFor="userPhone"
                                    className="mb-2 text-[#4A5567] text-[14px] font-bold"
                                >
                                    Phone Number
                                </label>
                                <Input
                                    className="h-[50px] sm:h-[56px] mb-2 text-[14px] md:text-[16px]"
                                    name="userPhone"
                                    value={userPhone}
                                    type="number"
                                    onChange={(e) => setUserPhone(e.target.value)}
                                    placeholder="Enter your number"
                                />
                            </div>


                            <div className="form-group flex flex-col mt-6">
                                <label
                                    htmlFor="userServiceDescription"
                                    className="mb-2 text-[#4A5567] text-[14px] font-bold"
                                >
                                    Service Description
                                </label>
                                <DropdownMenu
                                    setUserDropdown={setUserServiceDescription}
                                    userDropdown={userServiceDescription}
                                    options={options}
                                ></DropdownMenu>
                            </div>

                            <div className="form-group flex flex-col mt-6">
                                <label
                                    htmlFor="userDropdown"
                                    className="mb-2 text-[#4A5567] text-[14px] font-bold"
                                >
                                    Package
                                </label>
                                <DropdownMenu
                                    setUserDropdown={setUserPackages}
                                    userDropdown={userPackages}
                                    options={userServiceDescription === "Studio Rental" ? rentalPackages : videoPackages}
                                ></DropdownMenu>
                            </div>
                            <div className="form-group flex flex-col mt-6">
                                <label
                                    htmlFor="userPrice"
                                    className="mb-2 text-[#4A5567] text-[14px] font-bold"
                                >
                                    Price
                                </label>
                                {userServiceDescription === "Studio Rental" && <Input
                                    className="h-[50px] sm:h-[56px] mb-2 text-[14px] md:text-[16px] text-[#6A7D88]"
                                    name="userPrice"
                                    value={`₦${userPackages === "1 hour" && " 100,000" || userPackages === "5 hours" && " 480,00" || userPackages === "10 hours" && " 980,00"}`}
                                    type="text"
                                    readOnly
                                />}
                                {userServiceDescription === "Video Podcast Production" &&
                                    <Input
                                        className="h-[50px] sm:h-[56px] mb-2 text-[14px] md:text-[16px] text-[#6A7D88]"
                                        name="userPrice"
                                        value={`₦${userPackages === "2 hours" && " 120,000" || userPackages === "4 hours" && " 220,000" || userPackages === "6 hours" && " 460,000" || userPackages === "8 hours" && " 940,000"}`}
                                        type="text"
                                        readOnly
                                    />}
                                <p className="text-[#9CA3AF] text-xs font-medium">
                                    Fixed price for {userPackages} package
                                </p>
                            </div>
                            {error && <h2 className="text-red-700">{error}</h2>}
                            <button
                                onClick={(e) => Modals(e)}
                                type="submit"
                                className="mt-[24px] mb-[84px] bg-[#FF6661] w-full md:w-3/6 cursor-dark text-center py-3 md:py-5 text-[#FFFFFF] font-bold text-[16px] rounded-xl"
                            >
                                {loading ? (
                                    <ClipLoader size={20} color="#FFF" />
                                ) : (
                                    "Book a Studio Session"
                                )}
                            </button>
                        </form>
                    </div>
                )}
                {/*@ts-ignore */}
                {/* {messageIsSent === true && (
                    <MessageConfirmation
                        setmessageIsSent={setmessageIsSent}
                    ></MessageConfirmation>
                )} */}
            </FormContainer>
        </>
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

export default BookASessionForm;
