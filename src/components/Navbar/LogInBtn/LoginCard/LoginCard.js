import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    loginCard: {
        // height: "350px",
        maxWidth: 300,
        height: "auto",
        padding: "1rem",
        background: "#FFFFFF",
        boxShadow: "0px 2px 60px #0000001F",
        borderRadius: "20px",
    },
    loginCardTitle: {
        fontSize: "20px",
        textAlign: "center",
        fontWeight: "bold",
        margin: "1.5rem 0 0.5rem",
        // font: normal normal bold 32px/43px Open Sans,
    },
    loginCardContent: {
        padding: 0,
    },
    loginCardOtpText: {
        marginBottom: "1.5rem",
        fontSize: "12px",
        letterSpacing: "0.5px",
        color: "#000000DE",
    },
    loginCardTextGrid: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    loginCardBottomText: {
        textAlign: "center",
        fontSize: "12px",
    },
    loginCardAction: {
        flexDirection: "column",
    },
    loginCardTermsButton: {
        padding: 0,
        margin: 0,
        fontSize: "12px",
        textTransform: "capitalize",
        color: "#52AAE0",
    },
}));


const LoginCard = ({
    DynamicloginCardTitle,
    DynamicOtpMsg,
    DynamicInput,
}) => {
    const classes = useStyles();
    return (
        <>
            <Card elevation={0} className={classes.loginCard}>
                <CardContent className={classes.loginCardContent}>
                    <Typography
                        className={classes.loginCardTitle}
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        {DynamicloginCardTitle}
                    </Typography>
                    <Typography
                        className={classes.loginCardOtpText}
                        gutterBottom
                        variant="h6"
                        component="h2"
                    >
                        {DynamicOtpMsg}
                    </Typography>
                    <Grid className={classes.loginCardTextGrid} container>
                        {DynamicInput}
                    </Grid>
                </CardContent>
                <CardActions className={classes.loginCardAction}>
                    {/* <Button
                        fullWidth
                        className={classes.loginCardButton}
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={stepperHandleNext}
                    // disabled={!isValid}
                    >
                    </Button> */}
                    {/* <Button
                        fullWidth
                        className={classes.loginCardButton}
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={stepperHandleNext}
                    >
                        Verify
                    </Button> */}
                    <Typography
                        className={classes.loginCardBottomText}
                        variant="body2"
                        color="textSecondary"
                    >
                        By logging in, I agree to the
              <Button className={classes.loginCardTermsButton} variant="text">
                            Terms & Conditions
              </Button>
                    </Typography>
                </CardActions>
            </Card>
        </>
    );
};

export default LoginCard
