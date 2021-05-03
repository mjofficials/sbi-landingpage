import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import TabSection1 from "./TabSection1/TabSection1";
import TabSection2 from "./TabSection2/TabSection2";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <>{value === index && <>{children}</>}</>;
};

export default function Tabsection() {
  const [tab, setTab] = useState(0);

  const handleTabs = (e, val) => {
    setTab(val);
  };

  return (
    <>
      <Tabs value={tab} onChange={handleTabs}>
        <Tab label="Redeem Points" />
        <Tab label="Shop & Earn Rewards" />
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
