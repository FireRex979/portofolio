import React from "react";
import useStyles from "./About.style";
import SocialMediaItem from "./SocialMediaItem";
import SkillItem from "./SkillItem";
import { socialMediaData, getSkillData } from "../../Object.utils";
import Timeline from "./Timeline";

export default function About() {
  const classes = useStyles();
  const contactData = socialMediaData();
  const skillData = getSkillData();
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.aboutContent}>
        <h1 className="aboutTitle">About Me</h1>
        <p className="aboutInfo">
          Hi I am <strong>Aldi Wahyudi</strong>, I am a Front End Developer. I
          have been working as a Front End Developer for 2 years. I have a lot
          of experience in building websites using HTML, CSS, and JavaScript. I
          also have experience in building websites using Laravel and React.
        </p>
      </div>
      <div className={classes.socialMediaContainer}>
        {contactData.map((item, index) => {
          return (
            <SocialMediaItem key={index} title={item.name} link={item.link} />
          );
        })}
      </div>
      {skillData.map((itemGroup, indexGroup) => {
        const skills = itemGroup.skill;
        return (
          <React.Fragment key={indexGroup}>
            <h3 className={classes.skillGroupText}>{itemGroup.group}</h3>
            <div className={classes.skillContainer}>
              {skills.map((itemSkill, indexSkill) => {
                return (
                  <SkillItem
                    key={indexSkill}
                    group={itemGroup.group}
                    skill={itemSkill.skillName}
                    value={itemSkill.value}
                  />
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
      <Timeline />
    </div>
  );
}
