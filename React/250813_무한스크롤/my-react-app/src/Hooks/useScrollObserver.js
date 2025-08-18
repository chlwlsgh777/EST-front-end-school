import { useEffect, useState } from "react";

export function useScrollObserver() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    // 감시할 sentinel 요소 생성
    const endLine = document.createElement("div");
    endLine.style.height = "1px";
    document.body.appendChild(endLine);

    // Intersection Observer 생성
    const observer = new IntersectionObserver(
      (entries) => {
        // 화면에 보이면 isBottom = true, 아니면 false
        if (entries[0].isIntersecting) {
          setIsBottom(true);
        } else {
          setIsBottom(false);
        }
      },
      {
        threshold: 1, // 요소가 100% 보일 때만 감지
      }
    );

    // 감시 시작
    observer.observe(endLine);

    // 언마운트 시 정리
    return () => {
      observer.disconnect();
      endLine.remove();
    };
  }, []);

  return isBottom;
}
