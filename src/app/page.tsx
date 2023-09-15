import MainSection from "@/Components/MainSection";
import SideBar from "@/Components/SideBar";

export default function Home() {
  return (
    <div className="flex ">
      <SideBar />
      <MainSection />
    </div>
  );
}
