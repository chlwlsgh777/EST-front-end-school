export function useScrollObserver() {
  //1. 옵저버를 만든다.
  // 2. 옵저버가 감시할 요소를 지정한다.
  // 3. 옵저버가 감시할 요소가 화면에 보일 때 콜백 함수를 실행한다.
  // 4. 옵저버를 해제한다.
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const endLine = document.createElement("div");
    endLine.style.height = "10px";
    document.body.appendChild(endLine);

    const observer = new IntersectionObserver(
      (() => {},
      {
        threshold: 1,
      })
    );
    observer.observe(endLine);
  });
}
