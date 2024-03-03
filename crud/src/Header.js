import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <h1>CRUD App</h1>
      <hr />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/add-student">Add Student</Link>
    </div>
  );
}

export default Header;