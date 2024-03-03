import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Header Component</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <hr/>
      <h1>CRUD App</h1>
    </div>
  );
}

export default Header;
