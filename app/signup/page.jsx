import Navbar from "../_components/Navbar";
import Background_B from "./../_backgrounds/Background_B";
import SignupCard from "./SignupCard";
import { FirefliesEffect } from "../_components/particleEffects";

export default function Signup() {
  return (
    <>
      <Background_B>
        <div className="relative w-screen h-screen overflow-y-auto mt-10 pt-20">
          <div className="absolute inset-0 z-0">
            <FirefliesEffect />
          </div>
          <div className="relative z-10">
            <Navbar />
            <SignupCard />
          </div>
        </div>
      </Background_B>
    </>
  );
}
