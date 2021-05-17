import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import smallIcon from "../../../../assets/small-icon.png";


const theme = createMuiTheme({
  // palette: {
  //   primary: "red",
  // },
  typography: {
    body2: {
      whiteSpace: "nowrap",
      letterSpacing: "0.6px",
      color: "#080808",
      // font: "normal normal medium 14px/18px Mulish",
      fontSize: "14px",
      fontFamily: "Mulish",
    },
    h6: {
      // font: normal normal 900 20px/25px Mulish;
      fontSize: "20px",
      fontFamily: "Mulish",
      letterSpacing: "0.16px",
      color: "#080808",
    }
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    // display: "flex",
    // border: "1px solid black",
    margin: "0 0.8rem 0.8rem 0.8rem",
    padding: "0.8rem",
    [theme.breakpoints.up("322")]: {
      minWidth: 300,
    },
    [theme.breakpoints.up("450")]: {
      minWidth: 400,
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  boldText: {
    fontWeight: "900",
    whiteSpace: "nowrap",
  },
  greyText: {
    // color: "#C0BDA9",
    // fontSize: "0.65rem",
    font: "normal normal 600 12px/15px Mulish",
    letterSpacing: "0.52px",
    color: "#968E64",
    opacity: "0.78",
  },
  // content: {
  //   flex: "1 0 auto",
  // },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cover: {
    width: 151,
    display: "flex",
    justifyContent: "center",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const StoreCard = ({ dynamicCardImg, dynamicBgColor }) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
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
            <Typography variant="body2" component="span"
            >
              All Cobb Outlets
            </Typography>
            <Typography variant="h6" className={classes.boldText}>
              35% Cash *
            </Typography>
            <Typography className={classes.greyText}>T&C Apply*</Typography>
          </CardContent >

          <CardMedia className={classes.cover}>
            <img
              src={dynamicCardImg}
              className={classes.cardImg}
              alt="SampleImg"
            />
          </CardMedia>
        </div >


        <CardActions style={{ paddingTop: "0.8rem" }}>
          <Button
            style={{
              minWidth: "83px",
              whiteSpace: "nowrap",
              background: "#22A9E0",
              borderRadius: "6px",
              color: "#FFFFFF",
            }}
            size="small"
          >
            Avail Offer Now
            </Button>
        </CardActions>
      </Card >
    </MuiThemeProvider >
  );
};

export default StoreCard;
