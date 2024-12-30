import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialCard = ({ href, src, alt }) => {
  return (
    <motion.div
      whileHover={{ rotate: 360, scale: 1.2 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          width={50}
          height={50}
          alt={alt}
          className="rounded-full shadow-lg"
        />
      </Link>
    </motion.div>
  );
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative w-full py-12 flex flex-col items-center font-classic bg-black/50 backdrop-blur-sm text-white overflow-hidden border border-transparent rounded-lg"
    >
      <motion.div
        className="absolute inset-0 rounded-lg border-4 border-black animate-border"
        style={{
          background:
            "linear-gradient(130deg, rgba(255, 0, 150, 0.4), rgba(0, 204, 255, 0.4))",
          maskImage: "linear-gradient(#fff, rgba(255,255,255,0))",
          WebkitMaskImage: "linear-gradient(#fff, rgba(255,255,255,0))",
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Footer Logo */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative z-10 px-6"
      >
        <Image
          src="/sntc_footer.png"
          width={400}
          height={0}
          alt="SNTC Image"
          className="mb-4 drop-shadow-lg max-w-full"
        />
      </motion.div>

      {/* Social Cards */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delayChildren: 0.5 }}
        className="flex justify-center items-center p-5 gap-5 z-10 flex-wrap"
      >
        <SocialCard href="#" src="/facebook_icon.png" alt="Facebook" />
        <SocialCard href="#" src="/insta_icon.png" alt="Instagram" />
        <SocialCard href="#" src="/linkedin_icon.png" alt="LinkedIn" />
        <SocialCard href="#" src="/X_icon.png" alt="Twitter" />
        <SocialCard href="#" src="/youtube_icon.png" alt="YouTube" />
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="p-5 text-lg text-white z-10 text-center font-minecraft"
        whileHover={{ scale: 1.2, color: "#FFEB3B" }}
        transition={{ duration: 0.5 }}
      >
        For more queries:{' '}
        <Link href="mailto:publicity@technex.in" className="underline">
          publicity@technex.in
        </Link>
      </motion.div>
    </motion.footer>
  );
}