import React from "react";
import useStyles from "./ProjectSummary.style";

export default function ProjectSummary() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.projectSummaryContainer}>
        <div className={classes.projectSummary}>
          <h3>80+</h3>
          <p>Projects</p>
        </div>
        <div className={classes.projectSummary}>
          <h3>80+</h3>
          <p>Happy Clients</p>
        </div>
        <div className={classes.projectSummary}>
          <h3>80+</h3>
          <p>Freelance Projects</p>
        </div>
        <div className={classes.projectSummary}>
          <h3>80+</h3>
          <p>Github Followers</p>
        </div>
      </div>
    </div>
  );
}
