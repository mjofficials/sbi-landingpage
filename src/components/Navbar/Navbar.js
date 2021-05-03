import React, { useState, useEffect } from "react";
import { AppBar } from "@material-ui/core";
import { useStyles } from "./NavbarStyles";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <AppBar position="sticky" className={classes.customAppbar}>
      {mobileView ? <NavbarMobile /> : <NavbarDesktop />}
    </AppBar>
  );
};

export default Navbar;
