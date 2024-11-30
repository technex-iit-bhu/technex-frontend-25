import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "./minecrafter/Minecrafter.Reg.ttf" });

export default function HeroSection() {
  const text = "XX days to go";
  return (
    <>
      <div className="w-[full] h-[100vh] flex justify-center items-center">
        <div className="relative">
          <div
            className={`relative left-[-10px] top-[10px] flex justify-center items-center text-9xl text-gray-black text-center ${myFont.className}`}
          >
            {text}
          </div>
          <div
            className={`relative top-[-128px] flex justify-center items-center text-9xl text-white text-center ${myFont.className}`}
          >
            {text}
          </div>
        </div>
      </div>
    </>
  );
}
