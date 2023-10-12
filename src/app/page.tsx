import Cursor from "@/Components/Cursor";
import MainSection from "@/Components/MainSection";
import SideBar from "@/Components/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    // <Cursor>
    <div className="lg:flex">
      <SideBar />
      <MainSection />
     
    </div>
    // </Cursor>
  );
}
