import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: "275px",
    padding: "0.5rem",
    margin: "0.5rem",
    [theme.breakpoints.up("322")]: {
      width: 275,
    },
  },
  media: {
    height: 134,
    transform: "scale(0.8)",
  },
  ExclusiveOfferCardcontent: {
    textAlign: "center",
  },
}));
const ExclusiveOfferCards = ({ cardTitle, cardDescription, cardImg }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={cardImg} title="" />
          <CardContent className={classes.ExclusiveOfferCardcontent}>
            <Typography gutterBottom variant="h5" component="h2">
              {cardTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {cardDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ExclusiveOfferCards;
