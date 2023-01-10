import React from "react";
import useStyles from "./ProjectList.style";
import { getDataProjects } from "../../../Object.utils";
import ProjectItem from "./ProjectItem/ProjectItem";

export default function ProjectList() {
  const classes = useStyles();
  const data = getDataProjects();
  return (
    <div className={classes.projectListContainer}>
      {data.map((item) => (
        <ProjectItem
          key={item.id}
          id={item.id}
          image={item.imageBanner}
          title={item.title}
          description={item.description}
          tags={item.tags}
        />
      ))}
    </div>
  );
}
