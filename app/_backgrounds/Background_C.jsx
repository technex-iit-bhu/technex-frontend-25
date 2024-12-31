import Image from "next/image";

export default function Background_C() {
  return (<>
    <Image
      src="/bg3.png"
      width={0}
      height={0}
      alt="bg-c"
      className="fixed min-w-[400px] w-[100vw] h-[100vh] object-cover overflow-hidden top-0 left-0 z-[-1]"
      sizes="100vw"
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  </>);
}