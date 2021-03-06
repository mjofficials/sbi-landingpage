import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StorefrontIcon from "@material-ui/icons/Storefront";
import storeImg from "../../../../assets/storeImg.svg";
import moreImg from "../../../../assets/moreImg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: "auto",
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "8px",
    [theme.breakpoints.up("sm")]: {
      width: 300,
    },
  },
  RedeemButton: {
    margin: "0.8rem",
    background: "#FFFFFF",
    border: "1px solid #D6D6D6",
    borderRadius: "4px",
    fontWeight: "normal",
    fontSize: "19px",
    fontFamily: "Open Sans",
    letterSpacing: "0.82px",
    // font: normal normal normal 19px/26px Open Sans;
  },
  RedeemButtonBottom: {
    width: "100%",
    marginTop: "0.5rem",
    background: "#000000",
    color: "white",
    margin: "0 8px",
    fontWeight: "normal",
    fontSize: "16px",
    fontFamily: "OPen Sans",
    // font: normal normal normal 16px/22px Open Sans;
    letterSpacing: "0.69px",
    "&:hover": {
      //   backgroundColor: "#4aff13",
      backgroundColor: theme.palette.success.dark,
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      fontSize: "18px",
      // width: "100%",
    },
  },
  RedeemCardSubtitle: {
    // font: normal normal normal 10px/14px Open Sans;
    fontFamily: "Open Sans",
    fontSize: "10px",
    fontWeight: "normal",
    letterSpacing: "0.43px",
    textAlign: "center",
  },
  GridButton: {
    alignContent: "center",
    justifyContent: "flex-end",
  },
  content: {
    padding: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
}));

const RedeemGiftCards = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <Grid className={classes.GridButton} container>
          <Button
            className={classes.RedeemButton}
            startIcon={<StorefrontIcon />}
          >
            At Store Only
          </Button>
        </Grid>
        <CardActionArea>
          <CardContent className={classes.content}>
            <div>
              <CardMedia
                style={{
                  width: "125px",
                  height: "70px",
                  backgroundSize: "contain",
                }}
                image={moreImg}
                title="moreImg"
              />
              <Typography
                className={classes.RedeemCardSubtitle}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Food & Grocery
            </Typography>
            </div>
            <CardMedia
              style={{
                width: "150px",
                height: "134px",
                backgroundSize: "contain",
              }}
              image={storeImg}
              title="storeImg"
            />
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{ color: "#000000DE", fontWeight: "bold", paddingLeft: "0.8rem" }}
              variant="h4"
              component="h2"
            >
              ???500
            </Typography>
            <Typography
              style={{
                paddingLeft: "0.8rem",
                letterSpacing: "0.6px",
                fontSize: "14px",
                fontWeight: 'normal',
                fontFamily: 'Open Sans',
                // font: normal normal normal 14px/19px Open Sans;
                color: "#181818",
              }}
              gutterBottom
              variant="h6"
              component="h2"
            >
              GIFT CARD
            </Typography>
          </div>
          <Button className={classes.RedeemButtonBottom}>Buy now</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default RedeemGiftCards;
