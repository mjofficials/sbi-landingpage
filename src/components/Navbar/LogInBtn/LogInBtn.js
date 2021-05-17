import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import CloseIcon from "@material-ui/icons/Close";
import loginCardBgImg from "../../../assets/loginCardBgImg.png";

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
  dialogContentRoot: {
    // backgroundImage:
    //   "url(https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350)",
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
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  loginCard: {
    // height: "350px",
    maxWidth: 300,
    height: "auto",
    padding: "1rem",
    background: "#FFFFFF",
    boxShadow: "0px 2px 60px #0000001F",
    borderRadius: "20px",
  },
  loginCardTitle: {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
    margin: "1.5rem 0 0.5rem",
    // font: normal normal bold 32px/43px Open Sans,
  },
  loginCardOtpText: {
    marginBottom: "1.5rem",
    fontSize: "12px",
    letterSpacing: "0.5px",
    color: "#000000DE",
  },
  loginCardContent: {
    padding: 0,
  },
  loginCardTextField: {
    margin: "2rem 0",
  },
  loginCardTextGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  loginCardButton: {
    marginBottom: "0.5rem",
    background: "#52AAE0",
    // fontSize: "18px",
    textTransform: "capitalize",
  },
  loginCardBottomText: {
    textAlign: "center",
    fontSize: "12px",
  },
  loginCardAction: {
    flexDirection: "column",
  },
  loginCardTermsButton: {
    padding: 0,
    margin: 0,
    fontSize: "12px",
    textTransform: "capitalize",
    color: "#52AAE0",
  },
  resendButton: {
    fontsize: "16px",
    letterSpacing: "0.4px",
    textTransform: "capitalize",
    color: "#22A9E0",
  },
}));

const LogInBtn = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ShowStep = (step) => {
    switch (step) {
      case 1:
        return (
          <LoginCard
            DynamicloginCardTitle={"Log in to rewards"}
            DynamicBtnText={"Login"}
          />
        );
      case 2:
        return (
          <LoginCard
            DynamicloginCardTitle={"Verify OTP"}
            // DynamicloginCardTitle={"Log in to rewards"}
            DynamicOtpMsg={"An OTP has been sent to your number XXXXXXX445"}
            DynamicBtnText={"Verify"}
          />
        );
      default:
    }
  };

  return (
    <div>
      <Button
        className={classes.navButton}
        startIcon={<ExitToAppOutlinedIcon />}
        variant="contained"
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog
        fullScreen
        open={open}
        //   onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* <Grid container> </Grid> */}

        <DialogContent className={classes.dialogContentRoot}>
          <div className={classes.dialogActionDiv}>
            <DialogActions>
              <Button
                startIcon={
                  <CloseIcon style={{ fontSize: "1.5rem", color: "#000" }} />
                }
                onClick={handleClose}
                color="primary"
              />
            </DialogActions>
          </div>

          <Stepper
            style={{ width: "18%" }}
            activeStep="1"
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
          {ShowStep(2)}
          {/* <LoginCard
            DynamicloginCardTitle={"Verify OTP"}
            // DynamicloginCardTitle={"Log in to rewards"}
            DynamicOtpMsg={"An OTP has been sent to your number XXXXXXX445"}
            DynamicBtnText={"Login"}
          /> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LogInBtn;

const LoginCard = ({
  DynamicloginCardTitle,
  DynamicOtpMsg,
  DynamicBtnText,
}) => {
  const classes = useStyles();

  return (
    <>
      <Card elevation={0} className={classes.loginCard}>
        <CardContent className={classes.loginCardContent}>
          <Typography
            className={classes.loginCardTitle}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {DynamicloginCardTitle}
          </Typography>
          <Typography
            className={classes.loginCardOtpText}
            gutterBottom
            variant="h6"
            component="h2"
          >
            {DynamicOtpMsg}
          </Typography>
          {/* <Grid className={classes.loginCardTextGrid} container>
            <TextField
              className={classes.loginCardTextField}
              size="small"
              id="emaiName"
              label="Enter mobile no./username"
              variant="outlined"
            />
          </Grid> */}
          <Grid className={classes.loginCardTextGrid} container>
            <TextField size="small" id="otp" label="OTP" variant="outlined" />
            <Button className={classes.resendButton} variant="text">
              resend Otp
            </Button>
          </Grid>
        </CardContent>
        <CardActions className={classes.loginCardAction}>
          <Button
            fullWidth
            className={classes.loginCardButton}
            size="small"
            variant="contained"
            color="primary"
          >
            {DynamicBtnText}
          </Button>
          <Typography
            className={classes.loginCardBottomText}
            variant="body2"
            color="textSecondary"
          >
            By logging in, I agree to the
            <Button className={classes.loginCardTermsButton} variant="text">
              Terms & Conditions
            </Button>
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};
