import Image from "next/image";

export default function Background_A() {
  return (
    <>
      <Image
        src="/bg1.png"
        width={0}
        height={0}
        sizes="100vh"
        className="absolute min-w-[600px] md:w-screen w-auto md:h-auto h-[150vh] top-20 lg:top-[-10vh] left-0 z-[-1] object-cover md:object-fill"
      />
    </>
  );
}
