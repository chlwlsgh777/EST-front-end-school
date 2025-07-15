let x = 0; // 박스 위치
let y = 0;
const box = document.querySelector(".box");

// keydown: 키를 누를때 마다 계속 발생
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    x += 5;
  } else if (e.key === "ArrowLeft") {
    x -= 5;
  } else if (e.key === "ArrowDown") {
    y += 5;
  } else if (e.key === "ArrowUp") {
    y -= 5;
  }

  box.style.transform = `translate(${x}px, ${y}px)`;
});
