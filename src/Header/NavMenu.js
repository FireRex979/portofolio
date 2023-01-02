import React from 'react';
import useStyles from './Header.Style';
import { useState } from 'react';

export default function NavMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const classes = useStyles();

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className={classes.navMenu}>
            <button type='button' onClick={handleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul>
                <li><a href="#">Project</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About Me</a></li>
            </ul>
        </div>
    )
}
