import Cursor from "@/Components/Cursor";
import MainSection from "@/Components/MainSection";
import SideBar from "@/Components/SideBar";
import getInfo from "@/lib/getInfo";
import getSocialLinks from "@/lib/getSocialLinks";
import "react-toastify/dist/ReactToastify.css";

const Home = async () => {
	const infoData = await getInfo();
	const socialLinks = await getSocialLinks();
	return (
		// <Cursor>
		<div data-scroll className="relative h-screen w-full lg:flex">
			<SideBar infoData={infoData} socialLinks={socialLinks} />
			<MainSection />
		</div>
		// </Cursor>
	);
};
export default Home;
