import Image from "next/image";
import Background_D from "../_backgrounds/Background_D";
import Navbar from "../_components/Navbar";

const GalleryCard = ({company}) => {
  return <div className="w-[300px] lg:w-[533px] relative h-[160px] lg:h-[300px] flex flex-col justify-center items-center text-white">
    <Image src="/GalleryCard.png" width={533} height={0} className="w-[300px] lg:w-[533px] absolute z-[-1] top-0"/>
    <div className="w-[265px] lg:w-[470px] mt-[15px] lg:mt-[10px] h-[160px] lg:h-[260px] bg-white rounded overflow-hidden"></div>
  </div>;
};

export default function Gallery() {
  return (
    <>
      <Background_D />
      <div className="w-[100vw] h-[100vh] overflow-y-auto">
        <Navbar />
        <div className="text-white px-20 py-10 text-5xl">Gallery</div>
        <div className="w-full flex items-center justify-center">
          <div className="max-w-[1200px] flex flex-wrap gap-20 justify-center items-center">
            <GalleryCard company="Company A"/>
            <GalleryCard company="Company A"/>
            <GalleryCard company="Company A"/>
            <GalleryCard company="Company A"/>
            <GalleryCard company="Company A"/>
            <GalleryCard company="Company A"/>
          </div>
        </div>
      </div>
    </>
  );
}
