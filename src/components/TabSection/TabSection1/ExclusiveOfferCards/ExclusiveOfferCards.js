import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const theme = createMuiTheme({
  typography: {
    h5: {
      // font: "normal normal bold 25px/34px Open Sans",
      fontWeight: "bold",
      fontSize: "25px",
      fontFamily: "Open Sans",
      color: "#555555",
    },
    body2: {
      // font: normal normal normal 14px/20px Open Sans;
      fontWeight: "normal",
      fontSize: "14px",
      fontFamily: "Open Sans",
      color: "#555555",
    },
  }
});

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
    <MuiThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={cardImg} title="" />
          <CardContent className={classes.ExclusiveOfferCardcontent}>
            <Typography gutterBottom variant="h5" component="h2">
              {cardTitle}
            </Typography>
            <Typography variant="body2" component="p">
              {cardDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </MuiThemeProvider>
  );
};

export default ExclusiveOfferCards;
