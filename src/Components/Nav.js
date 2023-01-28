import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

function Nav() {
  return (
    <>
      <Grid container mt={1}>
        <Grid item lg={3} md={1} xs={1}></Grid>
        <Grid item lg={5} md={10} xs={10} textAlign="center">
          <Typography sx={{ fontSize: { lg: 20, xs: 25 }, color: "white" }}>
            Trending News !!!
          </Typography>
        </Grid>
        <Grid item lg={4} md={1} xs={1}></Grid>
      </Grid>
      <Grid container mt={1}>
        <Grid item lg={4}></Grid>
        <Grid item lg={4}>
          <Grid container spacing={{ lg: 6, xs: 3 }} mx={{ xs: 2 }}>
            <Grid item>
              <Button sx={{ backgroundColor: "green", color: "white" }}>
                Apple
              </Button>
            </Grid>{" "}
            <Grid item>
              <Button sx={{ backgroundColor: "green", color: "white" }}>
                Tesla
              </Button>
            </Grid>{" "}
            <Grid item>
              <Button sx={{ backgroundColor: "green", color: "white" }}>
                Crypto
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4}></Grid>
      </Grid>
    </>
  );
}

export default Nav;
