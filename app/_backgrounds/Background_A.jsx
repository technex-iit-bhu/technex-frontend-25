import Image from "next/image";

export default function Background_A({ children }) {
  return (
    <Image
      src="/bg1.png"
      layout="fill"
      objectFit="cover"
      alt="bg-a"
      className="sticky top-0 left-0 z-[-1] w-full h-full blur-sm"
    />
  );
}
