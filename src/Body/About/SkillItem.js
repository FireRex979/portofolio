import React from "react";
import useStyles from "./SkillItem.style";

export default function SkillItem(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.skillItem}>
      <div className="skillInfo">
        <h4>{props.skill}</h4>
        <h6>{props.group}</h6>
      </div>
      <h3>{props.value}%</h3>
    </div>
  );
}
