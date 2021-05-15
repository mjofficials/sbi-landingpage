import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 225,
    height: "auto",
    borderRadius: "5px",
    padding: "0.5rem",
    margin: "0.5rem",
    [theme.breakpoints.up("322")]: {
      width: 251,
    },
  },
  media: {
    width: "96px",
    height: "96px",
  },
  cardTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#4E4E4E",
  },
  cardContent: {
    textAlign: "left",
    textTransform: "capitalize",
    whiteSpace: "nowrap",
  },
  cardDescription: {
    fontSize: "16px",
    color: "#8E8E8E",
  },
  cardGreenText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#36A729",
  },
}));
const ShopAndEarnCard = ({ ShopAndEarnCardImg, ShopAndEarnCardTitle, ShopAndEarnCardDescription }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={ShopAndEarnCardImg}
            title="swiggyImg"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle} gutterBottom component="h2">
              {/* Swiggy */}
              {ShopAndEarnCardTitle}
            </Typography>
            <Typography
              className={classes.cardDescription}
              gutterBottom
              component="h2"
            >
              {/* Food & Drink */}
              {ShopAndEarnCardDescription}
            </Typography>
            <Typography
              className={classes.cardGreenText}
              gutterBottom
              component="h2"
            >
              11% SBI Reward
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ShopAndEarnCard;
