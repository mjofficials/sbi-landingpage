import React from "react";
import {
  Toolbar,
  Typography,
  InputBase,
  Grid,
} from "@material-ui/core";
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import LogInBtn from "../LogInBtn/LogInBtn";
import RegisterBtn from '../RegisterBtn/RegisterBtn'
// import RegisterBtn from '../RegisterBtn/RegisterBtn'

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    border: '1px solid rgba(0,0,0,0.25)',
    borderRadius: '8px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40vw',
    },
  },
  inputGrid: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center"
    }
  },
  customGrid: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonDiv: {
    display: "flex"
  },
}))

const NavbarDesktop = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <Grid container className={classes.customGrid} spacing={0}>
          <Grid item xs={4} sm={2} md={2} >
            <Typography className={classes.title} variant="h6" noWrap>
              Logo
            </Typography>
          </Grid>
          <Grid className={classes.inputGrid} item xs={4} sm={3} md={5}  >
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
          <Grid
            item
            xs={4}
            m={7}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center"
            }} >
            <div className={classes.buttonDiv}>
              <LogInBtn />
              <RegisterBtn />
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
};

export default NavbarDesktop;
