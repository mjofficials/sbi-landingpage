import React from "react";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import LogInBtn from "../LogInBtn/LogInBtn";
import RegisterBtn from "../RegisterBtn/RegisterBtn";

const useStyles = makeStyles((theme) => ({
  Drawerlogo: {
    margin: "1rem",
  },
  drawer: {
    width: "300px",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paperAnchorLeft: {
        width: "50%",
      },
    },
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <MuiThemeProvider theme={theme}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Typography className={classes.NavbarLogo} variant="h6" noWrap>
              Logo
            </Typography>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuRoundedIcon />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <Typography className={classes.Drawerlogo} variant="h6" noWrap>
                Logo
              </Typography>
              <div className={classes.buttonDiv}>
                <LogInBtn />
                <RegisterBtn />
              </div>
            </Drawer>
          </Toolbar>
        </React.Fragment>
      ))}
    </MuiThemeProvider>
  );
}

// import React from "react";
// import { Drawer, IconButton, Toolbar, Typography } from "@material-ui/core";
// import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
// import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
// const NavbarMobile = () => {
//   return (
//     <div>
//       <Toolbar style={{ justifyContent: "space-between" }}>
//         <Typography variant="h6" noWrap>
//           Logo
//         </Typography>
//         <IconButton>
//           <MenuRoundedIcon />
//           <Drawer>
//             <IconButton>
//               <CloseRoundedIcon />
//             </IconButton>
//           </Drawer>
//         </IconButton>
//       </Toolbar>
//     </div>
//   );
// };

// export default NavbarMobile;
