import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    margin: "0",
    borderBottom: "1px solid #E0E0E0",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: "40px",
    padding: "12px 0",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    "& h4": {
      color: "#6E85B7",
      fontSize: "24px",
    },
    "& span": {
      color: "#B2C8DF",
      fontSize: "32px",
      marginLeft: "5px",
    },
  },
  navMenu: {
    display: "flex",
    alignItems: "center",
    "& button": {
      display: "none",
    },
  },
  navUl: {
    display: "flex",
    alignItems: "center",
    "& li": {
      listStyle: "none",
      marginLeft: "20px",
      "& a": {
        color: "#6E85B7",
        fontSize: "16px",
        textDecoration: "none",
        "&:hover": {
          color: "#B2C8DF",
        },
      },
    },
  },
  "@media (max-width: 680px)": {
    navbar: {
      height: "40px",
      padding: "4px 0px",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      "& h4": {
        color: "#6E85B7",
        fontSize: "16px",
      },
      "& span": {
        color: "#B2C8DF",
        fontSize: "24px",
        marginLeft: "5px",
      },
    },
    navMenu: {
      display: "block",
      "& button": {
        display: "block",
        backgroundColor: "#FFF",
        border: "none",
        color: "#6E85B7",
        fontSize: "16px",
        cursor: "pointer",
        "&:hover": {
          color: "#B2C8DF",
          backgroundColor: "#FFF",
        },
        "& span": {
          display: "block",
          width: "20px",
          height: "2px",
          backgroundColor: "#6E85B7",
          margin: "4px 0px",
        },
      },
    },
    navUl: {
      display: "none",
    },
  },
  sidebar: {
    position: "fixed",
    top: "0",
    bottom: "0",
    right: "0",
    width: "250px",
    backgroundColor: "#FFF",
    transition: "transform 0.3s ease-in-out",
  },
  sidebarMenu: {
    marginTop: "30px",
    display: "block",
    backgroundColor: "#FFF",
    padding: "0px 16px",
    "& li": {
      listStyle: "none",
      marginLeft: "0",
      textAlign: "right",
      marginBottom: "10px",
      "& a": {
        color: "#6E85B7",
        fontSize: "18px",
        fontWeight: "bold",
        textDecoration: "none",
        "&:hover": {
          color: "#B2C8DF",
        },
      },
    },
  },
  overlay: {
    position: "fixed",
    inset: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sidebarHide: {
    transform: "translateX(100%)",
  },
  overlayHide: {
    display: "none",
  },
});

export default useStyles;
