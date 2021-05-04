import React, { useState } from "react";
import {
  Tabs,
  Tab,
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  fade,
  Paper,
  Toolbar,
  InputBase,
  Grid,
  Button,
  Chip,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import SearchIcon from "@material-ui/icons/Search";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#52AAE0",
    },
    secondary: {
      main: "#2E2771",
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
        justifyContent: "flex-start",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
  chipArr: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  paperGrid: {
    // textAlign: "end",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  tab: {
    textTransform: "capitalize",
    padding: 0,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    // border: "1px solid rgba(0,0,0,0.25)",
    // borderRadius: "8px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
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
  const [chipData, setChipData] = useState([
    { key: 0, label: "Earn Reward" },
    { key: 1, label: "Online Store" },
    { key: 2, label: "Offline Store" },
  ]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
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
        <Paper
          style={{
            margin: "2rem 0 2rem 0",
          }}
          elevation={3}
        >
          <Toolbar>
            <Grid container>
              <Grid
                className={classes.paperGrid}
                style={{
                  alignItems: "flex-start",
                  borderRight: "1px solid #E0E0E0",
                }}
                item
                xs={4}
              >
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    color="primary"
                    placeholder="Search by brand, Offer, Rewards"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Grid>
              <Grid className={classes.paperGrid} item xs={4}>
                <div className={classes.chipArr}>
                  {chipData.map((data) => {
                    return (
                      <li key={data.key}>
                        <Chip
                          label={data.label}
                          onDelete={handleDelete(data)}
                          className={classes.chip}
                        />
                      </li>
                    );
                  })}
                </div>
              </Grid>
              <Grid className={classes.paperGrid} item xs={4}>
                <Button variant="contained" color="secondary">
                  Add Filter
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </Paper>
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
