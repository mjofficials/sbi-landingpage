import React from "react";
import {
  Toolbar,
  Typography,
  InputBase,
  Button,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { useStyles } from "../NavbarStyles";

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
              <Button
                className={classes.navButton}
                startIcon={<ExitToAppOutlinedIcon />}
                variant="contained"
              >
                Login
              </Button>
              <Button
                className={classes.navButton}
                // style={{ textTransform: "none" }}
                startIcon={<PersonOutlineOutlinedIcon />}
                variant="contained"
              >
                Register
              </Button>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
};

export default NavbarDesktop;
