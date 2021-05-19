import { Grid, TextField } from "@material-ui/core";
import React from "react";

const OtpAuth = ({ stepperHandleBack }) => {
  return (
    <>
      <Grid container spacing={2}>
        <TextField id="customerId" label="Outlined" variant="outlined" />
      </Grid>
    </>
  );
};

export default OtpAuth;
