"use client"
import useTypography from './_hooks/useTypography';
import WindowCard from './_ui/WindowCard';

export default function Home() {
  const [technexText,_,__]=useTypography("Technex_25 ^_^")
  return <>
    <WindowCard title="/usr/lib/init" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="text-3xl w-full h-36 flex justify-center items-center">{technexText}
      </div>
    </WindowCard>
  </>;
}
