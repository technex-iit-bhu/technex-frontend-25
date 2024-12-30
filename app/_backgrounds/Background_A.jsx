import Image from "next/image";

export default function Background_A({ children }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/bg1.png"
        layout="fill"
        objectFit="cover"
        alt="bg-a"
        className="fixed top-0 left-0 z-[-1] w-full h-full p-[0.001px]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
