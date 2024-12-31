import Image from "next/image";

export default function Background_D() {
  return (
    <>
      <Image
        src="/bg4.png"
        fill
        objectFit="cover"
        alt="bg-d"
        className="sticky top-0 left-0 z-[-1] w-full h-full blur-sm"
      />
    </>
  );
}
