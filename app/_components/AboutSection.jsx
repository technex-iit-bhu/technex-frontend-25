"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  const leftVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-16 px-4">
      <div className="hidden lg:block absolute h-full w-[2px] bg-gray-300 left-1/2 transform -translate-x-1/2 z-0" />

      {/* First Branch: About Technex */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-center w-full max-w-[1200px] mb-16">
        {/* Left side */}
        <motion.div
          ref={ref1}
          variants={leftVariants}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-end  lg:pr-8 mb-8 lg:mb-0"
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-white lg:text-right">
            About Technex
          </h2>
          <div className="w-full h-[500px] overflow-hidden rounded-lg">
            <Image
              src="/technex.jpg"
              alt="Technology and innovation representation"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              width={800}
              height={500}
            />
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:w-1/2 lg:pl-8 space-y-4 text-justify text-white text-lg"
        >
          <div className="bg-black bg-opacity-80 rounded-lg p-2 lg:ml-4">
            <p>
              Welcome to <span className="text-yellow-400">Technex</span>, the
              flagship Techno-Management festival of{" "}
              <span className="text-yellow-400">IIT BHU</span>, proudly
              recognized as Asia&apos;s premier and oldest event of its kind.
              Rooted in a legacy of innovation and excellence,{" "}
              <span className="text-yellow-400">Technex</span> has become a
              distinguished platform that celebrates the fusion of technical
              ingenuity and managerial brilliance.
            </p>
            <p>
              Every year, <span className="text-yellow-400">Technex</span>{" "}
              attracts brilliant minds from across the country, offering them an
              unparalleled stage to showcase their talents, push boundaries, and
              discover new possibilities.
            </p>
            <p>
              The festival is a dynamic blend of competitive events, hands-on
              workshops, insightful guest lectures, and state-of-the-art
              exhibitions. From tackling real-world technical challenges to
              gaining practical knowledge through expert-led sessions,
              participants experience a holistic journey of learning and growth.
            </p>
            <p>
              As we gear up for{" "}
              <span className="text-yellow-400">Technex&apos;25</span>, we
              remain committed to our mission of fostering innovation,
              syinspiring entrepreneurship, and bridging the gap between
              academia and industry. Whether you&apos;re an engineering
              enthusiast, a budding entrepreneur, or a tech visionary,{" "}
              <span className="text-yellow-400">Technex</span> provides a
              vibrant ecosystem to demonstrate your skills, connect with
              industry leaders, and stay ahead of the curve.
            </p>
            <p>
              At its core, <span className="text-yellow-400">Technex</span>{" "}
              serves as a crucial link between theoretical knowledge and
              real-world application. It&apos;s more than just a
              festival—it&apos;s a celebration of excellence, a hub for
              innovation, and a launchpad for future trailblazers.
            </p>
            <p>
              Join us at{" "}
              <span className="text-yellow-400">Technex&apos;25</span> and be
              part of a journey where ideas ignite, collaborations thrive, and
              excellence takes center stage.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Second Branch: About Varanasi */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-center w-full max-w-[1200px]">
        {/* Left side */}
        <motion.div
          ref={ref2}
          variants={leftVariants}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:w-1/2 lg:pr-8 order-2 lg:order-1 mb-8 lg:mb-0 space-y-4 text-justify text-white text-lg"
        >
          <div className="bg-black bg-opacity-80 rounded-lg p-2 lg:mr-4 mt-6 md:mt-10">
            <p>
              <span className="text-yellow-400">Varanasi</span>, also known as{" "}
              <span className="text-yellow-400">Kashi</span> or{" "}
              <span className="text-yellow-400">Benaras</span>, is a city
              steeped in history, spirituality, and culture. Nestled along the
              banks of the sacred{" "}
              <span className="text-yellow-400">River Ganga</span>, it is one of
              the world&apos;s oldest continuously inhabited cities, radiating
              an aura of timeless heritage and divine significance.
            </p>
            <p>
              Renowned as the{" "}
              <span className="text-yellow-400">Cultural Capital of India</span>
              , Varanasi is a melting pot of traditions, where ancient rituals
              meet modern aspirations. The city is home to countless temples,
              including the iconic{" "}
              <span className="text-yellow-400">Kashi Vishwanath Temple</span>,
              revered as one of the twelve Jyotirlingas. Each dawn in Varanasi
              brings the mesmerizing sight of devotees performing rituals along
              the ghats, while evenings come alive with the grandeur of the{" "}
              <span className="text-yellow-400">Ganga Aarti</span>, an
              awe-inspiring spiritual ceremony.
            </p>
            <p>
              Beyond its spiritual essence, Varanasi is a vibrant hub of art,
              music, and learning. It is the birthplace of the{" "}
              <span className="text-yellow-400">Banarasi saree</span>, a symbol
              of craftsmanship and elegance, and the city where classical music
              and dance have flourished for centuries. Scholars and students
              from around the globe flock to this city, drawn by its rich
              intellectual and cultural heritage, with{" "}
              <span className="text-yellow-400">
                Banaras Hindu University (BHU)
              </span>{" "}
              standing as a beacon of academic excellence.
            </p>
            <p>
              At <span className="text-yellow-400">Technex &apos;25</span>, we
              invite you to experience not only the spirit of innovation but
              also the soul of <span className="text-yellow-400">Varanasi</span>
              —a city that will leave an indelible mark on your heart.
            </p>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start pl-0 lg:pl-8 order-1 lg:order-2 lg:px-5"
        >
          <h2 className="text-4xl text-white font-bold mb-4 text-center lg:text-left">
            About Varanasi
          </h2>
          <div className="w-full h-[500px] overflow-hidden rounded-lg">
            <Image
              src="/varanasi.jpg"
              alt="Varanasi Ghats during evening aarti"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              width={800}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
