import Cursor from "@/Components/Cursor";
import MainSection from "@/Components/MainSection";
import SideBar from "@/Components/SideBar";

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
