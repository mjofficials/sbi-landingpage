import { fade, makeStyles } from '@material-ui/core/styles';

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
            marginLeft: theme.spacing(3),
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
            width: '30ch',
        },
    },
    inputGrid: {
        [theme.breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center"
        }
    },
    navButton: {
        textTransform: "none",
        marginLeft: "0.8rem",
        background: "#FED127",

        "&:hover": {
            background: "rgb(249, 216, 83)",
            color: 'black'
        }
    },
    customAppbar: {
        background: "white",
        color: "black"
    },
    customGrid: {
        justifyContent: "space-between"
    },
}))
export { useStyles };