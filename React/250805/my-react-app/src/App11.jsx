import { useState } from "react";

function About() {
  return <p>About</p>;
}

function Profile() {
  return <p>Profile</p>;
}

function Contact() {
  return <p>Contact</p>;
}

function Contents({ page }) {
  if (page === "about") {
    return <About />;
  } else if (page === "profile") {
    return <Profile />;
  } else if (page === "contact") {
    return <Contact />;
  }
  return <About />;
}

function App() {
  const [page, setPage] = useState("about");
  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => setPage("about")}>About</button>
          </li>
          <li>
            <button onClick={() => setPage("profile")}>Profile</button>
          </li>
          <li>
            <button onClick={() => setPage("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
      <section>
        <Contents page={page} />
      </section>
    </>
  );
}

export default App;
