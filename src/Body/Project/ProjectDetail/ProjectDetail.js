import React from "react";
import useStyles from "./ProjectDetail.style";
import { getDataProjects } from "../../../Object.utils";
import { useParams } from "react-router-dom";
import { FaExpand } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-overlays/Modal";
import ModalDetailImage from "./ModalDetailImage";

export default function ProjectDetail() {
  const classes = useStyles();
  const dataProjects = getDataProjects();
  const { id } = useParams();
  const projectDetail = dataProjects.find((project) => project.id === id);
  const [showModal, setShowModal] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = (index) => {
    setShowModal(true);
    setImagePreview(projectDetail.images[index]);
  };

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  return (
    <div className="container">
      <div className={classes.projectDetailContainer}>
        <div className={classes.projectTitleContainer}>
          <div className={classes.projectTitleLeft}>
            <h1>{projectDetail.title}</h1>
            <div className={classes.projectTagContainer}>
              {projectDetail.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <a href={projectDetail.link} target="_blank" rel="noreferrer">
            Link Demo
          </a>
        </div>
        <div className={classes.projectContentContainer}>
          <p>{projectDetail.description}</p>
          <div className={classes.projectImageContainer}>
            {projectDetail.images.map((image, index) => (
              <div key={index} className={classes.projectImageItem}>
                <img src={image} alt={projectDetail.title} />
                <button type="button" onClick={() => handleShow(index)}>
                  <FaExpand />
                </button>
              </div>
            ))}
          </div>
          <p>{projectDetail.content}</p>
        </div>
      </div>
      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <ModalDetailImage handleClose={handleClose} image={imagePreview} />
      </Modal>
    </div>
  );
}
