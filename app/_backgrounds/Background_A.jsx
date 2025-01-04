import Image from "next/image";

export default function Background_A() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Image src="/bg1.jpg" alt="bg-a" fill className="object-cover blur-sm" priority/>
    </div>
  );
}
