import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/show-books">Books</Link>
        </li>
        <li>
          <Link to="/add-book">Add Books</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
