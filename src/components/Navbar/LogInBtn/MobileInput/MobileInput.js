import { makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  loginCardTextField: {
    margin: "2rem 0",
  },
});

const MobileInput = ({ handleChange, values: { mobileInput }, formErrors }) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.loginCardTextField}
        size="small"
        name="mobileInput"
        label="Enter mobile no./username"
        variant="outlined"
        required
        placeholder="i.e: xxx-xxx-xxxx"
        value={mobileInput || ""}
        onChange={handleChange}
        error={!!formErrors.mobileInput}
        helperText={formErrors.mobileInput}
      />
    </div>
  );
};

export default MobileInput;
