import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  registerCard: {
    // height: "350px",
    // maxWidth: 300,
    width: 300,
    height: "auto",
    padding: "1rem",
    background: "#FFFFFF",
    boxShadow: "0px 2px 60px #0000001F",
    borderRadius: "0px 0px 20px 20px",
    [theme.breakpoints.up("992")]: {
      width: 400,
    },
  },
  registerCardTitle: {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
    margin: "1.5rem 0 0.5rem",
    // font: normal normal bold 32px/43px Open Sans,
  },
  registerCardContent: {
    padding: 0,
  },
  registerCardOtpText: {
    marginBottom: "1.5rem",
    fontSize: "12px",
    letterSpacing: "0.5px",
    color: "#000000DE",
  },
  registerCardTextGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  registerCardBottomText: {
    textAlign: "center",
    fontSize: "12px",
  },
  registerCardAction: {
    flexDirection: "column",
  },
  registerCardTermsButton: {
    padding: 0,
    margin: 0,
    fontSize: "12px",
    textTransform: "capitalize",
    color: "#52AAE0",
  },
}));

const RegisterCard = ({
  DynamicRegisterCardTitle,
  DynamicSubTitleMsg,
  stepperHandleNext,
  DynamicInput,
}) => {
  const classes = useStyles();

  return (
    <>
      <Card elevation={0} className={classes.registerCard}>
        <CardContent className={classes.registerCardContent}>
          <Typography
            className={classes.registerCardTitle}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {DynamicRegisterCardTitle}
          </Typography>
          <Typography
            className={classes.registerCardOtpText}
            gutterBottom
            variant="h6"
            component="h2"
          >
            {DynamicSubTitleMsg}
          </Typography>
          <Grid className={classes.registerCardTextGrid} container>
            {DynamicInput}
          </Grid>
        </CardContent>
        <CardActions className={classes.registerCardAction}>
          <Button
            fullWidth
            className={classes.registerCardButton}
            size="small"
            variant="contained"
            color="primary"
            onClick={stepperHandleNext}
            // disabled={!isValid}
            style={{ width: "230px" }}
          >
            Login
          </Button>
          <Typography
            className={classes.registerCardBottomText}
            variant="body2"
            color="textSecondary"
          >
            By logging in, I agree to the
            <Button className={classes.registerCardTermsButton} variant="text">
              Terms & Conditions
            </Button>
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default RegisterCard;
