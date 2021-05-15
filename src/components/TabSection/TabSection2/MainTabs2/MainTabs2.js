import React, { useState } from "react";
import { Tabs, Tab, makeStyles, Paper, Grid } from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LayersIcon from "@material-ui/icons/Layers";
import twidImg from "../../../../assets/twid.svg";
import EarnRewards from "../EarnRewards/EarnRewards";

import peterEnglandImg from "../../../../assets/peterEnglandImg.png";
import blueManImg from "../../../../assets/blueManImg.png";
import bataImg from "../../../../assets/bataImg.png";
import greenGirlImg from "../../../../assets/greenGirlImg.png";
import ccdImg from "../../../../assets/ccdImg.png";
import ccdPosterImg from "../../../../assets/ccdPosterImg.png";

const useStyles = makeStyles((theme) => ({
  tab: {
    textTransform: "capitalize",
    marginRight: "0.5rem",
    backgroundColor: "white",
    padding: "0.5rem",
    borderRadius: "8px",
  },
  cardArea: {
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("660")]: {
      justifyContent: "flex-start",
    },
  },
}));

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <>{value === index && <>{children}</>}</>;
};

export default function MainTabs1() {
  const classes = useStyles();

  const [tab, setTab] = useState(0);
  const handleTabs = (e, val) => {
    setTab(val);
  };

  return (
    <>
      <Tabs
        style={{
          marginTop: "1rem",
        }}
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        indicatorColor="primary"
        value={tab}
        onChange={handleTabs}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab
          icon={<MonetizationOnIcon />}
          className={classes.tab}
          label="Earn Rewards"
        ></Tab>
        <Tab
          icon={<LayersIcon />}
          className={classes.tab}
          label="Shop & Earn"
        ></Tab>
      </Tabs>
      {/* Table Panel 1 */}
      <TabPanel
        style={{
          border: "5px solid white",
        }}
        value={tab}
        index={0}
      >
        <Paper
          style={{
            margin: "2rem 0px",
            background: "transparent",
            border: "8px solid white",
            padding: "0.8rem",
          }}
          elevation={0}
        >
          <Grid container className={classes.cardArea}>
            {/* Earn Reward Cards */}
            <EarnRewards
              iconImg={peterEnglandImg}
              posterImg={blueManImg}
              iconName={"Peter England"}
              cardBottomText1={"Shop for ₹3,000+"}
              cardBottomTextBold={"Earn 2000 SBI Points"}
            />
            <EarnRewards
              iconImg={bataImg}
              posterImg={greenGirlImg}
              iconName={"Bata"}
              cardBottomText1={"Shop for ₹2,000+"}
              cardBottomTextBold={"Earn 1000 SBI Points"}
            />
            <EarnRewards
              iconImg={ccdImg}
              posterImg={ccdPosterImg}
              iconName={"Cafe Coffee Day"}
              cardBottomText1={"Shop for ₹1,000+"}
              cardBottomTextBold={"Earn 500 SBI Points"}
            />
          </Grid>
          <Grid
            container
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Grid item>
              <img
                src={twidImg}
                style={{ padding: "0.5rem 1.5rem" }}
                alt="twidImg"
              />
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>
      {/* Table Panel 2 */}
      <TabPanel
        style={{
          border: "5px solid white",
        }}
        value={tab}
        index={1}
      >
        <Paper
          style={{
            margin: "2rem 0px",
            background: "transparent",
            border: "8px solid white",
            padding: "0.8rem",
          }}
          elevation={0}
        >
          <h1>area 2</h1>
          <Grid
            container
            style={{
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Grid item>
              <img
                src={twidImg}
                style={{ padding: "0.5rem 1.5rem" }}
                alt="twidImg"
              />
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>
    </>
  );
}
