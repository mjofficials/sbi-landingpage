import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const useStyles = makeStyles({
  // drawer: {
  //   width: "300px",
  // },
  navButton: {
    textTransform: "none",
    margin: "1rem",
    background: "#FED127",

    "&:hover": {
      background: "rgb(249, 216, 83)",
      color: 'black'
    }
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
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Typography variant="h6" noWrap>
              Logo
            </Typography>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuRoundedIcon />
            </IconButton>
            <Drawer
              className={classes.drawer}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <Button
                className={classes.navButton}
                // style={{ textTransform: "none" }}
                startIcon={<PersonOutlineOutlinedIcon />}
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
            </Drawer>
          </Toolbar>
        </React.Fragment>
      ))}
    </div>
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
