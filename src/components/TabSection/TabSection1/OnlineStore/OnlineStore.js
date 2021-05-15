import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StoreCard from "../StoreCard/StoreCard";
import foodImg from "../../../../assets/food-img.png";

const useStyles = makeStyles((theme) => ({
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
    justifyContent: "center",
    // [theme.breakpoints.up("sm")]: {
    //   justifyContent: "flex-start",
    // },
  },
  cardAreaGridleft: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  heading: {
    fontWeight: "bold",
    padding: "1rem",
  },
}));

const OfflineStore = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={0}>
        <div
          style={{
            margin: "1.5rem 0",
          }}
        >
          <Typography component="span" className={classes.heading}>
            Online Store
          </Typography>
        </div>
        <StoreCard dynamicBgColor={"#FAD8D2"} dynamicCardImg={foodImg} />
      </Paper>
    </div>
  );
};

export default OfflineStore;
