import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../src/Providers/AuthProviders";
import userdefaultPic from "../../src/assets/user.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then()
    .catch();
  }; 

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allBook">All Books</NavLink>
      </li>
      <li>
        <NavLink to="/addBook">Add Book</NavLink>
      </li>
      <li>
        <NavLink to="/borrowedBooks">Borrowed Books</NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="flex items-center btn btn-ghost text-2xl font-bold">
            <img src={logo} alt="ReeBook Logo" className="w-8 h-8 mr-" />
            <span className="text-green-300">Library</span>
            <span className="text-green-600 font-bold ml-[-9px]">Hub</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex">
              <div className="hidden w-10 rounded-full md:tooltip md:tooltip-left" data-tip={user.displayName}>
                <img alt="Tailwind CSS Navbar component" src={user ? user.photoURL : {userdefaultPic}} className="rounded-full mr-1" />
              </div>
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}  
        </div>

      </div>
    </div>
  );
};

export default Navbar;
