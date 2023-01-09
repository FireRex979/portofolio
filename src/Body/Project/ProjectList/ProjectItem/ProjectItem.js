import React from "react";
import useStyles from "./ProjectItem.style";

export default function ProjectItem(props) {
  const classes = useStyles();
  return (
    <a href="#" key={props.id} className={classes.projectListItem}>
      <img src="https://via.placeholder.com/400x300" alt="" />
      <div className={classes.projectItemContent}>
        <div className={classes.projectTagsContainer}>
          {props.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </a>
  );
}
