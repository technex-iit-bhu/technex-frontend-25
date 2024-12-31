import Image from "next/image";

export default function Background_C() {
  return (
    <>
      <Image
        src="/bg3.png"
        fill
        objectFit="cover"
        alt="bg-c"
        className="sticky top-0 left-0 z-[-1] w-full h-full blur-sm"
      />
    </>
  );
}
