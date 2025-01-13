"use client"
import Background_D from "../_backgrounds/Background_D";
import Navbar from "../_components/Navbar";
import { FireEffect } from "../_components/particleEffects";
import Footer from "../_components/Footer";

function Card({ alt, description, imageSrc,textColor="white" }) {
  return (
    <>
      <div className="w-[300px] h-[400px] relative overflow-hidden group transition-all shadow-lg">
        <img
          src={imageSrc || "/projectDefault.jpg"}
          alt=""
          className="w-full h-full object-cover object-center absolute top-0 group-hover:scale-[2] origin-top-left transition-all"
        />
        <div className={`absolute w-full h-full group-hover:backdrop-blur-xl transition-all p-4 text-${textColor}`}>
          <div className="w-full text-xl font-[500]">{alt || ""}</div>
          <div className="w-full h-full relative text-md left-[120%] group-hover:left-0 p-4 transition-all overflow-y-auto">
            {description || ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Gallery() {

  const images = [
    { imageSrc: "/gallery/Sophie.png", alt: "Sophia" ,description:`Sophia, the humanoid robot developed by Hanson Robotics, and Lakshmi, an innovative AI-powered robot, represent the cutting-edge of robotics and AI technology. Sophia's engaging interaction with attendees at Technex '18 sparked conversations about AI's future, while Lakshmi showcased practical applications of robotics in daily life. Their presence at Technex '25 will once again provide a glimpse into the future of robotics, AI ethics, and the potential of human-robot collaboration.`},
    { imageSrc: "/gallery/AshneerGrover.png", alt: "Ashneer Grover" ,description:`As a visionary entrepreneur and co-founder of BharatPe, Ashneer Grover has transformed the fintech landscape in India. His innovative approach to digital payments has empowered millions of merchants across the country. In his previous session at Technex '24, Ashneer shared `},
    { imageSrc: "/gallery/GuruRandhawa.png", alt: "Guru Randhawa" ,description:`A dynamic force in the Indian music industry, Guru Randhawa is renowned for his chart-topping Punjabi and Bollywood tracks that have captivated audiences worldwide. Known for hits like "Lahore" and "High Rated Gabru," Guru's vibrant performances and soulful voice make him a musical icon. His electrifying performance at Technex’19 left the audience in awe, setting the stage on fire with his energy and charisma. `},
    { imageSrc: "/gallery/JubinNautiyal.png", alt: "Jubin Nautiyal" ,description:`Jubin Nautiyal, celebrated for his melodious voice and versatile singing, has carved a niche in the Indian music scene with songs like "Tum Hi Aana" and "Zindagi Kuch Toh Bata." His ability to blend classical, folk, and contemporary music has earned him numerous accolades. The soulful performance by Jubin at Technex’20  was a crowd favorite, leaving attendees `},
    { imageSrc: "/gallery/KavithaSubramanian.jpg", alt: "Kavitha Subramanian",description:`As a co-founder of Upstox, Kavitha Subramanian has revolutionized the way Indians invest in the stock market. Her insightful session at Technex '23 explored the intersection of technology and finance, providing valuable advice to aspiring fintech entrepreneurs. `,textColor:"black"},
    { imageSrc: "/gallery/LaxmiAgarwal.png", alt: "Laxmi Agarwal" ,description:`Laxmi Agarwal, acid attack survivor and founder of Stop Sale Acid, is a symbol of resilience and change. Her efforts led to strict regulations on acid sales in India. Honored globally, she received the International Women of Courage Award from Michelle Obama in 2014 and the International Women Empowerment Award in 2019. Her inspiring Technex’20 talk championed gender equality, leaving a lasting impact. Reflecting on the event, she said, "It was a superb experience. I had a blast and would love to come back. Thank you, Technex!" Laxmi remains a beacon of hope and empowerment worldwide.`},
    { imageSrc: "/gallery/MikaSingh.png", alt: "Mika Singh" ,description:`Mika Singh, the powerhouse of Punjabi and Bollywood music, is known for his energetic performances and blockbuster hits like "Bas Ek King" and "Aankh Marey." His charismatic stage presence and infectious beats make him a favorite among music enthusiasts. Mika's high-octane performance at Technex '24 had the audience dancing and singing along, making it one of the most memorable highlights of the fest.`},
    { imageSrc: "/gallery/NamitaThapar.png", alt: "Namita Thapar" ,description:`Namita Thapar, Executive Director of Emcure Pharmaceuticals, is a prominent business leader known for her contributions to the healthcare industry and her role as a judge on the popular show Shark Tank India. Her session at Technex '22 was highly inspiring, where she shared her journey of entrepreneurial success and insights into the challenges of leading a global pharmaceutical company. `},
    { imageSrc: "/gallery/NitinVijay.png", alt: "Nitin Vijay" ,description:`Nitin Vijay, the founder and CEO of Motion Education, is a renowned educator and entrepreneur who has transformed the coaching landscape for competitive exams in India. His session at Technex '23 was a highlight, where he shared his expertise in education technology and strategies for academic success, leaving a lasting impact on students and educators alike.`},
    { imageSrc: "/gallery/RajivAnand.png", alt: "Rajiv Anand" ,description:`Rajiv Anand, the Executive Director of Axis Bank, is a distinguished leader in the financial sector with a deep understanding of banking and investment strategies. His insightful session at Technex '24 explored the evolving landscape of banking in the digital age, providing valuable perspectives on innovation in financial services. `},
    { imageSrc: "/gallery/SandeepJain.png", alt: "Sandeep Jain" ,description:`Founder of GeeksforGeeks, Sandeep Jain is a prominent figure in the tech education space, known for his contributions to coding education and computer science resources. His workshop at Technex’22 was highly praised for its practical tips and hands-on approach, helping attendees enhance their coding skills.`},
    { imageSrc: "/gallery/SankarAnandPal.jpg", alt: "Sankar Anand Pal" ,description:`A distinguished computer scientist, Dr. Sankar Kumar Pal is renowned for his pioneering work in pattern recognition, machine learning, and soft computing. His keynote speech at Technex '23 was a thought-provoking exploration of AI's potential, captivating the audience with his deep knowledge and insights.`},
    { imageSrc: "/gallery/SatishDua.png", alt: "Satish Dua" ,description:`Lt. Gen. Satish Dua (Retd.), a decorated veteran of the Indian Army, is known for his exemplary leadership and strategic acumen. His powerful talk at Technex '24 on leadership and resilience in the face of challenges resonated deeply with attendees, inspiring many with his life lessons from the armed forces. `},
    { imageSrc: "/gallery/TechnicalGuruji.png", alt: "Technical Guruji" ,description:`Gaurav Chaudhary, popularly known as Technical Guruji, is a leading tech YouTuber who simplifies complex technology topics for his millions of followers. His engaging reviews and insights into gadgets and innovations have made technology accessible to all. His session at Technex '23 was highly engaging, with attendees appreciating his ability to demystify technology trends.`},
  ];

  return (
    <div className="absolute">
      <Background_D />
      <FireEffect />
      <div className="w-[100vw] h-[100vh] lg:h-fit overflow-x-clip">
        <Navbar />
        <div className="text-white px-20 py-20 text-5xl">Gallery</div>
        <div className="w-full flex items-center justify-center mb-24">
          <div className="max-w-[1200px] flex flex-wrap gap-20 justify-center items-center">
            {images.map((image, idx) => (
              <Card key={idx} {...image}/>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
