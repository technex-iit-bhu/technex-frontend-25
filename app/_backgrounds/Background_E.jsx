import Image from "next/image";
import { useEffect } from "react";

export default function Background_E() {
  useEffect(() => {
    const makeItRain = () => {
      const rain = document.querySelector(".rain.front-row");
      rain.innerHTML = "";

      let increment = 0;
      let drops = "";

      while (increment < 100) {
        const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        increment += randoFiver;
        drops += `
          <div class="drop" style="left: ${increment}%; bottom: ${
          randoFiver + randoFiver - 1 + 100
        }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
            <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
            <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
          </div>
        `;
      }

      rain.innerHTML = drops;
    };

    makeItRain();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="rain front-row absolute top-0 left-0 w-full h-full z-10"></div>
      <Image src="/bg5.png" alt="bg-2" fill className="object-cover blur-sm" />
    </div>
  );
}
