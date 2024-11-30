import Image from "next/image";
import Link from "next/link";

const SocialCard=({href,src})=>{
    return(
        <Link href={href}><Image src={src} width={50} height={0}/></Link>
    )
}

export default function Footer(){
    return(<>
    <div className="text-5xl w-full flex flex-col items-center">
        <Image src="/sntc_footer.png" width={400} height={0}/>
        <div className="flex justify-center items-center p-5 gap-5">
            <SocialCard href="#" src="/facebook_icon.png"/>
            <SocialCard href="#" src="/insta_icon.png"/>
            <SocialCard href="#" src="/linkedin_icon.png"/>
            <SocialCard href="#" src="/X_icon.png"/>
            <SocialCard href="#" src="/youtube_icon.png"/>
        </div>
        <div className="p-5 text-3xl text-white">For more queries: <Link href="mailto:publicity@technex.in" className="underline text-slate-400">publicity@technex.in</Link></div>
    </div>
    </>)
}