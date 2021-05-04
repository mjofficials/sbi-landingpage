import React, { useState } from "react";
import {
  Tabs,
  Tab,
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  withStyles,
  Button,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#52AAE0",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "capitalize",
      },
    },
    MuiTab: {
      wrapper: {
        flexDirection: "row",
      },
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
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
        indicatorColor="primary"
        value={tab}
        onChange={handleTabs}
      >
        <Tab
          icon={<ShoppingCartIcon />}
          className={classes.tab}
          label="Go Shopping"
        ></Tab>
        <Tab
          icon={<LocalOfferIcon />}
          className={classes.tab}
          label="Exclusive Offers"
        ></Tab>
        <Tab
          icon={<CardGiftcardIcon />}
          className={classes.tab}
          label="Redeem for Gift Cards"
        ></Tab>
      </Tabs>
      <TabPanel value={tab} index={0}>
        <Button variant="contained" color="primary">
          sample
        </Button>
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
