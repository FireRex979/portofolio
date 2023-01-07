import React from "react";
import useStyles from "./Timeline.style";
import { getTimelineData } from "../../Object.utils";

export default function Timeline() {
  const classes = useStyles();
  let timelineData = getTimelineData();

  timelineData.sort((a, b) => b.id - a.id);

  return (
    <div className={classes.timeline}>
      <ul>
        {timelineData.map((data) => (
          <li key={data.id}>
            <span>
              {data.startYear} - {data.endYear}
            </span>
            <div className={classes.content}>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
