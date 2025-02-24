import Navbar from "../_components/Navbar";
import Background_B from "../_backgrounds/Background_B";
import { FirefliesEffect } from "../_components/particleEffects";
import GuidelinesContent from "../_components/GuidelinesContent";

export default function Login() {
  return (
    <>
      <Background_B>
        <div className="relative w-screen h-screen overflow-y-auto pt-10 mt-10">
          <div className="absolute inset-0 z-0">
            <FirefliesEffect />
          </div>
          <div className="relative z-10">
            <Navbar />
            <GuidelinesContent/>
          </div>
        </div>
      </Background_B>
    </>
  );
}
