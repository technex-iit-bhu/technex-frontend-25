import Image from "next/image";

export default function Background_B({ children }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/bg2.png"
        fill
        objectFit="cover"
        alt="bg-b"
        className="fixed top-0 left-0 z-[-1] w-full h-full p-[0.001px]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
