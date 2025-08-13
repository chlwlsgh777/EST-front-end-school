import { useState } from "react";
import "./App.css";

function Like() {
  return <p>Like</p>;
}

function App() {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <div>
      <button onClick={handleLike}>{liked ? "Unlike" : "Like"}</button>
      {liked && <Like />}
    </div>
  );
}

export default App;
