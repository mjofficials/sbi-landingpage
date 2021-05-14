import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StoreCard from "../StoreCard/StoreCard";
import foodImg from "../../../../assets/food-img.png";
import twidImg from "../../../../assets/twid.svg";

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
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  heading: {
    fontWeight: "bold",
  },
});

const OfflineStore = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper
        elevation={0}
        style={{ padding: "1rem" }}
      >
        <div
          style={{
            margin: "1.5rem 0",
          }}
        >
          <Typography component="span" className={classes.heading}>
            Online Store
          </Typography>
        </div>
        <Grid container className={classes.cardArea}>
          <StoreCard dynamicBgColor={"#FAD8D2"} dynamicCardImg={foodImg} />
          <img src={twidImg} alt="twidImg" />
        </Grid>
      </Paper>
    </div>
  );
};

export default OfflineStore;
