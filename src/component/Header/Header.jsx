import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold ">My Website</h1>

      <nav className="flex flex-row gap-5">
        <NavLink
          className="btn hover:bg-slate-400 hover:text-white text-2xl font-semibold "
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="btn hover:bg-slate-400 hover:text-white text-2xl font-semibold "
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="btn hover:bg-slate-400 hover:text-white text-2xl font-semibold "
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className="btn hover:bg-slate-400 hover:text-white text-2xl font-semibold "
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          className="btn hover:bg-slate-400 hover:text-white text-2xl font-semibold "
          to="/posts"
        >
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
