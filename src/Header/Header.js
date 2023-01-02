import React from 'react';
import useStyles from './Header.Style';
import NavMenu from './NavMenu';

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <div className='container'>
                <div className={classes.navbar}>
                    <div className={classes.logo}>
                        <h4>FireRex</h4>
                        <span>•</span>
                    </div>
                    <NavMenu />
                </div>
            </div>
        </div>
    )
}
