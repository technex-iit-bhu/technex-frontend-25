import Navbar from "../_components/Navbar";
import Background_B from "../_backgrounds/Background_B";
import LoginCard from "./LoginCard";
import { FirefliesEffect } from "../_components/particleEffects";

export default function Login() {
  return (
    <>
      <Background_B>
        <div className="relative w-screen h-screen overflow-y-auto pt-12">
          <div className="absolute inset-0 z-0">
            <FirefliesEffect />
          </div>
          <div className="relative z-10">
            <Navbar />
            <LoginCard />
          </div>
        </div>
      </Background_B>
    </>
  );
}
