"use client";
import React, { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";

interface UserData {
  name: string;
  college: string;
  id: string;
  email: string;
  phone: string;
  qrToken: string;
  profile_photo: string;
}

interface IdCardProps {
  userData: UserData;
}

// export default function IdCard(props: IdCardProps) {
//   const { userData } = props;
//   const cardRef = useRef<HTMLDivElement | null>(null);
//   const buttonRef = useRef<HTMLDivElement | null>(null);

//   const downloadPDF = async () => {
//     if (!cardRef.current) return;

//     if (buttonRef.current) {
//       buttonRef.current.style.display = "none";
//     }

//     try {
//       const tempCard = cardRef.current.cloneNode(true) as HTMLElement;
//       tempCard.style.width = "550px";
//       tempCard.style.height = "330px";
//       tempCard.style.position = "fixed";
//       tempCard.style.top = "-9999px";
//       tempCard.style.border = "1px solid #000";
//       document.body.appendChild(tempCard);

//       const canvas = await html2canvas(tempCard, {
//         width: 550,
//         height: 330,
//         scale: 2,
//         logging: false,
//         useCORS: true,
//       });

//       document.body.removeChild(tempCard);

//       const pdf = new jsPDF({
//         orientation: "portrait",
//         unit: "mm",
//         format: "a4",
//       });

//       const cardWidthMM = (550 / 96) * 25.4;
//       const cardHeightMM = (330 / 96) * 25.4;
//       const pageWidth = pdf.internal.pageSize.getWidth();
//       const pageHeight = pdf.internal.pageSize.getHeight();
//       const x = (pageWidth - cardWidthMM) / 2;
//       const y = (pageHeight - cardHeightMM) / 2;

//       pdf.setDrawColor(0);
//       pdf.setLineWidth(0.5);

//       pdf.addImage(
//         canvas.toDataURL("image/png"),
//         "PNG",
//         x,
//         y,
//         cardWidthMM,
//         cardHeightMM
//       );

//       pdf.save(`${userData.name.replace(" ", "_")}_ID_Card.pdf`);
//     } finally {
//       if (buttonRef.current) {
//         buttonRef.current.style.display = "block";
//       }
//     }
//   };

//   return (
//     <div className="border border-gray-200 rounded-lg mt-12 backdrop-blur-lg p-8">
//       <div className="max-w-3xl mx-auto">
//         <div
//           ref={cardRef}
//           className="w-full bg-white rounded-xl shadow-lg overflow-hidden"
//         >
//           <div className="w-full h-full p-4 md:p-6 lg:p-8 flex">
//             {/* Left Section */}
//             <div className="flex-1 flex flex-col justify-between">
//               {/* Header - Fixed alignment */}
//               <div className="flex items-start">
//                 <div className="flex items-center">
//                   <div className="ml-2 flex flex-col justify-center">
//                     <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
//                       TECHNEX&apos;25 PARTICIPANT
//                     </div>
//                     <div className="text-xs md:text-sm text-gray-500">
//                       Valid through Technex 2025
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Profile Section */}
//               <div className="flex items-center my-4">
//                 <Image
//                   src={userData.profile_photo}
//                   alt="profile photo"
//                   className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 mr-4 rounded-full"
//                 />
//                 <div>
//                   <h2 className="text-2xl md:text-xl font-bold text-gray-800">
//                     {userData.name}
//                   </h2>
//                   <p className="text-xl text-gray-500">
//                     Technex ID: {userData.id}
//                   </p>
//                   <p className="text-md md:text-sm text-gray-600">
//                     College: {userData.college}
//                   </p>
//                 </div>
//               </div>

//               {/* Contact Information */}
//               <div className="text-xs md:text-sm text-gray-600">
//                 <p className="mb-1">📧 {userData.email}</p>
//                 <p>📞 {userData.phone}</p>
//               </div>
//             </div>

//             {/* Right Section - QR Code */}
//             <div className="flex items-center justify-center pl-4">
//               <div className="w-24 md:w-28 lg:w-32">
//                 <QRCodeSVG
//                   value={userData.qrToken}
//                   size={100}
//                   level="H"
//                   className="border border-gray-200 p-1"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Download Button */}
//         <div className="mt-6 text-center" ref={buttonRef}>
//           <button
//             className="bg-green-500 text-white py-2 px-8 rounded-lg hover:bg-green-600 transition-colors"
//             onClick={downloadPDF}
//           >
//             Download as PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function IdCard() {
  return (
    <div>ID Card</div>
  )
}