import React from "react";

import { useState, useEffect } from "react";
import Cardcomp from "./Cardcomp";
import { Grid } from "@mui/material";

function Tesla() {
  const [dataw, setData] = useState([]);

  const getPriceData = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-12-27&sortBy=publishedAt&apiKey=8b05662c880742d7a0d11187509b9b86"
    );
    const actualdata = await res.json();
    setData(actualdata.articles);
  };
  useEffect(() => {
    getPriceData();
  }, []);
  console.log(dataw);
  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        rowGap={3}
        justify="flex-start"
        alignItems="flex-start"
        mt={1}
        px={4}
      >
        {dataw.map((curtab, ind) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Cardcomp
                title={curtab.title.slice(0, 40)}
                img={curtab.urlToImage}
                para2={
                  curtab.description ? curtab.description.slice(0, 85) : ""
                }
                link={curtab.url}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Tesla;
