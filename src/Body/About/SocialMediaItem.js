import React from "react";

export default function SocialMediaItem(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      {props.title}
    </a>
  );
}
