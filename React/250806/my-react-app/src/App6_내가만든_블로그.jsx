import "./App.css";
// npm install react-router-dom
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const BASE_URL = "https://dev.wenivops.co.kr/services/fastapi-crud/";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}
function Blog() {
  const { id } = useParams(); // 주소에서 id 꺼냄
  const [blog, setBlog] = useState(null); // 데이터를 저장할 변수
  const [loading, setLoading] = useState(true); // 로딩 중 표시
  const [error, setError] = useState(null); // 에러 저장

  useEffect(() => {
    fetch(`${BASE_URL}${id}/blog`)
      .then((res) => {
        if (!res.ok) throw new Error("데이터 가져오기 실패");
        return res.json();
      })
      .then((data) => {
        console.log(data); // 데이터 확인을 위한 콘솔 출력
        const foundBlog = data.find((blog) => blog.index === id);
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError(`ID ${id}에 해당하는 블로그를 찾을 수 없습니다.`);
        }
      })
      .catch((err) => setError(err.message)) // 에러 처리
      .finally(() => setLoading(false)); // 로딩 끝
  }, [id]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!blog) return <p>블로그 글이 없습니다.</p>;

  return (
    <div className="blog-post">
      <img src={`${BASE_URL}${blog.thumbnail}`} alt={blog.title} />
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <div className="post-info">
        <p>작성자: {blog.author}</p>
        <p>
          작성일: {blog.date} {blog.time}
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/1/blog">Blog 1</Link>
          <Link to="/2/blog">Blog 2</Link>
          <Link to="/3/blog">Blog 3</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
