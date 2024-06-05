"use client";
import React, { FC, useRef, useState } from "react";
import db from "@/DB/db";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faGithub,
	faLinkedinIn,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import useIsomorphicLayoutEffect from "@/Hooks/IsomorphicEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

interface ContactUsProps {
	infoData: getInfo;
	socialLinks: getSocialLinks;
}
const ContactUs: FC<ContactUsProps> = ({ infoData, socialLinks }) => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [loading, setLoading] = useState<boolean>();
	const contact = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const ctx = gsap.context(() => {
			gsap.from(".contactSocialLinks", {
				y: 30,
				opacity: 0,
				delay: 0.7,
				stagger: 0.2,
				ease: "back.out(1.7)",
				scrollTrigger: {
					trigger: contact.current,
					scroller: "main",
					start: "20% 60%",
				},
			});
		});
		return () => ctx.revert();
	}, []);

	const sendEmail = async (e: any) => {
		e.preventDefault();

		if (!name || !email || !message) {
			return;
		}
		const data = {
			service_id: `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`,
			template_id: `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`,
			user_id: `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`,
			template_params: {
				from_name: name,
				from_email: email,
				to_name: "Tejodeep",
				message,
			},
		};

		try {
			setLoading(true);
			const res = await axios.post(
				"https://api.emailjs.com/api/v1.0/email/send",
				data
			);
			toast.success("Message is successfull send", {
				position: "top-center",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			setName("");
			setEmail("");
			setMessage("");
			setLoading(false);
		} catch (error: any) {
			toast.error(`${error.message}`, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			setLoading(false);
		}
	};
	return (
		<section
			ref={contact}
			className="relative min-h-screen w-full"
			id="contact"
		>
			<div className="min-h-screen w-full bg-[#e9f9ff] py-28">
				<section className="mx-auto flex w-full max-w-7xl flex-col px-5 lg:px-10">
					{/* Connects */}
					<section className="flex w-full flex-col md:flex-row">
						{/* left */}
						<section className="flex w-full flex-col gap-5 md:w-1/2 md:pr-12">
							<div className="flex flex-col gap-5">
								<span className="text-lg font-medium">
									<p>LET&lsquo;S CONNECT </p>
								</span>
								<Link
									href={"#skills"}
									className="font-Inter text-4xl font-extrabold"
								>
									<p>Get in Touch</p>
								</Link>
							</div>
							<span className="mt-5 text-lg leading-8">
								<p>{infoData.contactUsDesc}</p>
							</span>
							<section className="w-full">
								<ul className="relative font-Inter text-lg font-semibold leading-8 text-[#55527C]">
									<li className="w-full">
										<Link
											href="tel:+91-9674128921"
											className="relative pb-1 before:absolute before:bottom-1 before:left-0 before:h-[1.5px] before:w-full before:bg-black before:transition before:duration-1000 before:ease-in-out hover:no-underline before:hover:w-0"
										>
											{infoData.phone}
										</Link>
									</li>
									<li>
										<Link
											href="mailto:tejodeepmitraroy2002@gmail.com"
											className="relative pb-1 before:absolute before:bottom-1 before:left-0 before:h-[1.5px] before:w-full before:bg-black before:transition before:duration-1000 before:ease-in-out hover:no-underline before:hover:w-0"
										>
											{infoData.mail}
										</Link>
									</li>
									<li>
										<span className="relative pb-1 before:absolute before:bottom-1 before:left-0 before:h-[1.5px] before:w-full before:bg-black before:transition before:duration-1000 before:ease-in-out hover:no-underline before:hover:w-0">
											{infoData.born}
										</span>
									</li>
								</ul>
							</section>
							<section className="mt-4 h-16 w-fit">
								<ul className="flex h-full w-full items-center gap-2">
									<li className="contactSocialLinks">
										<Link
											href={socialLinks.facebook ? socialLinks.facebook : ""}
											target="_blank"
											className="duration-900 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-[#130f49] transition ease-in-out hover:h-14 hover:w-14 hover:bg-[#4267B2] hover:text-gray-200"
										>
											<FontAwesomeIcon icon={faFacebookF} size={"lg"} />
										</Link>
									</li>
									<li className="contactSocialLinks">
										<Link
											href={socialLinks.twitter ? socialLinks.twitter : ""}
											target="_blank"
											className="duration-900 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-[#130f49] transition ease-in-out hover:h-14 hover:w-14 hover:bg-[#130f49] hover:text-gray-200"
										>
											<FontAwesomeIcon icon={faXTwitter} size={"lg"} />
										</Link>
									</li>
									<li className="contactSocialLinks">
										<Link
											href={socialLinks.linkedIn ? socialLinks.linkedIn : ""}
											target="_blank"
											className="duration-900 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-[#130f49] transition ease-in-out hover:h-14 hover:w-14 hover:bg-[#0072b1] hover:text-gray-200"
										>
											<FontAwesomeIcon icon={faLinkedinIn} size={"lg"} />
										</Link>
									</li>
									<li className="contactSocialLinks">
										<Link
											href={socialLinks.github ? socialLinks.github : ""}
											target="_blank"
											className="duration-900 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-[#130f49] transition ease-in-out hover:h-14 hover:w-14 hover:bg-[#130f49] hover:text-gray-200"
										>
											<FontAwesomeIcon icon={faGithub} size={"lg"} />
										</Link>
									</li>
								</ul>
							</section>
						</section>

						{/* right */}
						<form className="mt-16 flex w-full flex-col gap-7 md:w-1/2 md:pl-12">
							<input
								type="text"
								onChange={(e) => setName(e.target.value)}
								value={name}
								required
								className="h-14 w-full rounded-[3rem] bg-white p-5 text-lg leading-[1.6]"
								placeholder="Enter your name"
								autoComplete="off"
							/>
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								required
								className="h-14 w-full rounded-[3rem] bg-white p-5 text-lg leading-[1.6]"
								placeholder="Your email"
								autoComplete="off"
							/>
							<textarea
								onChange={(e) => setMessage(e.target.value)}
								value={message}
								className="h-32 w-full rounded-[3rem] resize-none bg-white p-5 text-lg leading-[1.6]"
								placeholder="Write Something"
								autoComplete="off"
							/>
							<span className="flex w-full justify-start">
								{loading ? (
									<span className="rounded-md border-[1.5px] border-[#130f49] bg-[#130f49] px-10 py-2 text-lg leading-8 text-white transition duration-300 ease-in-out">
										<svg
											aria-hidden="true"
											className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
											viewBox="0 0 100 101"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
												fill="currentColor"
											/>
											<path
												d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
												fill="currentFill"
											/>
										</svg>
									</span>
								) : (
									<button
										type="submit"
										onClick={sendEmail}
										className=" rounded-[3rem] border-[1.5px] border-[#130f49] bg-[#130f49] px-10 py-2 text-lg leading-8 text-white transition duration-300 ease-in-out"
									>
										Submit
									</button>
								)}
							</span>
						</form>
					</section>
					{/* map location */}
					<section className="relative mt-28 h-96 w-full">
						<iframe
							src={infoData.location}
							width="100%"
							height="100%"
							title="map"
							className="rounded-[3rem]"
						></iframe>
					</section>
					<section className="mt-10 flex w-full justify-center text-center text-4xl font-bold">
						<p>&quot;I hope We will Work Together&quot;</p>
					</section>
				</section>
			</div>
		</section>
	);
};

export default ContactUs;
