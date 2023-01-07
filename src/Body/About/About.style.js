import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  aboutContainer: {
    margin: "30px 0",
    minHeight: "calc(100vh - 220px)",
    padding: "0 20%",
  },
  aboutContent: {
    "& .aboutTitle": {
      fontSize: "1.8rem",
      color: "#54BAB9",
      fontWeight: "700",
      marginBottom: "20px",
    },
    "& .aboutInfo": {
      fontSize: "1.1rem",
      color: "#000",
      fontWeight: "500",
      lineHeight: "1.5",
    },
  },
  socialMediaContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    gap: "10px",
    "& a": {
      textDecoration: "none",
      padding: "10px 20px",
      background: "#6E85B7",
      borderRadius: "5px",
      color: "#FFF",
      fontSize: "14px",
    },
  },
  skillContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    marginTop: "20px",
  },
  skillGroupText: {
    color: "#000",
    marginTop: "20px",
  },
});

export default useStyles;
