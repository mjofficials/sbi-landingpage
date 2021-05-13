import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import SampleImg from "../../../../assets/sample-img.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
    display: "flex",
    // border: "1px solid black",
    background: "#F3F8FD",
    margin: "0 0.8rem 0.8rem 0.8rem",
    padding: "0.8rem",
  },
  cardArea: {
    display: "flex",
  },
  heading: {
    fontWeight: "bold",
  },
  boldText: {
    fontWeight: "bold",
  },
  greyText: {
    color: "#C0BDA9",
    fontSize: "0.65rem",
  },
  content: {
    flex: "1 0 auto",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  cover: {
    width: 151,
    display: "flex",
    justifyContent: "center",
  },
  cardImg: {
    width: "85%",
    height: "100%",
    objectFit: "cover",
  },
});

const OfflineStore = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={0}>
        <div
          style={{
            marginBottom: "1.5rem",
          }}
        >
          <Typography component="span" className={classes.heading}>
            Offline Store
          </Typography>
        </div>
        <Grid container className={classes.cardArea}>
          <Card elevation={0} className={classes.root}>
            <div className={classes.details}>
              <CardContent
                style={{
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className={classes.content}
              >
                <Typography style={{ whiteSpace: "nowrap" }} component="span">
                  All Cobb Outlets
                </Typography>
                <Typography variant="h6" className={classes.boldText}>
                  35% Cash *
                </Typography>
                <Typography className={classes.greyText}>T&C Apply*</Typography>
              </CardContent>
              <CardActions style={{ paddingTop: "0.8rem" }}>
                <Button size="small" color="primary" variant="contained">
                  Avail Offer Now
                </Button>
              </CardActions>
            </div>
            <CardMedia className={classes.cover}>
              <img
                src={SampleImg}
                className={classes.cardImg}
                alt="SampleImg"
              />
            </CardMedia>
          </Card>
        </Grid>
      </Paper>
    </div>
  );
};

export default OfflineStore;
