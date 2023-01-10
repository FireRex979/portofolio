import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  imagePreview: {
    overflow: "hidden",
    borderRadius: "5px",
    "& img": {
      width: "100%",
      maxHeight: "600px",
      objectFit: "cover",
    },
  },
});

export default useStyles;
