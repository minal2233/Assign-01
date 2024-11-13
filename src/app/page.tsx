
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className="w-[1440px] h-[1132px] bg-[#252B42]" >
        <Navbar />
        <Hero />
      </main>
  )}