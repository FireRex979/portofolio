import React from "react";
import useStyles from "../Body.style";
import { socialMediaData } from "../../Object.utils";

export default function Home() {
  const classes = useStyles();
  const socialMedia = socialMediaData();
  console.log(socialMedia);
  return (
    <div className="container">
      <div className={classes.identifyContainer}>
        <div className={classes.fotoProfileContainer}>
          <img src="/foto-profile.png" alt="foto-profile" />
        </div>
        <div className={classes.identify}>
          <h2>
            Hi, I'm <span>Aldi Wahyudi</span>
          </h2>
          <h2>a Web Developer</h2>
          <div className="identifyInfo">
            <p>
              I'm a web developer from Indonesia. I have a passion for web
              development and I'm always learning new things.
            </p>
          </div>
          <div className={classes.contactMe}>
            <div className={classes.socialMediaContainer}>
              {socialMedia.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    href={item.link}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <button className={classes.buttonHire}>Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
