import React from "react";
import useStyles from "./Header.Style";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <ul>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
