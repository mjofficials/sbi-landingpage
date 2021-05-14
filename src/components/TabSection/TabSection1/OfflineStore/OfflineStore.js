import React from "react";
import {
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StoreCard from "../StoreCard/StoreCard";
import girl2Img from '../../../../assets/girl-2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    display: "flex",
    // border: "1px solid black",
    // background: "#F3F8FD",
    margin: "0 0.8rem 0.8rem 0.8rem",
    padding: "0.8rem",
    borderRadius: 20
  },
  cardArea: {
    display: "flex",
    // justifyContent: "space-evenly",
  },
  heading: {
    fontWeight: "bold",
  },
  customPaper: {
    borderRadius: "8px"
  }
}));

const OfflineStore = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper
        className={classes.customPaper}
        style={{ padding: "1rem" }}
        elevation={0}>
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
