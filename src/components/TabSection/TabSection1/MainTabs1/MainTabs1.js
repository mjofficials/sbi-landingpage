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
  Divider,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import SearchIcon from "@material-ui/icons/Search";
import OfflineStore from "../OfflineStore/OfflineStore"
import OnlineStore from '../OnlineStore/OnlineStore'
import twidImg from "../../../../assets/twid.svg";
import ExclusiveOfferCards from "../ExclusiveOfferCards/ExclusiveOfferCards";
import tataskyImg from "../../../../assets/tatasky.png";
import hungamaImg from "../../../../assets/hungamaImg.png";
import cloveImg from "../../../../assets/cloveImg.png";
import apolloImg from "../../../../assets/apolloImg.png";
import zee5Img from "../../../../assets/zee5Img.png";
import economistImg from "../../../../assets/economistImg.png";
import RedeemGiftCards from "../RedeemGiftCards/RedeemGiftCards";

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
    justifyContent: "flex-start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  gridContainer: {
    justifyContent: "center"
  },
  gridBorder: {
    borderRight: 0,
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up('md')]: {
      borderRight: "1px solid #E0E0E0",
      marginTop: "0",
    },
  },
  paperGrid: {
    // textAlign: "end",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "0",
    [theme.breakpoints.down('xs')]: {
      marginTop: "1rem"
    }
  },
  tab: {
    textTransform: "capitalize",
    marginRight: '0.5rem',
    backgroundColor: "white",
    padding: "0.5rem",
    borderRadius: "8px",
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
      // marginLeft: theme.spacing(3),
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
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "28ch",
    },
  },
  cardArea: {
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("660")]: {
      justifyContent: "flex-start",
    },
  }
}));

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <>{value === index && <>{children}</>}</>;
};

export default function MainTabs1() {
  const classes = useStyles();

  const [tab, setTab] = useState(2);
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
        style={{
          marginTop: "1rem"
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
            border: "1px solid #EAEAEA",
            borderRadius: "8px"
          }}
          elevation={0}
        >
          <Toolbar>
            <Grid className={classes.gridContainer} container >
              <Grid
                className={(classes.paperGrid, classes.gridBorder)}
                style={{
                  alignItems: "flex-start",
                }}
                item
                sm={12}
                md={4}

              >
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    fullWidth
                    color="primary"
                    placeholder="Search by brand, Offer, Rewards"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Grid>
              <Grid className={classes.paperGrid} item sm={12} md={6} >
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
              <Grid className={classes.paperGrid} item sm={12} md={2} >
                <Button variant="contained" color="secondary">
                  Add Filter
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </Paper>
        <Paper >
          <OfflineStore />
          <Divider variant="middle" />
          <OnlineStore />
          <Grid container style={{
            alignItems: "center",
            justifyContent: "flex-end",
          }} >
            <Grid item>
              <img src={twidImg} style={{ padding: "0.5rem 1.5rem" }} alt="twidImg" />
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>
      <TabPanel style={{
        border: "5px solid white",

      }} value={tab} index={1}>
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
            <ExclusiveOfferCards
              cardImg={tataskyImg}
              cardTitle={"Tata Sky"}
              cardDescription={"Rs 400 off at Tata Sky"}
            />
            <ExclusiveOfferCards
              cardImg={hungamaImg}
              cardTitle={"Hungama"}
              cardDescription={"Get 100 days Hungama Music subscription free"}
            />
            <ExclusiveOfferCards
              cardImg={cloveImg}
              cardTitle={"Clove Dental"}
              cardDescription={"Dental Health Membership Plan @550 from Clove Dental"}
            />
            <ExclusiveOfferCards
              cardImg={apolloImg}
              cardTitle={"Apollo"}
              cardDescription={"Get up to 15% off* at Apollo Pharmacy with your Credit card."}
            />
            <ExclusiveOfferCards
              cardImg={zee5Img}
              cardTitle={"Zee5"}
              cardDescription={"Get 20% off at Zee5"}
            />
            <ExclusiveOfferCards
              cardImg={economistImg}
              cardTitle={"The Economist"}
              cardDescription={"Get a 15% discount"}
            />
          </Grid>
          <Grid container style={{
            alignItems: "center",
            justifyContent: "flex-end",
          }} >
            <Grid item>
              <img src={twidImg} style={{ padding: "0.5rem 1.5rem" }} alt="twidImg" />
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>
      <TabPanel style={{
        border: "5px solid white",

      }} value={tab} index={2}>
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
            <RedeemGiftCards />
            <RedeemGiftCards />
            <RedeemGiftCards />
          </Grid>
        </Paper>
      </TabPanel>
    </MuiThemeProvider>
  );
}
