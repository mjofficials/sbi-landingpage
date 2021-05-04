import React, { useState } from "react";
import {
  Tabs,
  Tab,
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#52AAE0",
    },
  },
});

const useStyles = makeStyles({
  tab: {
    textTransform: "capitalize",
  },
});

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
    <MuiThemeProvider theme={theme}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        indicatorColor="primary"
        value={tab}
        onChange={handleTabs}
      >
        <Tab className={classes.tab} label="Go Shopping"></Tab>
        <Tab className={classes.tab} label="Exclusive Offers"></Tab>
        <Tab className={classes.tab} label="Redeem for Gift Cards"></Tab>
      </Tabs>
      <TabPanel value={tab} index={0}>
        item 1
      </TabPanel>
      <TabPanel value={tab} index={1}>
        item 2
      </TabPanel>
      <TabPanel value={tab} index={2}>
        item 3
      </TabPanel>
    </MuiThemeProvider>
  );
}
