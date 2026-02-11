import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://th.bing.com/th/id/OIP._mVfeIz_M5OghcDn9HD8RgAAAA?w=121&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="Logo"
        />
        <span>Assignment_2</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
