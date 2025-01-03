import Image from "next/image";

export default function Background_D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Image src="/bg4.png" alt="bg-a" fill className="object-cover blur-sm" />
    </div>
  );
}
