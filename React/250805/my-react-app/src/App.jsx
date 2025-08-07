import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Navbar>
      <Navbar.Brand>
        <a href="/">
          <div>Logo</div>
        </a>
      </Navbar.Brand>
      <Navbar.Links>
        <Navbar.Link to="/">Home</Navbar.Link>
        <Navbar.Link to="/about">About</Navbar.Link>
        <Navbar.Link to="/contact">Contact</Navbar.Link>
      </Navbar.Links>
      <Navbar.User>
        <img src="https://i.pravatar.cc/40" alt="User Avatar" />
        <span>John Doe</span>
      </Navbar.User>
    </Navbar>
  );
}

export default App;
