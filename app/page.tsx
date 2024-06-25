import Appbar from "@/components/Appbar";
import MainPage from "@/components/MainPage";
import Sectionbar from "@/components/Sectionbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <Appbar/>
      <Sectionbar/>
      <MainPage/>
    </div>
  );
}
