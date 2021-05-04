import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import TabSection1 from "./TabSection1/TabSection1";
import TabSection2 from "./TabSection2/TabSection2";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  tabs: {
    paddingTop: "1rem",
  },
  tab: {
    textTransform: "capitalize"
  },
  palette: {
    customColor: "red"
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
    <>
      <Tabs className={classes.tabs} value={tab} onChange={handleTabs}>
        <Tab className={classes.tab} label="Redeem Points" />
        <Tab className={classes.tab} label="Shop & Earn Rewards" />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <TabSection1 />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <TabSection2 />
      </TabPanel>
    </>
  );
}
