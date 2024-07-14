import React, { useState } from "react";
import "./NavBar.scss";
import menuIcon from "../assets/icons/menu-icon.svg";
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
        <article>
          <img onClick={!isOpen?openMenu:closeMenu} src={menuIcon} alt="menu icon" />
        </article>
        {isOpen && (
          <article className="nav__menu">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "inactive"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "inactive"
              }
              to="/about"
            >
              About
            </NavLink>
          </article>
        )}
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
