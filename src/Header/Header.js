import React from 'react';
import useStyles from './Header.Style';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <div className='container'>
                <div className={classes.navbar}>
                    <Link to='/' className={classes.logo}>
                        <h4>FireRex</h4>
                        <span>•</span>
                    </Link>
                    <NavMenu />
                </div>
            </div>
        </div>
    )
}
