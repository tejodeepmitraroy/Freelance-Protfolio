import Cursor from "@/Components/Cursor";
import MainSection from "@/Components/MainSection";
import SideBar from "@/Components/SideBar";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    // <Cursor>
    <div data-scroll className="relative w-full h-screen lg:flex">
      <SideBar />
      <MainSection />
    </div>
    // </Cursor>
  );
}
