import Image from "next/image";

export default function Background_A() {
  return (
    <>
      <Image
        src="/bg1.png"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute min-w-[400px] w-screen top-0 left-0 z-[-1]"
      />
    </>
  );
}
