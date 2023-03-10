import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  projectListContainer: {
    display: "grid",
    marginTop: "20px",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "1fr",
    gridGap: "10px",
  },
  projectListItem: {
    width: "100%",
    backgroundColor: "#FFF",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    textDecoration: "none",
    "& img": {
      width: "100%",
      objectFit: "cover",
      height: "180px",
    },
  },
  projectItemContent: {
    padding: "0px 10px",
    "& h5": {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
      textDecoration: "none",
    },
    "& p": {
      fontSize: "12px",
      color: "#666",
      fontWeight: "400",
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
      textOverflow: "ellipsis",
      overflow: "hidden",
      marginTop: "0",
      textDecoration: "none",
    },
  },
  "@media (max-width: 680px)": {
    projectListContainer: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    projectListItem: {
      width: "100%",
      "& img": {
        width: "100%",
        objectFit: "cover",
        height: "100px",
      },
    },
  },
});

export default useStyles;
