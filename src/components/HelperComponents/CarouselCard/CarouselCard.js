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

const useStyles = makeStyles({
  root: {
    minWidth: 290,
    boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.25)",
    // border: "1px solid #000",
    margin: "16px",
    paddingTop: "1.5rem",
    borderRadius: "8px"
  },
  pos: {
    marginBottom: 12,
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  cardButton: {
    fontSize: "0.6rem",
    textTransform: "unset",
  },
  cardActionsButton: {
    fontSize: "0.8rem",
    textTransform: "unset",
  },
  cardActions: {
    justifyContent: "flex-end",
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <img src={SampleImg} className={classes.cardImg} alt="SampleImg" />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography component="h5" variant="h5" gutterBottom>
              Personal Loan
            </Typography>
            <Typography className={classes.pos}>At Low Interest</Typography>
            <Button
              className={classes.cardButton}
              variant="outlined"
              color="primary"
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
