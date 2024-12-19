import Image from "next/image";
import Background_D from "../_backgrounds/Background_D";
import Navbar from "../_components/Navbar";

const SponsorCard = ({company}) => {
  return <div className="w-[300px] relative h-[400px] flex flex-col items-center text-white">
    <Image src="/SponsorCard.png" width={300} height={0} className="absolute z-[-1] top-0" alt="sponsor-card"/>
    <div className="w-[200px] h-[200px] mt-[37px] mb-[80px] bg-white rounded overflow-hidden"></div>
    <div className="w-[200px] text-2xl text-center bg-black bg-opacity-50 rounded-md">{company}</div>
  </div>;
};

export default function Sponsors() {
  return (
    <>
      <Background_D />
      <div className="w-[100vw] h-[100vh] overflow-y-auto">
        <Navbar />
        <div className="text-white px-20 py-10 text-5xl">Sponsors</div>
        <div className="w-full flex items-center justify-center">
          <div className="max-w-[1000px] flex flex-wrap gap-10 justify-center items-center">
            <SponsorCard company="Company A"/>
            <SponsorCard company="Company A"/>
            <SponsorCard company="Company A"/>
            <SponsorCard company="Company A"/>
            <SponsorCard company="Company A"/>
            <SponsorCard company="Company A"/>
          </div>
        </div>
      </div>
    </>
  );
}
