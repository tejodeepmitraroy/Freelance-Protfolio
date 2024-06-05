"use client";
import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import db from "@/DB/db";

const Testimonials: FC = () => {
	return (
		<div className="relative h-auto w-full">
			<div className="my-28 w-full">
				<div className="mx-auto h-full w-full max-w-7xl bg-[#fff5f6]">
					<div className="h-full w-full px-10 pb-28 pt-36 md:px-28">
						<div className="flex w-full flex-col items-center gap-5">
							<span className="text-lg font-medium">-TESTIMONIAL</span>
							<span className="text-center font-Inter text-4xl font-extrabold">
								What clients say?
							</span>
							{/* <div className="w-full h-auto mt-11 border"> */}
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								loop={true}
								autoplay={{
									delay: 5000,
									disableOnInteraction: false,
								}}
								navigation={true}
								pagination={{
									clickable: true,
								}}
								modules={[Autoplay, Pagination, Navigation]}
								className="mySwiper mt-11 h-auto w-full"
							>
								{db.testimonial.map((item, index) => (
									<SwiperSlide key={index}>
										<div className="flex w-full flex-col items-center justify-center font-Inter text-3xl">
											<div className="mb-8 text-center text-xl md:text-2xl">
												<p>{item.feedback}</p>
											</div>
											<div className="flex w-auto items-center justify-center gap-5">
												<span>
													{" "}
													<Image
														src={item.image}
														width={60}
														height={60}
														alt=""
														className="h-16 w-16 rounded-full border-4 border-white"
													/>
												</span>
												<h3 className="text-2xl font-medium">{item.name}</h3>
											</div>
											<p className="mb-8 text-base md:text-lg">
												{item.subtitle}
											</p>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
