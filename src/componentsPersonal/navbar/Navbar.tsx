import { NavLink } from "react-router-dom";
import routes from "../../router/routes";
import { GiGamepad } from "react-icons/gi";
import useScroll from "../../hooks/useScroll";
import { FaUserAstronaut } from "react-icons/fa";
import { useContext } from "react";
import { PageContext } from "../../context/PageContext";
import DropPlatforms from "../dropdown/DropPlatforms";
import { MdOutlineGamepad } from "react-icons/md";

const Navbar = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }

  const { startPage, setBtnActive } = context;
  const [scrolled, scrollY] = useScroll();

  const isActive = (obj: { isActive: boolean }) =>
    obj.isActive
      ? "text-white  bg-accent p-3 rounded-none px-8"
      : "text-white p-3 rounded-none px-8 hover:bg-accent";

  const navLinkClick = () => {
    startPage();
    setBtnActive(false);
  };
  return (
    <div
      className={
        (scrollY > 30 ? "scrolledY " : " ") +
        "navbar bg-transparent fixed z-50 sm:ps-16"
      }
      ref={scrolled}
    >
      <div className="navbar-start">
        <div className="dropdown">
          {/* MOBILE */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hamburger-menu "
          >
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
            <NavLink
              onClick={() => navLinkClick()}
              to={routes.home}
              className={isActive}
            >
              HOME
            </NavLink>

            {/* <NavLink onClick={()=>startPage()} to={routes.platforms}  className={isActive}>PLATFORMS</NavLink> */}
            <DropPlatforms>PLATFORMS</DropPlatforms>

            <NavLink
              onClick={() => navLinkClick()}
              to={routes.genres}
              className={isActive}
            >
              GENRES
            </NavLink>
          </ul>
        </div>
        <a className="sm:text-5xl text-3xl font-bold lg:pt-7 flex text-accent">
          Ga
          <GiGamepad />
          er{" "}
          <span className="font-extrabold">
            <MdOutlineGamepad
              className={
                scrollY > 30
                  ? "rotate-180 transition-all"
                  : "rotate-45 transition-all"
              }
            />
          </span>{" "}
          .
        </a>
      </div>
      {/* PC */}
      <div className="navbar-center hidden lg:flex pt-7">
        <ul className="menu menu-horizontal p-0 bg-base-200 menuArea relative">
          <NavLink
            onClick={() => navLinkClick()}
            to={routes.home}
            className={isActive}
          >
            HOME
          </NavLink>

          {/* <NavLink onClick={()=>startPage()} to={routes.platforms}  className={isActive}>PLATFORMS</NavLink> */}
          <DropPlatforms>PLATFORMS</DropPlatforms>

          <NavLink
            onClick={() => navLinkClick()}
            to={routes.genres}
            className={isActive}
          >
            GENRES
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end lg:pt-7 sm:pe-10 overflow-hidden">
        <div className="flex  sm:gap-5 gap-2">
          <button className="btn btn-ghost rounded-none hover:bg-accent bg-base-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="sm:h-7 sm:w-7 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="dropdown dropdown-end  bg-base-100  hover:bg-accent">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="sm:w-8 w-6 rounded-full">
                <FaUserAstronaut className="text-3xl text-accent" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
