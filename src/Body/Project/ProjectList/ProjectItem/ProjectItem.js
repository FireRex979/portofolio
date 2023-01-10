import React from "react";
import useStyles from "./ProjectItem.style";
import { Link } from "react-router-dom";

export default function ProjectItem(props) {
  const classes = useStyles();
  return (
    <Link to={`/project/${props.id}`} className={classes.projectListItem}>
      <img src="https://via.placeholder.com/400x300" alt="" />
      <div className={classes.projectItemContent}>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <div className={classes.projectTagsContainer}>
          {props.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
