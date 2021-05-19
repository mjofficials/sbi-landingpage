import React from "react";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";

const FillDetails = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            size="small"
            id="customerId"
            label="Enter Customer Id"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            id="customerId"
            label="Enter last 4 digits "
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            size="small"
            id="customerId"
            label="Enter Captcha"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            style={{ width: "230px" }}
            size="small"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Captcha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              // value={values.password}
              // onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    //   onClick={handleClickShowPassword}
                    //   onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <ReplayIcon fontSize="small" />
                    {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default FillDetails;
