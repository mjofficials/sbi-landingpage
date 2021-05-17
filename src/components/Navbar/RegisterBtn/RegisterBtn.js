import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

const useStyles = makeStyles((theme) => ({
  registerButton: {
    width: "100px",
    textTransform: "none",
    marginBottom: "0.8rem",
    [theme.breakpoints.up("md")]: {
      margin: "1rem 0 1rem 1rem",
    },
    background: "#FED127",
    "&:hover": {
      background: "rgb(249, 216, 83)",
      color: "black",
    },
  },
}));

const RegisterBtn = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.registerButton}
        startIcon={<PersonOutlineOutlinedIcon />}
        variant="contained"
      >
        Register
      </Button>
    </div>
  );
};

export default RegisterBtn;
