import { imageUrlFor } from "@/config/imageBuilder";
import Image from "next/image";
import Link from "next/link";

const ImageComponent = ({ value, isInline }: { value: any; isInline: any }) => {
	// const { width, height } = getImageDimensions(value);
	return (
		<Image
			src={value}
			width={isInline ? 100 : 800}
			height={0}
			alt={value.alt || " "}
			loading="lazy"
			className="object-contain"
			style={{
				// Display alongside text if image appears inside a block text span
				display: isInline ? "inline-block" : "block",

				// Avoid jumping around with aspect-ratio CSS property
				// aspectRatio: width / height,
			}}
		/>
	);
};

export const PTComponents: any = {
	types: {
		image: ImageComponent,
		code: (props: any) => (
			<pre>
				<code className="text-pink-500">{props.code}</code>
			</pre>
		),
	},
	marks: {
		strong: ({ children }: { children: any }) => (
			<strong className="font-bold text-[#130f49]">{children}</strong>
		),
		em: ({ children }: { children: any }) => (
			<em className="font-semibold text-[#130f49]">{children}</em>
		),
		code: ({ children }: { children: any }) => (
			<code className="border-l-4 border-slate-500 bg-black pl-3 font-mono leading-6 text-emerald-500">
				{children}
			</code>
		),
		link: ({ value, children }: { value: any; children: any }) => {
			const target = (value?.href || "").startsWith("http")
				? "_blank"
				: undefined;
			return (
				<Link
					href={value?.href}
					target={target}
					rel={target === "_blank" ? "noindex nofollow" : undefined}
				>
					{children}
				</Link>
			);
		},
	},
	block: {
		// Ex. 1: customizing common block types
		h1: ({ children }: { children: any }) => (
			<h1 className="my-4 text-3xl font-extrabold text-[#130f49]">
				{children}
			</h1>
		),
		h2: ({ children }: { children: any }) => (
			<h2 className="my-4 text-2xl font-extrabold text-[#130f49]">
				{children}
			</h2>
		),
		h3: ({ children }: { children: any }) => (
			<h3 className="my-4 text-xl font-extrabold text-[#130f49]">{children}</h3>
		),
		h4: ({ children }: { children: any }) => (
			<h4 className="my-4 text-lg font-extrabold text-[#130f49]">{children}</h4>
		),
		h5: ({ children }: { children: any }) => (
			<h5 className="my-4 text-base font-extrabold text-[#130f49]">
				{children}
			</h5>
		),
		h6: ({ children }: { children: any }) => (
			<h6 className="my-4 text-sm font-extrabold text-[#130f49]">{children}</h6>
		),
		blockquote: ({ children }: { children: any }) => (
			<blockquote className="border-l-4 border-slate-500 pl-3 text-[#130f49]">
				{children}
			</blockquote>
		),
	},
	list: {
		// Ex. 1: customizing common list types
		bullet: ({ children }: { children: any }) => (
			<ul className="mt-xl text-[#130f49]">{children}</ul>
		),
		number: ({ children }: { children: any }) => (
			<ol className="mt-lg text-[#130f49]">{children}</ol>
		),

		// Ex. 2: rendering custom lists
		checkmarks: ({ children }: { children: any }) => (
			<ol className="m-auto text-lg text-[#130f49]">{children}</ol>
		),
	},
	listItem: {
		// Ex. 1: customizing common list types
		bullet: ({ children }: { children: any }) => (
			<li className="list-disc text-[#130f49]">{children}</li>
		),
		number: ({ children }: { children: any }) => (
			<li className="list-decimal text-[#130f49]">{children}</li>
		),

		// Ex. 2: rendering custom list items
		checkmarks: ({ children }: { children: any }) => (
			<li className="text-[#130f49]">✅ {children}</li>
		),
	},
};
