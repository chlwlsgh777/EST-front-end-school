import { useState, useEffect } from "react";

function ImageList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // fetch는 비동기라 async/await을 별도 함수에서 처리
    async function fetchImages() {
      try {
        const res = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("이미지 불러오기 실패:", error);
      }
    }

    fetchImages();
  }); // [] -> 마운트 시 한 번만 실행

  return (
    <ul>
      {images.map((img) => (
        <li key={img.id}>
          <img src={img.download_url} alt={img.author} width={200} />
        </li>
      ))}
    </ul>
  );
}

export default ImageList;
