import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import smallIcon from "../../../../assets/small-icon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    display: "flex",
    // border: "1px solid black",
    margin: "0 0.8rem 0.8rem 0.8rem",
    padding: "0.8rem",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
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
}));

const StoreCard = ({ dynamicCardImg, dynamicBgColor }) => {
  const classes = useStyles();
  return (
    <div>
      <Card
        elevation={0}
        style={{ background: dynamicBgColor }}
        className={classes.root}
      >
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
            <img src={smallIcon} width="16px" height="16px" alt="smallIcon" />
            <Typography style={{ whiteSpace: "nowrap" }} component="span">
              All Cobb Outlets
            </Typography>
            <Typography variant="h6" className={classes.boldText}>
              35% Cash *
            </Typography>
            <Typography className={classes.greyText}>T&C Apply*</Typography>
          </CardContent>
          <CardActions style={{ paddingTop: "0.8rem" }}>
            <Button
              style={{ color: "white" }}
              size="small"
              color="primary"
              variant="contained"
            >
              Avail Offer Now
            </Button>
          </CardActions>
        </div>
        <CardMedia className={classes.cover}>
          <img
            src={dynamicCardImg}
            className={classes.cardImg}
            alt="SampleImg"
          />
        </CardMedia>
      </Card>
    </div>
  );
};

export default StoreCard;
