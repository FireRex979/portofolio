import React from "react";
import { FaTimes } from "react-icons/fa";
import useStyles from "./ModalDetailImage.style";

export default function ModalDetailImage(props) {
  const classes = useStyles();
  return (
    <div>
      <div className="modal-desc">
        <span className="close-button" onClick={props.handleClose}>
          <FaTimes />
        </span>
        <div className={classes.imagePreview}>
          <img src={props.image} alt="title" />
        </div>
      </div>
    </div>
  );
}
