import Image from "next/image";

export default function Background_B() {
  return (
    <>
      <Image
        src="/bg2.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="bg-2"
        className="absolute min-w-[400px] w-[100vw] h-[100vh] object-cover overflow-hidden top-0 left-0 z-[-1]"
      />
    </>
  );
}
