
import ProjectComponent from "./components/Component";
import Footer from "./components/Footer";
import { ProfileInfo } from "./components/ProfileInfo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ProfileInfo />
      <ProjectComponent />
      <Footer />
    </>
  );
}
