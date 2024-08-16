"use client";
import {
	faArrowUpRightFromSquare,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PortableText } from "@portabletext/react";
import { PTComponents } from "./PortableText";

interface ModalProps {
	isClose: any;
	isOpen: boolean;
	data: getProjects;
}

const Modal: FC<ModalProps> = ({ data, isOpen, isClose }) => {
	console.log(data);
	return (
		<section
			className={`fixed ${
				!isOpen ? "hidden" : ""
			} bottom-0 left-0 right-0 top-0 z-10 h-screen w-full transition ease-in`}
		>
			<div className="relative z-0 flex h-full w-full justify-center bg-black opacity-70"></div>
			<div className="absolute bottom-10 left-0 right-0 top-10 m-[0_auto] h-auto w-full opacity-100 md:bottom-[50px] md:top-[50px] md:max-w-xl lg:bottom-[70px] lg:top-[70px] lg:max-w-3xl 2xl:max-w-5xl">
				{/* Close button */}
				<button
					className="absolute right-2 z-20 ml-7 h-10 w-10 rounded-xl border-white md:-right-16 md:scale-75 md:border-2 md:text-white lg:scale-100"
					title="close"
					onClick={isClose}
				>
					<FontAwesomeIcon icon={faXmark} size={"xl"} />
				</button>
				{/* Main Modal */}

				<div className="absolute h-full w-full overflow-y-auto rounded border bg-white p-[30px_25px_25px] lg:p-[50px]">
					<Swiper
						pagination={{
							type: "fraction",
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className="mySwiper"
					>
						{data.preview?.map((item, index) => (
							<SwiperSlide key={item._key}>
								<Image
									src={item.image}
									width={"1080"}
									height={"0"}
									className="realtive mb-9 w-full rounded md:h-[300px] lg:h-[450px]"
									alt=""
								/>
							</SwiperSlide>
						))}
					</Swiper>

					<div className="text flex w-full flex-col">
						<div className="flex flex-col">
							<span className="mb-4 w-full font-Inter text-base font-medium text-[rgba(19,15,73,.5)] lg:text-xl">
								Project Name
							</span>
							<h3 className="mb-8 w-full font-Inter text-xl font-bold leading-5 lg:text-2xl">
								{data.title}
							</h3>
						</div>
						<div className="flex h-auto w-full flex-col text-lg lg:flex-row">
							<div className="w-full text-[#55527c] opacity-[0.7] lg:w-[70%] lg:pr-10">
								<PortableText
									value={data.description}
									components={PTComponents}
								/>
							</div>
							<div className="mt-10 w-full lg:w-[30%] lg:pl-10">
								<ul className="flex flex-col gap-5">
									<li className="flex flex-col gap-1">
										<span className="text-xl font-semibold">Hosted Link</span>
										<span className="text-l opacity-80 hover:text-[#c1aefc]">
											{/* {data.live} */}
											<Link href={data.live ? data.live : ""} target="_blank">
												{data.live}
												{/* <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            size="xs"
                          /> */}
											</Link>
										</span>
									</li>
									<li className="flex flex-col gap-2">
										<span className="text-xl font-semibold">Tech Stacks</span>
										<span className="flex w-full flex-wrap gap-3">
											{data.technologies?.map((item: any, index: any) => (
												<Image
													src={item}
													width={"30"}
													height={"30"}
													alt=""
													key={index}
													className="mb-3"
												/>
											))}
										</span>
									</li>
									<li className="flex flex-col gap-1">
										<span className="text-xl font-semibold">Github Repo</span>
										<span className="text-l opacity-80">
											<ul>
												{data.repoLink?.map((item, index) => (
													<li key={index}>
														{item.name}
														<Link href={item.link ? item.link : ""}>
															{" "}
															<FontAwesomeIcon
																icon={faArrowUpRightFromSquare}
																size="xs"
															/>
														</Link>
													</li>
												))}
											</ul>
										</span>
									</li>
									<li className="flex flex-col gap-1">
										<span className="text-xl font-semibold">Date</span>
										<span className="text-l opacity-80">
											{data.startDate} - {data.endDate}
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Modal;
