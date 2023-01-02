import React from 'react';
import useStyles from './Footer.style';

export default function Footer() {
    const classes = useStyles();
    const year = new Date().getFullYear();
    return (
        <div className={classes.footer}>
            <div className='container'>
                <div className={classes.footerLinkContainer}>
                    <div className='footerDescription'>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='linkFooter'>
                        <p>© {year} <span>FireRex</span> . All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
