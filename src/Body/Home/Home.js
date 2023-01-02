import React from 'react';
import useStyles from '../Body.style';
import {FaGithub, FaFacebook, FaLinkedin} from 'react-icons/fa';

export default function Home() {
    const classes = useStyles();
    return (
        <div className='container'>
            <div className={classes.identifyContainer}>
                <div className={classes.fotoProfileContainer}>
                    <img src="/foto-profile.png" alt="foto-profile" />
                </div>
                <div className={classes.identify}>
                    <h2>Hi, I'm <span>Aldi Wahyudi</span></h2>
                    <h2>a Web Developer</h2>
                    <div className="identifyInfo">
                        <p>I'm a web developer from Indonesia. I have a passion for web development and I'm always learning new things.</p>
                    </div>
                    <div className={classes.contactMe}>
                        <div className={classes.socialMediaContainer}>
                            <a href="https://www.facebook.com/aldi.wahyudi.7" target="_blank" rel="noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://www.linkedin.com/in/aldi-wahyudi-0b1b1b1b9/" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.linkedin.com/in/aldi-wahyudi-0b1b1b1b9/" target="_blank" rel="noreferrer">
                                <FaGithub />
                            </a>
                        </div>
                        <button className={classes.buttonHire}>Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
