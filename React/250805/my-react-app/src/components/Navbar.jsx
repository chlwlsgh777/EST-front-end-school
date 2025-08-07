
import React, { createContext, useContext } from 'react';

const NavbarContext = createContext();

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <NavbarContext.Provider value={{}}>
        {children}
      </NavbarContext.Provider>
    </nav>
  );
}

function Brand({ children }) {
  return <div className="navbar-brand">{children}</div>;
}

function Links({ children }) {
  return <ul className="navbar-links">{children}</ul>;
}

function Link({ children, to }) {
  return (
    <li className="navbar-link">
      <a href={to}>{children}</a>
    </li>
  );
}

function User({ children }) {
  return <div className="navbar-user">{children}</div>;
}

Navbar.Brand = Brand;
Navbar.Links = Links;
Navbar.Link = Link;
Navbar.User = User;

export default Navbar;
