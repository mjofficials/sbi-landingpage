import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import loginCardBgImg from "../../../assets/loginCardBgImg.png";
import LoginCard from "./LoginCard/LoginCard";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

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
  LoginDialogScreen: {
    [theme.breakpoints.up("992")]: {
      // width: "50%",
    },
  },
  dialogContentRoot: {
    backgroundImage: `url(${loginCardBgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  dialogActionDiv: {
    maxWidth: "300px",
    display: "flex",
    justifyContent: "flex-end",
  },
  loginCardTextField: {
    margin: "2rem 0",
  },

  loginCardTextGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  resendButton: {
    fontsize: "16px",
    letterSpacing: "0.4px",
    textTransform: "capitalize",
    color: "#22A9E0",
  },
  LoginStepper: {
    padding: 0,
  },
  LoginStepLabel: {
    margin: 0,
  },
  box: {
    padding: theme.spacing(3),
  },
  title: {
    marginTop: 30,
  },
}));

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  overrides: {
    MuiDialog: {
      paperFullScreen: {
        [breakpoints.up("992")]: {
          width: "50%",
        },
      },
      scrollPaper: {
        justifyContent: "flex-end",
      },
    },
  },
});

export default function LogInBtn() {
  const classes = useStyles();
  // STORED VALUES
  const labels = ["Login", "Verify"];
  // const userDetail = {
  //   mobileNumber: "",
  // };
  // const fieldsValidation = {
  //   phone: {
  //     error: "",
  //     validate: "phone",
  //     maxLength: 15,
  //   },
  // };

  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [mobileInputValues, setMobileInputValues] = useState("");
  const [otpInputValues, setOtpInputValues] = useState("");
  // const [formErrors, setFormErrors] = useState({});

  // HANDLERS
  // Go back to prev step (or)) Proceed to next step
  const stepperHandleNext = () => setActiveStep((prev) => prev + 1);
  const stepperHandleBack = () => setActiveStep((prev) => prev - 1);

  // Card open (or) close
  const cardHandleClickOpen = () => setOpen(true);
  const cardHandleClose = () => setOpen(false);

  // Handle form change
  const LoginMobileNumberInputHandleChange = (e) => {
    // Set values
    const { value } = e.target;
    setMobileInputValues(value);

    let userMobile = e.target.value;
    console.log("LoginMobileNumberInput:", userMobile);

    // set errors
    // const error = formValidation(name, value, fieldsValidation) || "";

    // setFormErrors({
    //   [name]: error
    // });
  };
  const LoginOtpInputHandleChange = (e) => {
    // Set values
    setOtpInputValues(e.target.value);
    let userOtp = e.target.value;
    console.log("LoginOtpInput:", userOtp);
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <LoginCard
            stepperHandleNext={stepperHandleNext}
            handleChange={LoginMobileNumberInputHandleChange}
            DynamicloginCardTitle={"Log in to rewards"}
            DynamicBtnText={"Login"}
            // DynamicOtpMsg={""}
            DynamicInput={
              <LoginMobileNumberInput
                LoginMobileNumberInputHandleChange={
                  LoginMobileNumberInputHandleChange
                }
                mobileInputValues={mobileInputValues}
              />
            }
          />
        );
      case 1:
        return (
          <>
            <Grid
              style={{
                maxWidth: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
              container
            >
              <Button
                onClick={stepperHandleBack}
                variant="text"
                color="default"
                startIcon={
                  <ArrowBackIcon
                    style={{
                      color: "#1B9DF2",
                      fontSize: "1.5rem",
                    }}
                  />
                }
              />
            </Grid>
            <LoginCard
              stepperHandleNext={stepperHandleNext}
              stepperHandleBack={stepperHandleBack}
              DynamicloginCardTitle={"Verify OTP"}
              DynamicBtnText={"Verify"}
              DynamicOtpMsg={"An OTP has been sent to your number XXXXXXX445"}
              DynamicInput={
                <LoginOtpInput
                  LoginOtpInputHandleChange={LoginOtpInputHandleChange}
                  otpInputValues={otpInputValues}
                />
              }
            />
          </>
        );
      default:
        break;
    }
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Button
        className={classes.navButton}
        startIcon={<ExitToAppOutlinedIcon />}
        variant="contained"
        onClick={cardHandleClickOpen}
      >
        Login
      </Button>
      <Dialog
        className={classes.LoginDialogScreen}
        fullScreen
        open={open}
        //   onClose={cardHandleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent className={classes.dialogContentRoot}>
          <Grid container className={classes.dialogActionDiv}>
            <DialogActions
              style={{
                padding: 0,
              }}
            >
              <Button
                style={{
                  paddingBottom: "0.5rem",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "50%",
                }}
                startIcon={
                  <CloseIcon style={{ fontSize: "1.5rem", color: "#000" }} />
                }
                onClick={cardHandleClose}
                color="primary"
              />
            </DialogActions>
          </Grid>
          {activeStep === labels.length ? (
            // Last Component
            <Success />
          ) : (
            <>
              <Stepper
                className={classes.LoginStepper}
                style={{ display: "none" }}
                activeStep={activeStep}
                // style={{ margin: "0" }}
                alternativeLabel
              >
                {labels.map((label) => (
                  <Step className={classes.LoginStep} key={label}>
                    <StepLabel className={classes.LoginStepLabel}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              {handleSteps(activeStep)}
            </>
          )}
        </DialogContent>
      </Dialog>
    </MuiThemeProvider>
  );
}
const LoginMobileNumberInput = ({
  LoginMobileNumberInputHandleChange,
  mobileInputValues,
}) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        value={mobileInputValues}
        onChange={LoginMobileNumberInputHandleChange}
        className={classes.loginCardTextField}
        size="small"
        // error
        // helperText="Incorrect entry."
        label="Enter mobile no./username"
        variant="outlined"
        // id="emaiName"
        // id="outlined-error-helper-text"
        // label="Error"
      />
    </>
  );
};

const LoginOtpInput = ({ LoginOtpInputHandleChange, otpInputValues }) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        value={otpInputValues}
        onChange={LoginOtpInputHandleChange}
        size="small"
        id="otp"
        label="OTP"
        variant="outlined"
      />
      <Button className={classes.resendButton} variant="text">
        resend Otp
      </Button>
    </>
  );
};

const Success = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography variant="h2" align="center">
        Thank you!
      </Typography>
      <Typography component="p" align="center" className={classes.title}>
        You are allowed to login
      </Typography>
    </Box>
  );
};
