import Image from "next/image";
import { useEffect } from "react";

export default function Background_E() {
  useEffect(() => {
    // Start the rain effect once the component is mounted
    const makeItRain = () => {
      const rain = document.querySelector('.rain.front-row');
      rain.innerHTML = '';  // clear any existing rain

      let increment = 0;
      let drops = '';

      while (increment < 100) {
        const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        increment += randoFiver;
        drops += `
          <div class="drop" style="left: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
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
    <>
      <div className="relative w-full h-full">
        <div className="rain front-row absolute top-0 left-0 w-full h-full z-10"></div>
        <Image
          src="/bg5.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="bg-2"
          className="fixed min-w-[400px] w-[100vw] h-[100vh] object-cover top-0 left-0 z-[-1]"
        />
      </div>
    </>
  );
}
