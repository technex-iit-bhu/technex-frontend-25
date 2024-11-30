import Image from "next/image";

export default function Background_D() {
  return (
    <>
      <Image
        src="/bg4.png"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute min-w-[400px] w-[100vw] h-[100vh] object-cover overflow-hidden top-0 left-0 z-[-1]"
      />
    </>
  );
}
