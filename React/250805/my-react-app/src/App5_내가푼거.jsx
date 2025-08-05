import { useState } from "react";
import data from "./data.jsx";

function App() {
  const [inputValue, setSearchTerm] = useState("");

  const InputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = data.filter((book) =>
    book.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <h1>Book List</h1>
      <input type="text" value={inputValue} onChange={InputChange} />
      {filteredBooks.map((book, index) => {
        return (
          <section key={index}>
            <img
              src={`https://www.books.weniv.co.kr/${book.thumbnail}`}
              alt={book.title}
              style={{ height: "200px" }}
            />

            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </section>
        );
      })}
    </>
  );
}

export default App;
