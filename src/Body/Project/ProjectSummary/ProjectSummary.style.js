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
});

export default useStyles;
