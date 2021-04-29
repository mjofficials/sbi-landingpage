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
        <Grid container className={classes.customGrid} spacing={3}>
          <Grid item>
            <Typography className={classes.title} variant="h6" noWrap>
              Logo
            </Typography>
          </Grid>
          <Grid lg={6} item>
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
          <Grid item>
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
