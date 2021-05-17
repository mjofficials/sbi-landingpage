import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SampleImg from '../../../assets/sample-img.png';

const useStyles = makeStyles((theme) => (
  {
    root: {
      minWidth: 275,
      boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.25)",
      // border: "1px solid #000",
      margin: "16px",
      paddingTop: "1.5rem",
      borderRadius: "8px",
      [theme.breakpoints.up("322")]: {
        minWidth: 290,
      }
    },
    pos: {
      marginBottom: 24,
      font: "normal normal normal 18px/10px Open Sans",
      color: "#070707",
    },
    cardImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    cardButton: {
      // fontFamily: "Open Sans",
      // fontWeight: "bold",
      // fontSize: "14px",
      minWidth: "150px",
      font: "normal normal 600 14px/13px Open Sans",
      border: "1px solid #22A9E0",
      borderRadius: "4px",
      color: "#22A9E0",
      textTransform: "unset",
      // whiteSpace: "nowrap",
    },
    cardActionsButton: {
      font: "normal normal normal 12px/9px Open Sans",
      textTransform: "unset",
    },
    cardActions: {
      justifyContent: "flex-end",
    },
  }
));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <img src={SampleImg} className={classes.cardImg} alt="SampleImg" />
        </Grid>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
          item xs={8}>
          <CardContent style={{
            padding: "4px",
          }} >
            <Typography style={{
              color: "#070707",
              font: "normal normal 600 20px/25px Open Sans",
            }} component="h5" variant="h5" gutterBottom>
              Personal Loan
            </Typography>
            <Typography className={classes.pos}>At Low Interest</Typography>
            <Button
              className={classes.cardButton}
              size="small"
              startIcon={<AcUnitIcon />}
            >
              Earn 3000 Rewards Pts
            </Button>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button
              className={classes.cardActionsButton}
              endIcon={<ChevronRightIcon />}
              size="small"
            >
              Explore
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
