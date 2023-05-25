import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC<INav> = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={'/'}>
                    Home
                </Link>
              </li>
              <li>
                <Link to={'/projects'}>
                    Projects
                </Link>
              </li>
              <li>
              <Link to={'/about'}>
                    About
                </Link>
              </li>
              <li>
              <Link to={'/interests'}>
                    Interests
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-3xl">TEST</a>
        </div>
        <div className="navbar-end">
        </div>
      </div>
    </>
  );
};

interface INav { }

export default Nav;
