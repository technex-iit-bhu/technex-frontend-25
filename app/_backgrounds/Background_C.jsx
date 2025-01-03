import Image from "next/image";

export default function Background_C() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Image
        src="/bg3.png"
        alt="bg-c"
        fill
        className="object-cover blur-sm"
      />
    </div>
    </>
  );
}
