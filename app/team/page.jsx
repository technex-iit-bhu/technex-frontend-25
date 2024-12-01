import Image from "next/image";
import Background_C from "../_backgrounds/Background_C";
import Navbar from "../_components/Navbar";

const TeamSelect = ({ title, selected }) => {
  return (
    <button
      className={`${
        selected ? "bg-gray-500 text-white" : "bg-white text-black"
      } hover:bg-gray-800 hover:text-white transition px-8 py-1 rounded-md`}
    >
      {title}
    </button>
  );
};

const MemberCard = ({name,position,phone,insta}) => {
  return <div className="w-[300px] relative h-[400px] flex flex-col justify-center items-center text-white">
    <Image src="/MemberCard.png" width={300} height={0} className="absolute z-[-1]"/>
    <div className="w-[200px] h-[200px] bg-white rounded overflow-hidden"></div>
    <div className="text-3xl pt-4">{name}</div>
    <div className="text-2xl px-4">{position}</div>
    <div className="text-xl px-4 w-full flex">
        <div className="flex-1 ml-2">{phone}</div>
        <div className="mr-2">{insta}</div>
    </div>
  </div>;
};

export default function Team() {
  return (
    <>
      <Background_C />
      <div className="w-[100vw] h-[100vh] overflow-y-auto">
        <Navbar />
        <div className="text-white px-20 py-10 text-5xl">Meet the team</div>
        <div className="px-20 pb-10 text-2xl flex gap-5 max-w-[80vw] overflow-auto">
          <TeamSelect title="All" />
          <TeamSelect title="XXX Team" selected={true} />
          <TeamSelect title="YYY Team" />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="max-w-[1000px] flex flex-wrap gap-10 pb-10 justify-center items-center">
            <MemberCard name="Name" position="Convenor" phone="+91-XXXX-XX-XXXX" insta="weee"/>
            <MemberCard name="Name" position="Convenor" phone="+91-XXXX-XX-XXXX" insta="weee"/>
            <MemberCard name="Name" position="Convenor" phone="+91-XXXX-XX-XXXX" insta="weee"/>
            <MemberCard name="Name" position="Convenor" phone="+91-XXXX-XX-XXXX" insta="weee"/>
            <MemberCard name="Name" position="Convenor" phone="+91-XXXX-XX-XXXX" insta="weee"/>
            <MemberCard name="Name" position="Convenor" phone="+91-XXXX-XX-XXXX" insta="weee"/>
          </div>
        </div>
      </div>
    </>
  );
}
