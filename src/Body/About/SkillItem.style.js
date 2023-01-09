import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  skillItem: (value) => ({
    border: `1px ${value.value >= 80 ? "#6E85B7" : "#54BAB9"} solid`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: value.value >= 80 ? "#6E85B7" : "#54BAB9",
    padding: "8px",
    width: "22%",
    borderRadius: "5px",
    "& .skillInfo": {
      "& h4": {
        fontSize: "16px",
      },
      "& h6": {
        fontSize: "12px",
      },
    },
    "& h3": {
      fontSize: "24px",
    },
  }),
  "@media (max-width: 680px)": {
    skillItem: (value) => ({
      width: "43%",
      justifyContent: "space-between",
      borderRadius: "5px",
      "& .skillInfo": {
        "& h4": {
          fontSize: "14px",
        },
        "& h6": {
          fontSize: "12px",
        },
      },
      "& h3": {
        fontSize: "18px",
      },
    }),
  },
});

export default useStyles;
