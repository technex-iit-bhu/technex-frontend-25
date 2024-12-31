import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialCard = ({ href, src, alt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="pixel-card"
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          width={40}
          height={40}
          alt={alt}
          className="pixel-image"
        />
      </Link>
    </motion.div>
  );
};

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full py-8 relative overflow-hidden"
    >
      {/* Minecraft-style background */}
      <div className="absolute inset-0 minecraft-pattern"></div>
      
      {/* Animated border */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="mb-4"
          >
            <Image
              src="/sntc_footer.png"
              width={200}
              height={50}
              alt="SNTC Logo"
              className="pixel-logo"
            />
          </motion.div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6">
            <SocialCard href="https://www.facebook.com/technexiitbhu/" src="/facebook_icon.png" alt="Facebook" />
            <SocialCard href="https://www.instagram.com/technexiitbhu/" src="/insta_icon.png" alt="Instagram" />
            <SocialCard href="https://www.linkedin.com/company/technex-iit-bhu-varanasi/" src="/linkedin_icon.png" alt="LinkedIn" />
            <SocialCard href="https://x.com/technexiitbhu" src="/X_icon.png" alt="Twitter" />
            <SocialCard href="https://www.youtube.com/@TechnexIITBHU" src="/youtube_icon.png" alt="YouTube" />
          </div>

          {/* Contact info */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg font-minecraft text-center minecraft-text"
          >
            For queries:{' '}
            <Link 
              href="mailto:publicity@technex.in"
              className="hover:text-yellow-400 transition-colors minecraft-link"
            >
              publicity@technex.in
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'Minecraft';
          src: url('/fonts/minecraft.ttf') format('truetype');
        }

        .minecraft-pattern {
          background: 
            linear-gradient(135deg, #2a2a2a 25%, transparent 25%) -10px 0,
            linear-gradient(225deg, #2a2a2a 25%, transparent 25%) -10px 0,
            linear-gradient(315deg, #2a2a2a 25%, transparent 25%),
            linear-gradient(45deg, #2a2a2a 25%, transparent 25%);
          background-size: 20px 20px;
          background-color: #333333;
          animation: patternShift 40s linear infinite;
        }

        @keyframes patternShift {
          from { background-position: 0 0; }
          to { background-position: 100px 100px; }
        }

        .pixel-border-animate {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, 
            #ff0000, #ff7f00, #ffff00, #00ff00, 
            #0000ff, #4b0082, #8f00ff, #ff0000);
          background-size: 200% 100%;
          animation: borderFlow 2s linear infinite;
        }

        @keyframes borderFlow {
          0% { background-position: 200% 0; }
          100% { background-position: 0 0; }
        }

        .pixel-card {
          background: #1a1a1a;
          padding: 10px;
          border: 4px solid #404040;
          position: relative;
          transition: all 0.3s ease;
          image-rendering: pixelated;
        }

        .pixel-card::after {
          content: '';
          position: absolute;
          inset: -5px;
          background: linear-gradient(45deg, #404040, #1a1a1a);
          z-index: -1;
          transition: all 0.3s ease;
        }

        .pixel-card:hover::after {
          filter: brightness(1.5);
        }

        .pixel-logo {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
          image-rendering: pixelated;
        }

        .minecraft-text {
          color: #ffffff;
          text-shadow: 2px 2px #000000;
          letter-spacing: 0.05em;
        }

        .minecraft-link {
          position: relative;
          color: #ffaa00;
          text-decoration: none;
          text-shadow: 1px 1px #000000;
        }

        .minecraft-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 2px;
          background: currentColor;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .minecraft-link:hover::after {
          transform: scaleX(1);
        }

        .pixel-image {
          image-rendering: pixelated;
          transition: filter 0.3s ease;
        }

        .pixel-image:hover {
          filter: brightness(1.2);
        }
      `}</style>
    </motion.footer>
  );
}