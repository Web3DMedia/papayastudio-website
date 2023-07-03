import { useEffect, useState } from "react";
import styled from "styled-components";
import DropdownMenu from "../atoms/DropdownMenu";
import MessageConfirmation from "./MessageConfirmation";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const ContactForm = () => {
	const options = [
		{ name: "Studio Rentals" },
		{ name: "Event coverage" },
		{ name: "Animations" },
		{ name: "Motion Graphics" },
		{ name: "Branding" },
		{ name: "Video Production" },
		{ name: "Video Podcast Production" },
		{ name: "Other" },
	];
	const [userName, setUserName] = useState<string>("");
	const [userMail, setUserMail] = useState<string>("");
	const [userDropdown, setUserDropdown] = useState<string>("Studio Rentals");
	const [userMessage, setUserMessage] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [messageIsSent, setmessageIsSent] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [messageNum, setMessageNum] = useState<number>(0);

	useEffect(() => {
		function countMessage() {
			let content = userMessage;

			//Remove empty spaces from the start and end
			let trim = content.trim();
			let wordList = trim.split(/\s/);

			//Remove spaces from between words
			let words = wordList.filter((x) => x !== " ");
			setMessageNum(500 - words.length);
		}

		countMessage();
	}, [userMessage]);

	const addToWaitlist = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setError("");

		if (userName.trim() === "") {
			setError("Please fill all the fields");
			return true;
		}

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

		if (messageNum < 1) {
			setError("Message is too long");
			return true;
		}

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
				description: userMessage,
				reason: userDropdown,
			};

			await axios.post(
				`${process.env.NEXT_PUBLIC_AXIOS_BACKEND_BASE_URL}/papayas/contact/create`,
				formData,
				config
			);
			setLoading(false);
			setmessageIsSent(true);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<FormContainer className="bg-white md:w-[600px]  xl:w-[650px] px-4 sm:px-10 py-5 rounded-t-[32px]">
			{messageIsSent === false && (
				<div>
					<div className="text-left">
						<h2 className="text-[#002F31] text-[40px] font-bold leading-[46px] pt-10">
							Contact Us
						</h2>
						<p className="text-[#4A5567] text-[16px] font-normal leading-[24px]">
							Welcome to our Papayas studio! A Digital, Media and Design
							production company. Interested in working with us? Please
							fill out the form below, and we&apos;ll be in touch to
							discuss your project. We can&apos;t wait to help bring your
							vision to life!
						</p>
					</div>
					<form className="mt-[33px]" onSubmit={addToWaitlist}>
						<div className="form-group flex flex-col">
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
								type="text"
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
							<p className="text-[#9CA3AF] text-xs font-medium">
								Tell us your email adderess so we can follow up!
							</p>
						</div>

						<div className="form-group flex flex-col mt-6">
							<label
								htmlFor="userDropdown"
								className="mb-2 text-[#4A5567] text-[14px] font-bold"
							>
								Service Description
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
								className="h-[220px] md:h-[209px] mb-2 text-[14px]  md:text-[16px] relative"
								name="userMessage"
								value={userMessage}
								onChange={(e) => setUserMessage(e.target.value)}
								placeholder="Type your message here..."
							></MessageArea>
							{messageNum < 1 && (
								<p className="text-[#FF6661]">
									You have exceed the maximum number of words.
								</p>
							)}
							{userMessage.length > 0 && messageNum > 1 && (
								<p className="text-[#FF6661] font-normal">
									<strong className="font-semibold">
										{messageNum}
									</strong>{" "}
									words remaining
								</p>
							)}
						</div>
						{error && <h2 className="text-red-700">{error}</h2>}
						<button
							type="submit"
							className="mt-[24px] mb-[84px] bg-[#FF6661] w-full md:w-3/6 cursor-pointer text-center py-3 md:py-5 text-[#FFFFFF] font-bold text-[16px] rounded-xl"
						>
							{loading ? (
								<ClipLoader size={20} color="#FFF" />
							) : (
								"Send Message"
							)}
						</button>
					</form>
				</div>
			)}
			{/*@ts-ignore */}
			{messageIsSent === true && (
				<MessageConfirmation
					setmessageIsSent={setmessageIsSent}
				></MessageConfirmation>
			)}
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
