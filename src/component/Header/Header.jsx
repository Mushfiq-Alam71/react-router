import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold ">My Website</h1>

      <nav className="flex flex-row gap-5">
        <Link
          className="btn hover:bg-slate-400 hover:text-white text-2xl font-semibold "
          to="/"
        >
          Home
        </Link>
        <Link
          className="btn hover:bg-slate-400 hover:text-white text-2xl font-semibold "
          to="/about"
        >
          About
        </Link>
        <Link
          className="btn hover:bg-slate-400 hover:text-white text-2xl font-semibold "
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="btn hover:bg-slate-400 hover:text-white text-2xl font-semibold "
          to="/users"
        >
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Header;
