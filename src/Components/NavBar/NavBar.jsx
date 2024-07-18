import React, { useState } from "react";
import "./NavBar.scss";
import menuIcon from "../../assets/icons/menu-icon.svg";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu =()=>{
    setIsOpen(false);
  }
  return (
    <div>
      <nav className="nav">

          <img className="nav__menu-icon" onClick={!isOpen?openMenu:closeMenu} src={menuIcon} alt="menu icon" />

        {isOpen && (
          <article className="nav__menu">
            <NavLink
            onClick={closeMenu}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "inactive"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
             onClick={closeMenu}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "inactive"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
             onClick={closeMenu}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "inactive"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </article>
        )}
        <article className="nav__menu-desktop">
        <NavLink
            onClick={closeMenu}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "inactive"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
             onClick={closeMenu}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "inactive"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
             onClick={closeMenu}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "inactive"
              }
              to="/contact"
            >
              Contact
            </NavLink>
        </article>
        <article className="nav__logo">
          <p>
            BLUE KEE DESIGN CO.
          </p>
        </article>
      </nav>
    </div>
  );
}

export default NavBar;
