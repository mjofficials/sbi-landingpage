import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
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
import MobileInput from "./MobileInput/MobileInput";
import OtpInput from "./OtpInput/OtpInput";
import formValidation from "../../HelperComponents/FormValidation/FormValidation";

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
  loginCardTextGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
  case1Grid: {
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  const initialValues = {
    mobileInput: "",
    otpInput: "",
  };
  const fieldsValidation = {
    mobileInput: {
      error: "",
      validate: "mobileInput",
      maxLength: 13,
      minLength: 5,
    },
    otpInput: {
      error: "",
      validate: "otpInput",
      maxLength: 4,
    },
  };

  // Check if all values are not empty or if there are some error
  // const isValid = mobileInput.length > 0 && !formErrors.mobileInput;
  // const isValid = values.mobileInput.length > 0 || !formErrors.mobileInput;

  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // Card open (or) close
  const cardHandleClickOpen = () => setOpen(true);
  const cardHandleClose = () => setOpen(false);

  // HANDLERS
  // Go back to prev step (or)) Proceed to next step
  const stepperHandleNext = () => setActiveStep((prev) => prev + 1);
  const stepperHandleBack = () => setActiveStep((prev) => prev - 1);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Set errors

    const error = formValidation(name, value, fieldsValidation) || "";
    setFormErrors({
      [name]: error,
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <LoginCard
            stepperHandleNext={stepperHandleNext}
            DynamicloginCardTitle={"Log in to rewards"}
            DynamicBtnText={"Login"}
            values={formValues}
            DynamicInput={
              <MobileInput
                handleChange={handleChange}
                formErrors={formErrors}
                values={formValues}
                stepperHandleNext={stepperHandleNext}
              />
            }
            formErrors={formErrors}
            // mobileInput={mobileInput}
          />
        );
      case 1:
        return (
          <>
            <Grid className={classes.case1Grid} container>
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
              DynamicOtpMsg={`An OTP has been sent to your number ${formValues.mobileInput}`}
              DynamicInput={
                <OtpInput
                  handleChange={handleChange}
                  formErrors={formErrors}
                  values={formValues}
                  stepperHandleNext={stepperHandleNext}
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
