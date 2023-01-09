import React from "react";
import useStyles from "./Projects.style";
import ProjectSummary from "./ProjectSummary/ProjectSummary";
import ProjectList from "./ProjectList/ProjectList";

export default function Projects() {
  const classes = useStyles();
  return (
    <div className="container">
      <ProjectList />
      <ProjectSummary />
    </div>
  );
}
