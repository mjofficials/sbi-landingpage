import React from 'react'
import { Paper, Typography, makeStyles, Grid } from '@material-ui/core'
import ShopAndEarnCard from '../ShopAndEarnCard/ShopAndEarnCard';
import swiggyImg from "../../../../assets/swiggyImg.png";
import bigBasketImg from '../../../../assets/bigBasketImg.png'

const useStyles = makeStyles((theme) => ({
    root: {
        background: "transparent",
        padding: "1rem 0"
    },
    HeadingText1: {
        textAlign: "left",
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Open Sans",
        color: "#000000DE",
    },
    HeadingText2: {
        textAlign: "left",
        color: "#8E8E8E",
        fontSize: "16px",
        textTransform: "capitalize",
        fontFamily: "Open Sans",
    },
    cardArea: {
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up("660")]: {
            justifyContent: "flex-start",
        },
    },
}))

const ShopAndEarnPaper = ({
    PaperHeadingText1,
    PaperHeadingText2,
    dynamicContent
}) => {
    const classes = useStyles();

    return (
        <>
            <Paper elevation={0} className={classes.root} >
                <Typography gutterBottom className={classes.HeadingText1} >{PaperHeadingText1}</Typography>
                <Typography gutterBottom className={classes.HeadingText2}>{PaperHeadingText2}</Typography>
                <Grid container className={classes.cardArea}>
                    {dynamicContent}
                </Grid>
            </Paper>
        </>
    )
}

export default function ShopAndEarn() {
    var FoodDelivery = [],
        Grocery = [];

    // Change below for-loop condition (i < 5) to increase or decrease card count
    for (let i = 0; i < 5; i++) {
        FoodDelivery.push(
            <ShopAndEarnCard
                ShopAndEarnCardImg={swiggyImg}
                ShopAndEarnCardTitle={"Swiggy"}
                ShopAndEarnCardDescription={"Food & Drink"}
                key={i} />)
    }

    // Change below for-loop condition (i < 3) to increase or decrease card count
    for (let i = 0; i < 3; i++) {
        Grocery.push(
            <ShopAndEarnCard
                ShopAndEarnCardImg={bigBasketImg}
                ShopAndEarnCardTitle={"Big basket"}
                ShopAndEarnCardDescription={"Grocery"}
                key={i} />)
    }
    return (
        <>
            <ShopAndEarnPaper
                dynamicImg={swiggyImg}
                dynamicTitle={"Swiggy"}
                dynamicDescription={"Food & Drink"}
                PaperHeadingText1={"Food Delivery"}
                PaperHeadingText2={"Order Food to your door step"}
                dynamicContent={FoodDelivery}
            />
            <ShopAndEarnPaper
                dynamicImg={bigBasketImg}
                dynamicTitle={"Big basket"}
                dynamicDescription={"Grocery"}
                PaperHeadingText1={"Grocery"}
                PaperHeadingText2={"Order Grocery & Fruits"}
                dynamicContent={Grocery}
            />
        </>
    )
}
