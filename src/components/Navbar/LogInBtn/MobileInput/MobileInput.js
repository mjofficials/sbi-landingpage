import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  loginCardTextField: {
    margin: "2rem 0",
  },
  loginCardButton: {
    marginBottom: "0.5rem",
    background: "#52AAE0",
    // fontSize: "18px",
    textTransform: "capitalize",
  },
});

const MobileInput = ({
  handleChange,
  values: { mobileInput },
  formErrors,
  stepperHandleNext,
}) => {
  const classes = useStyles();
  // Check if all values are not empty or if there are some error
  const isValid = mobileInput.length > 0 && !formErrors.mobileInput;
  // const isValid = values.mobileInput.length > 0 || !formErrors.mobileInput;

  return (
    <>
      <TextField
        className={classes.loginCardTextField}
        size="small"
        name="mobileInput"
        id="mobileInputId"
        label="Enter mobile no./username"
        variant="outlined"
        required
        placeholder="i.e: xxx-xxx-xxxx"
        value={mobileInput || ""}
        onChange={handleChange}
        error={!!formErrors.mobileInput}
        helperText={formErrors.mobileInput}
      />
      <Button
        fullWidth
        className={classes.loginCardButton}
        size="small"
        variant="contained"
        color="primary"
        onClick={isValid ? stepperHandleNext : null}
        disabled={!isValid}
      >
        Login
      </Button>
    </>
  );
};

export default MobileInput;
