import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  timeline: {
    width: "100%",
    marginTop: "20px",
    background: "#FFF",
    color: "#54BAB9",
    padding: "30px 20px",
    "& ul": {
      listStyleType: "none",
      borderLeft: "2px #54BAB9 solid",
      padding: "10px 5px",
      "& li": {
        padding: "20px",
        position: "relative",
        transition: ".5s",
        "& span": {
          display: "inline-block",
          backgroundColor: "#6E85B7",
          borderRadius: "25px",
          padding: "2px 10px",
          fontSize: "15px",
          textAlign: "center",
          color: "#FFF",
        },
      },
      "& li:before": {
        position: "absolute",
        content: "''",
        width: "10px",
        height: "10px",
        backgroundColor: "#34ace0",
        borderRadius: "50%",
        left: "-11px",
        top: "28px",
        transition: ".5s",
      },
    },
  },
  content: {
    "& h3": {
      color: "#54BAB9",
      fontSize: "16px",
      paddingTop: "5px",
    },
    "& p": {
      color: "#54BAB9",
      padding: "5px 0px 15px 0px",
      fontSize: "14px",
    },
  },
  "@media (max-width: 680px)": {
    timeline: {
      padding: "10px 10px",
    },
  },
});

export default useStyles;
