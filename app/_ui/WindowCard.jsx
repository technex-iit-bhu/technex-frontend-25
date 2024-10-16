"use client";
import useTypography from "../_hooks/useTypography";

export default function WindowCard(props) {
  return (
    <>
      <div className={`border border-black w-fit flex flex-col rounded-lg overflow-hidden ${props.className}`}>
        <div className="flex items-center pl-2 h-8 min-w-32 bg-gray-50">
          <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></div>
          <div className="w-4 h-4 rounded-full bg-green-600 mr-2"></div>
          <div className="flex flex-1 justify-center items-center h-full">
            <div className="h-full flex justify-center items-center translate-x-[-40px] text-sm">
              {props.title}
            </div>
          </div>
        </div>
        <div className="h-full w-full min-w-64 text-white bg-gray-800">
          {props.children}
        </div>
      </div>
    </>
  );
}
