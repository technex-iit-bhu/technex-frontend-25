import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialCard = ({ href = "#", src, alt, hoverColor }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative border-2 border-white/20 bg-black/80 p-2.5 rounded-lg
        transition-all duration-300 ease-in-out
        hover:-translate-y-0.5
        hover:border-white/50
        hover:bg-black
        social-card
        font-minecraft`}
      style={{ "--hover-color": hoverColor }}
    >
      <Image
        src={src}
        width={40}
        height={40}
        alt={alt}
        className="transition-all duration-300 brightness-0 invert
          group-hover:scale-110"
      />
    </Link>
  );
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full py-8 relative overflow-visible bg-black/90"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="mb-4 transition-all duration-300 rounded-lg p-2 bg-black
              border-2 border-[#8B4513] 
              hover:shadow-[0_0_20px_rgba(255,140,0,0.6)]
              hover:border-[#FF8C00]
              hover:bg-gradient-to-r hover:from-[#8B4513]/20 hover:to-[#FF8C00]/20"
          >
            <Image
              src="/sntc_footer.png"
              width={200}
              height={50}
              alt="SNTC Logo"
              className="pixel-logo brightness-0 invert"
            />
          </motion.div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6 p-6 bg-black/50 rounded-lg border border-white/10">
            <SocialCard
              href="https://www.facebook.com/technexiitbhu/"
              src="/facebook_icon.png"
              alt="Facebook"
              hoverColor="#4267B2"
            />
            <SocialCard
              href="https://www.instagram.com/technexiitbhu/"
              src="/insta_icon.png"
              alt="Instagram"
              hoverColor="#E1306C"
            />
            <SocialCard
              href="https://www.linkedin.com/company/technex-iit-bhu-varanasi/"
              src="/linkedin_icon.png"
              alt="LinkedIn"
              hoverColor="#0077B5"
            />
            <SocialCard
              href="https://x.com/technexiitbhu"
              src="/X_icon.png"
              alt="Twitter"
              hoverColor="#1DA1F2"
            />
            <SocialCard
              href="https://www.youtube.com/@TechnexIITBHU"
              src="/youtube_icon.png"
              alt="YouTube"
              hoverColor="#FF0000"
            />
          </div>

          {/* Contact info */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg font-minecraft text-center transition-all duration-300 rounded-lg p-2 border-2 border-purple-600/50 
              hover:border-purple-600 
              hover:bg-purple-600/10
              hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
              hover:backdrop-blur-sm
              hover:backdrop-brightness-125
              hover:backdrop-saturate-150
              relative
              before:absolute before:inset-0 before:rounded-lg
              before:bg-gradient-to-r before:from-purple-600/0 before:via-purple-600/20 before:to-purple-600/0
              before:opacity-0 hover:before:opacity-100
              before:transition-opacity before:duration-300"
          >
            <span className="text-gray-300">For queries: </span>
            <Link
              href="mailto:publicity@technex.in" 
              className="text-white hover:text-purple-400 transition-colors minecraft-link"
            >
              publicity@technex.in
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: "Minecraft";
          src: url("/fonts/minecraft.ttf") format("truetype");
        }

        .pixel-logo {
          image-rendering: pixelated;
        }

        .minecraft-link {
          position: relative;
          text-decoration: none;
          text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
        }

        .pixel-image {
          image-rendering: pixelated;
          transition: filter 0.3s ease;
        }

        .social-card {
          position: relative;
        }

        .social-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 8px;
          background: transparent;
          transition: all 0.3s ease;
        }

        .social-card:hover::before {
          box-shadow: 0 0 15px var(--hover-color);
          animation: glow 1.5s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from {
            box-shadow: 0 0 5px var(--hover-color), 0 0 10px var(--hover-color),
              0 0 15px var(--hover-color);
          }
          to {
            box-shadow: 0 0 10px var(--hover-color), 0 0 20px var(--hover-color),
              0 0 30px var(--hover-color);
          }
        }
      `}</style>
    </motion.footer>
  );
}
