import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WorshipTimes } from "@/components/sections/WorshipTimes";
import { PastorGreeting } from "@/components/sections/PastorGreeting";
import { AboutChurch } from "@/components/sections/AboutChurch";
import { Ministries } from "@/components/sections/Ministries";
import { SermonMedia } from "@/components/sections/SermonMedia";
import { GalleryAndLocation } from "@/components/sections/GalleryAndLocation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorshipTimes />
        <PastorGreeting />
        <AboutChurch />
        <Ministries />
        <SermonMedia />
        <GalleryAndLocation />
      </main>
      <Footer />
    </>
  );
}
