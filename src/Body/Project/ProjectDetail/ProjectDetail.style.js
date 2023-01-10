import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  projectDetailContainer: {
    minHeight: "calc(100vh - 160px)",
  },
  projectTagContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "10px",
    "& span": {
      padding: "5px 10px",
      backgroundColor: "#F2F2F2",
      borderRadius: "5px",
      fontSize: "12px",
      color: "#666",
      marginRight: "5px",
      marginBottom: "5px",
      textDecoration: "none",
    },
  },
  projectContentContainer: {
    padding: "20px 40px",
    "& p": {
      fontSize: "14px",
      textAlign: "justify",
      color: "#666",
    },
  },
  projectImageContainer: {
    padding: "20px 8%",
    display: "grid",
    marginTop: "20px",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "1fr",
    gridGap: "10px",
  },
  projectImageItem: {
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    "& button": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0",
      display: "none",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "#fff",
      cursor: "pointer",
      border: "none",
      outline: "none",
      fontSize: "18px",
      zIndex: "999",
    },
    "&:hover button": {
      display: "block",
    },
  },
  projectTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      backgroundColor: "#F2F2F2",
      padding: "8px 15px",
      borderRadius: "5px",
      textDecoration: "none",
      fontSize: "14px",
      color: "#666",
    },
    "& a:hover": {
      backgroundColor: "#E6E6E6",
      color: "#666",
    },
  },
  projectTitleLeft: {
    width: "80%",
    "& h1": {
      marginTop: "20px",
      width: "80%",
    },
  },
  "@media (max-width: 680px)": {
    projectContentContainer: {
      padding: "20px 10px",
    },
    projectImageContainer: {
      gridTemplateColumns: "repeat(2, 1fr)",
      padding: "20px 0",
    },
    projectTitleLeft: {
      width: "100%",
      marginBottom: "10px",
      "& h1": {
        marginTop: "20px",
        width: "80%",
        fontSize: "18px",
      },
    },
    projectTitleContainer: {
      display: "block",
      "& a": {
        marginTop: "30px",
      },
    },
  },
});

export default useStyles;
