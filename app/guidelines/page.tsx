import Navbar from "../_components/Navbar";
import Background_B from "../_backgrounds/Background_B";
import { FirefliesEffect } from "../_components/particleEffects";
import GuidelinesContent from "../_components/GuidelinesContent";

export default function Guidelines() {
  return (
    <div className="absolute">
      <Background_B>
        <FirefliesEffect />
        <div className="w-[100vw] h-[100vh] lg:h-fit overflow-x-clip">
          <Navbar />
          <main className="flex-grow p-2 md:p-4 pt-24">
            <GuidelinesContent />
          </main>
        </div>
      </Background_B>
    </div>
  );
}