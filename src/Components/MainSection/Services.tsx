import React, { FC } from "react";
import db from "@/DB/db";

const Services: FC = () => {
	return (
		<section className="relative h-auto w-full" id="services">
			<div className="my-28 w-full">
				<section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 lg:px-10">
					<span className="text-lg font-medium">- SERVICES</span>
					<section className="flex flex-col justify-between gap-10 md:flex-row">
						<span className="font-Inter text-4xl font-extrabold">
							My Freelance Services
						</span>
						<span className="text-base font-medium md:text-xl">
							<a
								href=""
								className="relative w-full font-Inter font-semibold before:absolute before:bottom-0 before:h-[2px] before:w-full before:bg-black before:transition before:duration-700 before:ease-in hover:no-underline hover:before:w-0"
							>
								{db.mail}
							</a>
						</span>
					</section>
					<ul className="mt-7 flex w-full flex-col flex-wrap md:-ml-2 md:flex-row lg:-ml-8">
						{db.services.map((item, index) => (
							<li
								key={index}
								className="mb-10 w-full transition duration-300 ease-in-out hover:-translate-y-4 md:w-1/3 md:pl-8"
							>
								<div className="flex h-full w-full flex-col rounded border border-black p-10 text-lg">
									<span className="mb-4 w-full font-Inter font-medium text-[rgba(19,15,73,.5)]">
										{item.id}
									</span>
									<h3 className="mb-3 w-full font-Inter text-xl font-bold leading-5">
										{item.title}
									</h3>
									<span className="mb-6 w-full text-[#55527c] opacity-[0.7]">
										{item.description[0]}
									</span>
									{/* <div className="flex items-center gap-6">
                    <a>Read More</a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        className="svg replaced-svg"
                      >
                        <path
                          d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
                          fill="#130F49"
                        ></path>
                      </svg>
                    </span>
                  </div> */}
								</div>
							</li>
						))}
					</ul>
				</section>
			</div>
		</section>
	);
};

export default Services;
