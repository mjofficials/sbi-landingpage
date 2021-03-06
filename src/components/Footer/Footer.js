import React from "react";
import { Container, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import appstore from "../../assets/appstore.png";
import gplay from "../../assets/gplay.png";
import loyaltyImg from "../../assets/loyaltyimg.png";
import dssImg from "../../assets/dssimg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#383739",
    marginTop: "6rem",
  },
  footerContainer: {
    background: "#383739",
    padding: "2rem 3rem",
  },
  footerlink: {
    fontSize: "16px",
    fontFamily: "Open Sans",
    color: "rgba(255, 255, 255, 0.65)",
    marginBottom: "0.8rem",
    lineHeight: "2rem",
    cursor: "pointer",
  },
  footerlinkText: {
    fontSize: "16px",
    fontFamily: "Open Sans",
    color: "rgba(255, 255, 255, 0.65)",
    marginBottom: "0.8rem",
    lineHeight: "2rem",
    // cursor: "pointer",
    cursor: "default"
  },
  footerlinksTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    fontFamily: "Open Sans",
    marginBottom: "1rem",
  },
  gridItem: {
    marginBottom: "1.5rem",
  },
  footerDivider: {
    background: "rgba(255, 255, 255, 0.6)",
    margin: "1rem 0 1rem",
  },
  footerBottomTextLine: {
    color: "rgba(255, 255, 255, 0.65)",
    margin: "1rem 0 1rem",
  },
  footerBottomImg: {
    marginLeft: "0",
  },
  footerBottomImgGrid: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
      //   justifyContent: "space-evenly",
    },
  },
  footerBottomRightText: {
    color: "rgba(255, 255, 255, 0.65)",
    margin: "1rem 0 1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Container className={classes.footerContainer}>
          <Grid container>
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
              <Typography className={classes.footerlinksTitle}>
                Overview
              </Typography>
              <ul>
                <li className={classes.footerlink}>Green fund</li>
                <li className={classes.footerlink}>Terms & Conditions</li>
                <li className={classes.footerlink}>Testimonials</li>
                <li className={classes.footerlink}>Privacy policy</li>
                <li className={classes.footerlink}>Sitemap</li>
              </ul>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
              <Typography className={classes.footerlinksTitle}>
                Redeem Points
              </Typography>
              <ul>
                <li className={classes.footerlink}>Go Shopping</li>
                <li className={classes.footerlink}>Exclusive Offers</li>
                <li className={classes.footerlink}>Redeem for gift cards</li>
              </ul>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
              <Typography className={classes.footerlinksTitle}>
                Shop & Earn Rewards
              </Typography>
              <ul>
                <li className={classes.footerlink}>Earn Rewards</li>
                <li className={classes.footerlink}>Shop & Earn</li>
              </ul>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={6} md={3}>
              <Typography className={classes.footerlinksTitle}>
                Experience on our App
              </Typography>
              <ul>
                <li>
                  <img src={appstore} alt="appstore" />
                </li>
                <li>
                  <img src={gplay} alt="gplay" />
                </li>
              </ul>
            </Grid>
          </Grid>
          <Divider className={classes.footerDivider} />
          <Typography className={classes.footerlinksTitle}>
            Popular Searches
          </Typography>
          <Grid container>
            <Grid item xs={12} md={9}>
              <Typography className={classes.footerlinkText}>
                Gift and vouchers | Recharge | Movie | Flight | Hotel | Bus |
                Offers | Swiggy | Personal Loan | Big Basket | Bata | Redeem
              </Typography>
              <Typography className={classes.footerlinkText}>
                The trademarks and brand logos are owned by the respective
                Sponsors/ Suppliers/ Retailers and are authorized for their use
                in India
              </Typography>
            </Grid>
            <Grid className={classes.footerBottomImgGrid} item xs={12} md={3}>
              <img
                className={classes.footerBottomImg}
                src={loyaltyImg}
                alt="loyaltyImg"
              />
              <img
                className={classes.footerBottomImg}
                src={dssImg}
                alt="dssImg"
              />
            </Grid>
          </Grid>
          <Divider className={classes.footerDivider} />
          <Grid container>
            <Grid className={classes.footerBottomTextLine} item xs={12} sm={8}>
              Copyright ?? - 2021 Loylty Rewardz Mngt Pvt Ltd. All rights
              reserved.
            </Grid>
            <Grid className={classes.footerBottomRightText} item xs={12} sm={4}>
              In case of any concern,
              <span
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  paddingLeft: "0.4rem",
                }}
              >
                Contact Us
              </span>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Footer;
