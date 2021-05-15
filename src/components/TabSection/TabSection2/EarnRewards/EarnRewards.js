import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    height: "auto",
    padding: "0.8rem",
    margin: "0.5rem",
    borderRadius: "10px",
    [theme.breakpoints.up("322")]: {
      maxWidth: 300,
    },

    // [theme.breakpoints.up("sm")]: {
    //   height: "275px",
    // },
  },
  content: {
    padding: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  EarnRewardSubtitle: {
    textAlign: "center",
    font: "13px",
    letterSpacing: 0,
    color: "rgba(9, 9, 9, 1)",
    opacity: "0.63",
    whiteSpace: "nowrap",
  },
  BottomText1: {
    margin: "1rem 0 1.5rem 0",
    font: "16px",
    letterSpacing: "1.28px",
    color: "rgba(78, 78, 78, 1)",
    opacity: "0.62",
  },
  BottomText2: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "rgba(78, 78, 78, 1)",
    opacity: "0.59",
  },
  BottomTextBold: {
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: 0,
    color: "rgba(9, 9, 9, 1)",
    opacity: 1,
    whiteSpace: "wrap",
    // [theme.breakpoints.down("320")]: {
    //   //   height: "275px",
    //   whiteSpace: "nowrap",
    // },
  },
}));

const EarnRewards = ({
  iconImg,
  posterImg,
  iconName,
  cardBottomText1,
  cardBottomTextBold,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent className={classes.content}>
            <div>
              <CardMedia
                style={{
                  width: "69px",
                  height: "69px",
                  backgroundSize: "contain",
                }}
                image={iconImg}
                title="moreImg"
              />
              <Typography
                className={classes.EarnRewardSubtitle}
                gutterBottom
                component="h2"
              >
                {iconName}
              </Typography>
            </div>
            <CardMedia
              style={{
                width: "180px",
                height: "216px",
                backgroundSize: "contain",
                backgroundPositionY: "1rem",
              }}
              image={posterImg}
              title="storeImg"
            />
          </CardContent>
          <Divider />
          <Typography className={classes.BottomText1} gutterBottom component="h2">
            {cardBottomText1}
          </Typography>
          <Typography
            className={classes.BottomText2}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Pay by SBI Credit Card
          </Typography>
          <Typography
            className={classes.BottomTextBold}
            gutterBottom
            component="h2"
          >
            {cardBottomTextBold}
          </Typography>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default EarnRewards;
