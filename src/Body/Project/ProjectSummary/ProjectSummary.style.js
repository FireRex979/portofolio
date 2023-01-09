import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  projectSummaryContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    background: "#EAFDFC",
    borderRadius: "12px",
    margin: "20px 0px",
    padding: "20px 0px",
  },
  projectSummary: {
    padding: "0px 80px",
    textAlign: "center",
    "& h3": {
      color: "#54BAB9",
      fontSize: "24px",
      fontWeight: "bold",
    },
  },
  "@media (max-width: 680px)": {
    projectSummaryContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(1fr)",
    },
    projectSummary: {
      padding: "0px 0",
    },
  },
});

export default useStyles;
