"use client"
import useTypography from './_hooks/useTypography';
import WindowCard from './_ui/WindowCard';
import Background_A from './_backgrounds/Background_A'
import Navbar from './_components/Navbar'
import HeroSection from './_components/HeroSection'
import FAQ from './_components/FAQ'
import Footer from './_components/Footer'

export default function Home() {
  return <>
    <Background_A />
    <div className="w-[100vw] h-[100vh] overflow-y-auto lg:h-fit">
    <Navbar />
    <HeroSection />
    <FAQ />
    <Footer />
    </div>
  </>;
}
