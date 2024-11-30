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
            className={`relative flex justify-center items-center text-9xl text-white text-center ${myFont.className}`}
          >
            {text}
          </div>
        </div>
      </div>
    </>
  );
}
