import React from 'react';
import useStyles from './About.style';

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.aboutContainer}>
            <div className={classes.aboutContent}>
                <h1 className="aboutTitle">About Me</h1>
                <p className="aboutInfo">
                    Hi I am <strong>Aldi Wahyudi</strong>,
                    I am a Front End Developer. I have been working as a Front End Developer for 2 years. I have a lot of experience in building websites using HTML, CSS, and JavaScript. I also have experience in building websites using React JS and Next JS.
                </p>
            </div>
        </div>
    )
}
