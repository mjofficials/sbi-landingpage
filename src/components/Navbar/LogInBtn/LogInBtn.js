import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const useStyles = makeStyles((theme) => ({
  navButton: {
    width: "100px",
    textTransform: "none",
    marginBottom: "0.8rem",
    background: "#FED127",
    [theme.breakpoints.up("md")]: {
      margin: "1rem 0",
    },
    "&:hover": {
      background: "rgb(249, 216, 83)",
      color: "black",
    },
  },
}));

const testing = () => {
  console.log("login button");
};

const LogInBtn = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        onClick={testing}
        className={classes.navButton}
        startIcon={<ExitToAppOutlinedIcon />}
        variant="contained"
      >
        Login
      </Button>
    </div>
  );
};

export default LogInBtn;
