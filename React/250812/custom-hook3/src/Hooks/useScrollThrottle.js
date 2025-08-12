import { useState, useEffect, useRef } from "react";

export function useScrollThrottle(delay = 200) {
  const [isBottom, setIsBottom] = useState(false);
  const throttleTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (throttleTimeout.current) return; // 대기 중이면 무시

      throttleTimeout.current = setTimeout(() => {
        setIsBottom(
          window.innerHeight + document.documentElement.scrollTop + 10 >=
            document.documentElement.offsetHeight
        );
        console.log("scrolling...");
        throttleTimeout.current = null; // 다시 실행 가능
      }, delay);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, [delay]);

  return isBottom;
}
