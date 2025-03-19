"use client";
import Image from "next/image";
import Background_D from "../_backgrounds/Background_D";
import Navbar from "../_components/Navbar";
import { FireEffect } from "../_components/particleEffects";
import { cardVariants } from "../utils/cardVariants";
import { motion } from "framer-motion";
import Footer from "../_components/Footer";

const sponsorData = [
  { name: "Visa Minmetal", category: "Title Sponsor", image: "/sponsors/VISA MinMetal_Title.jpg" },
  { name: "NTPC Mining Limited", category: "Energy Partner", image: "/sponsors/NML_EnergyPartner.jpg" },
  { name: "DMT", category: "Gold Sponsor", image: "/sponsors/DMT Gold.png" },
  { name: "Qualicy Industries", category: "Gold Sponsor", image: "/sponsors/Qualicy-Industries_Gold Sponsor.jpg" },
  { name: "GAIL", category: "Diamond Sponsor", image: "/sponsors/GAIL_Diamond Sponsor.jpg" },
  { name: "AMD", category: "Co-Presented by", image: "/sponsors/AMD_Copresenting.png" },
  { name: "NTPC Green Energy Limited", category: "Co-Title Sponsor", image: "/sponsors/NTPC_CoTitle.png" },
  { name: "ATEC", category: "Diamond Sponsor", image: "/sponsors/ATEC_DiamondSponsor.png" },
  { name: "Birla Opus Paints", category: "Creative Partner", image: "/sponsors/BIRLA Opus PAINTS_Creative Partner.jpg" },
  { name: "SP Singla Construction", category: "Diamond Sponsor", image: "/sponsors/SPSingla Construction Ltd._Diamond Sponsor.png" },
  { name: "Tredence", category: "Corporate Conclave Partner", image: "/sponsors/Tredence_Corporate Conclave Partner.png" },
  { name: "SAIL", category: "Gold Sponsor", image: "/sponsors/Sail_GoldSponsor.jpg" },
  { name: "BCCL", category: "Gold Sponsor", image: "/sponsors/BCCL GOLD.jpg" },
  { name: "Nihilent", category: "Presented-By Partner for Exhibitions", image: "/sponsors/Nihilent_Presented-By Partner for Exhibitions.png" },
  { name: "Punjab National Bank", category: "Banking Partner", image: "/sponsors/PNB_Banking Partner.png" },
  { name: "IFFCO", category: "Fertiliser Partner", image: "/sponsors/IFFCO_Fertiliser Partner.jpeg" },
  { name: "National Health Authority", category: "Official Healthcare Partner", image: "/sponsors/NHA_Official Healthcare Partner.jpg" },
  { name: "IMR", category: "Gold Sponsor", image: "/sponsors/IMR_Gold Sponsor.png" },
  { name: "BPCL", category: "Gold Sponsor & Innorave Presented by BPCL", image: "/sponsors/BPCL Golden Jubilee Logo_Gold Sponsor and Innorave Presented by Sponsor.jpg" },
  { name: "L&T Technology Services", category: "Digital Mobility Partner", image: "/sponsors/LTTS_Digital Mobility Partner.png" },
  { name: "Western Coalfields Limited", category: "Diamond Sponsor", image: "/sponsors/WCL_Diamond sponsor.jpg" },
  { name: "VDA", category: "Modex Presented By", image: "/sponsors/VDA_Modex Presented by VDA.png" },
  { name: "Bot Makers", category: "Robonex Co-Presented by", image: "/sponsors/BotMakers_RobonexCoPresenting.png" },
  { name: "MRC Hobbies", category: "Axelerate Co-Presented by", image: "/sponsors/MRCHobbies_RobowarsCoPresenting.png" },
  { name: "Rocketeers", category: "Solidboost Co-presented by", image: "/sponsors/Rocketeers_SolidboostCo-presenting.jpg" },
  { name: "Abhibus", category: "Travel Partner", image: "/sponsors/Abhibus_TravelPartner.jpg" },
  { name: "Gaana", category: "Music Partner", image: "/sponsors/gaana_Music Partner.jpg" },
  { name: "Bry Air", category: "Presenting Partner", image: "/sponsors/Bry_Air.png" },
  { name: "Benq", category: "Presenting Partner", image: "/sponsors/Benq.png" },
  { name: "CMPDI Coal", category: "Coal-Mining Partner", image: "/sponsors/CMPDI.png" },
  { name: "Hindustan Pencils Pvt. Ltd.", category: "Stationary Partner", image: "/sponsors/HinPen.png" },
  { name: "Shiv Naresh", category: "Apparel Partner", image: "/sponsors/ShivNaresh.png" },
  { name: "Lotte Choco Pie", category: "Snacks Partner", image: "/LotteChocoPie.png" },
  { name: "SBI", category: "In Association with", image: "/sponsors/SBI.png" },
  { name: "NHPC Limited", category: "Gold Partner", image: "/sponsors/NHPC Limited_Gold.jpg" },
  { name: "Hero Future Energies", category: "Sustainibility Partner", image: "/sponsors/Hero.jpeg" },
  { name: "BEL", category: "Diamond Sponsor", image: "/sponsors/BEL.jpeg" },
  { name: "HPCL", category: "Co-Powered by Sponsor", image: "/sponsors/HPCL.webp" },
  { name: "XBOOM", category: "Technical Partner", image: "/sponsors/xboom.png" },
  { name: "TATA TISCON", category: "CO-PRESENTED PARTENER OF CIVIC TECH EVENT", image: "/sponsors/Tiscon.png" }
];

const SponsorCard = ({ name, category, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.2 }}
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ margin: "-160px 0px -10px 0px", amount: 0.1 }}
      className="w-[300px] relative h-[400px] flex flex-col items-center text-white"
    >
      <Image
        src="/SponsorCard.jpg"
        width={300}
        height={0}
        className="absolute z-[-1] top-0"
        alt="sponsor-card"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div className="w-[200px] h-[200px] mt-[37px] mb-[20px] bg-[#E8D5B5] rounded overflow-hidden flex items-center justify-center p-4">
        <Image
          src={image}
          width={180}
          height={180}
          alt={name}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain"
          }}
        />
      </div>
      <div className="w-[250px] text-xl text-center bg-black bg-opacity-50 rounded-md p-2 mb-2">
        {name}
      </div>
      <div className="w-[250px] text-sm text-center bg-black bg-opacity-50 rounded-md p-2">
        {category}
      </div>
    </motion.div>
  );
};

export default function Sponsors() {
  return (
    <div className="relative">
      <Background_D />
      <FireEffect />
      <div className="w-[100vw] min-h-screen lg:h-fit overflow-x-clip">
        <Navbar />
        <div className="text-white px-20 py-20 text-5xl">Our Sponsors</div>
        <div className="w-full flex items-center justify-center pb-20">
          <div className="max-w-[1200px] flex flex-wrap gap-10 justify-center items-center">
            {sponsorData.map((sponsor, index) => (
              <SponsorCard
                key={index}
                name={sponsor.name}
                category={sponsor.category}
                image={sponsor.image}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
