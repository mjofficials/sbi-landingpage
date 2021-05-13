import React from "react";
import {
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StoreCard from "../StoreCard/StoreCard";
import girl2Img from '../../../../assets/girl-2.png';

const useStyles = makeStyles({
  root: {
    width: 300,
    display: "flex",
    // border: "1px solid black",
    // background: "#F3F8FD",
    margin: "0 0.8rem 0.8rem 0.8rem",
    padding: "0.8rem",
  },
  cardArea: {
    display: "flex",
    // justifyContent: "space-evenly",
  },
  heading: {
    fontWeight: "bold",
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
          <StoreCard dynamicBgColor={"#F3F8FD"} dynamicCardImg={girl2Img} />
          <StoreCard dynamicBgColor={"#F3F8FD"} dynamicCardImg={girl2Img} />
          <StoreCard dynamicBgColor={"#F3F8FD"} dynamicCardImg={girl2Img} />
        </Grid>
      </Paper>
    </div>
  );
};

export default OfflineStore;