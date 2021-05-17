import React, { useState } from "react";
import { Tabs, Tab, MuiThemeProvider, createMuiTheme, } from "@material-ui/core";
import TabSection1 from "./TabSection1/TabSection1";
import TabSection2 from "./TabSection2/TabSection2";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  tabs: {
    paddingTop: "1rem",
  },
  tab: {
    textTransform: "capitalize",
    background: "white",
    color: "#000000DE",
    padding: "1rem",
    marginRight: "1rem",
    borderRadius: "8px",
    // font: "normal normal normal 22px/15px Open Sans",

  },
})

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#52AAE0",
    },
  },
  overrides: {
    MuiTab: {
      wrapper: {
        flexDirection: "row",
        justifyContent: "flex-start"
      },
      textColorInherit: {
        // font: "normal normal normal 22px/15px Open Sans", 
        opacity: 1,
        "&.Mui-selected": {
          color: "#000000DE",
          font: "normal normal bold 22px/15px Open Sans",
        }
      }
    }
  }
})

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <>{value === index && <>{children}</>}</>;
};

export default function Tabsection() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const handleTabs = (e, val) => {
    setTab(val);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{
          style: {
            width: "125px",
            height: "0.3rem",
            borderRadius: "5px 5px 0 0",
            marginLeft: "0.2rem"
          },
        }} className={classes.tabs} value={tab} onChange={handleTabs}>
        <Tab textColor="primary" className={classes.tab} label="Redeem Points" />
        <Tab className={classes.tab} label="Shop & Earn Rewards" />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <TabSection1 />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <TabSection2 />
      </TabPanel>
    </MuiThemeProvider>
  );
}
