import { useEffect, useState } from "react";

export default function useTypography(text, speed = 100, started = true) {
  const [currentText, setCurrentText] = useState("");
  const [start, setStart] = useState(started);
  const [ended, setEnded] = useState(false);
  const startTyping = () => {
    setStart(true);
  };
  let ptr = 0;
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        if (currentText === text || ptr > text.length) {
          setEnded(true);
          clearInterval(interval);
        } else {
          setCurrentText(text.slice(0, ptr++));
        }
      }, speed);
      return () => {
        clearInterval(interval);
      };
    }
  }, [start, currentText, ptr, speed, text]);
  return [currentText, ended, startTyping];
}
