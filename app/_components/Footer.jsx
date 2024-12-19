import Image from "next/image";
import Link from "next/link";
import {motion} from 'motion/react'

const SocialCard=({href,src})=>{
    return(
        <Link href={href}><Image src={src} width={50} height={0} alt="social_card"/></Link>
    )
}

export default function Footer(){
    return(<>
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{ duration: 0.5,delay:0.5, ease: "linear" }}  className="text-5xl w-full flex flex-col items-center font-classic">
        <Image src="/sntc_footer.png" width={400} height={0}alt="sntc_image" />
        <div className="flex justify-center items-center p-5 gap-5">
            <SocialCard href="#" src="/facebook_icon.png"/>
            <SocialCard href="#" src="/insta_icon.png"/>
            <SocialCard href="#" src="/linkedin_icon.png"/>
            <SocialCard href="#" src="/X_icon.png"/>
            <SocialCard href="#" src="/youtube_icon.png"/>
        </div>
        <div className="p-5 text-3xl text-white">For more queries: <Link href="mailto:publicity@technex.in" className="underline text-slate-400">publicity@technex.in</Link></div>
    </motion.div>
    </>)
}