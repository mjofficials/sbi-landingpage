import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  resendButton: {
    fontsize: "16px",
    letterSpacing: "0.4px",
    textTransform: "capitalize",
    color: "#22A9E0",
  },
});

const OtpInput = ({
  handleChange,
  values: { otpInput },
  formErrors,
  stepperHandleNext,
}) => {
  const classes = useStyles();
  // Check if all values are not empty or if there are some error
  const isValid = otpInput.length > 0 && !formErrors.mobileInput;
  return (
    <>
      <TextField
        required
        size="small"
        name="otpInput"
        type="number"
        id="otp"
        label="OTP"
        variant="outlined"
        placeholder="i.e: x x x x"
        onChange={handleChange}
        value={otpInput || ""}
        error={!!formErrors.otpInput}
        helperText={formErrors.otpInput}
      />
      <Button className={classes.resendButton} variant="text">
        resend Otp
      </Button>
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

export default OtpInput;
