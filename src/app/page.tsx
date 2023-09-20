import MainSection from "@/Components/MainSection";
import SideBar from "@/Components/SideBar";

export default function Home() {
  return (
    <div className="lg:flex">
      <SideBar />
      <MainSection />
    </div>
  );
}
