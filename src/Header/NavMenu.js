import React from "react";
import useStyles from "./Header.Style";
import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function NavMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const classes = useStyles();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={classes.navMenu}>
      <button type="button" onClick={handleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        onClick={handleMenu}
        className={clsx(classes.overlay, {
          [classes.overlayHide]: !showMenu,
        })}
      ></div>
      <div
        className={clsx(classes.sidebar, {
          [classes.sidebarHide]: !showMenu,
        })}
      >
        <ul className={classes.sidebarMenu}>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          {/* <li>
          <Link to="/blog">Blogs</Link>
        </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <ul className={classes.navUl}>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        {/* <li>
          <Link to="/blog">Blogs</Link>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
