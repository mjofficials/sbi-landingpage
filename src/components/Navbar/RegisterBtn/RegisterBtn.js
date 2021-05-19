import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import CloseIcon from "@material-ui/icons/Close";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import loginCardBgImg from "../../../assets/loginCardBgImg.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import RegisterCard from "./RegisterCard/RegisterCard";
import FillDetails from "./FillDetails/FillDetails";
import OtpAuth from "./OtpAuth/OtpAuth";

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
    MuiDialogContent: {
      root: {
        backgroundImage: `url(${loginCardBgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }
    },
    MuiStepper: {
      root: {
        padding: '12px',
        width: "300px",
        background: "#3A3A3A",
        borderRadius: "20px 20px 0px 0px",
        [breakpoints.up("992")]: {
          width: 400,
        },
      }
    },
    MuiStepLabel: {
      label: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "0.6rem",
        [breakpoints.up("992")]: {
          fontSize: "0.875rem",
        }
      },
      active: {
        color: "#fff !important",
      },
      completed: {
        color: "white !important"
      }
    },
    MuiStepIcon: {
      root: {
        color: "#B0B0B0",
      },
      active: {
        color: "white !important",
      },
      text: {
        fill: "rgba(0, 0, 0, 1)",
      },
      completed: {
        // color: "#388e3c !important"
        color: "#4caf50 !important"
      }
    }
  }
})


export default function RegisterBtn() {
  const classes = useStyles();
  const labels = ["Fill Details", "OTP Authentication", "Set Username"];

  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // HANDLERS
  // Go back to prev step (or)) Proceed to next step
  const stepperHandleNext = () => setActiveStep((prev) => prev + 1);
  const stepperHandleBack = () => setActiveStep((prev) => prev - 1);

  // Card open (or) close
  const cardHandleClickOpen = () => setOpen(true);
  const cardHandleClose = () => setOpen(false);

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <RegisterCard
            DynamicRegisterCardTitle={"Register"}
            DynamicSubTitleMsg={"Fill in your details to continue"}
            stepperHandleNext={stepperHandleNext}
            DynamicInput={<FillDetails />}
          />
        )

      case 1:
        return (
          <>

            <RegisterCard
              DynamicRegisterCardTitle={"step 2"}
              DynamicSubTitleMsg={"Fill in your details to continue"}
              stepperHandleNext={stepperHandleNext}
              stepperHandleBack={stepperHandleBack}
              DynamicInput={<OtpAuth
                stepperHandleBack={stepperHandleBack}
              />}
            />
          </>
        )
      case 2:
        return (


          <RegisterCard
            DynamicRegisterCardTitle={"step 3"}
            DynamicSubTitleMsg={"Fill in your details to continue"}
            stepperHandleNext={stepperHandleNext}
            stepperHandleBack={stepperHandleBack}

          />


        )
      default:
        break;
    }
  };


  return (
    <MuiThemeProvider theme={theme}>
      <Button
        className={classes.registerButton}
        startIcon={<PersonOutlineOutlinedIcon />}
        variant="contained"
        onClick={cardHandleClickOpen}

      >
        Register
      </Button>
      <Dialog
        className={classes.LoginDialogScreen}
        fullScreen
        open={open}
        //   onClose={cardHandleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent className={classes.registerDialogContentRoot}>
          <Grid
            container
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "flex-end",
            }}  >
            <DialogActions
              style={{
                padding: 0,
              }}
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
                // style={{ display: "none" }}
                activeStep={activeStep}
                style={{ margin: "0" }}
              >
                {labels.map((label) => (
                  <Step className={classes.LoginStep} key={label}>
                    <StepLabel  >
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
