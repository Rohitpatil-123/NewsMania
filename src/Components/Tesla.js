import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Cardcomp from "./Cardcomp";
import { Grid, Toolbar } from "@mui/material";
import TextField from "@mui/material/TextField";
import Paginationext from "./Paginationext";
import Records from "../Data/records.json";

function Tesla() {
  // const [dataw, setData] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(24);

  // const getPriceData = async () => {
  //   const res = await fetch(
  //     "https://newsapi.org/v2/everything?q=apple&from=2023-01-28&to=2023-01-28&sortBy=popularity&apiKey=8b05662c880742d7a0d11187509b9b86"
  //   );
  //   const actualdata = await res.json();
  //   setData(actualdata.articles);
  // };
  const lastpostindex = currentpage * postperpage;
  const firstpostindex = lastpostindex - postperpage;
  const data = Records.slice(firstpostindex, lastpostindex);

  // useEffect(() => {
  //   getPriceData();
  // }, []);

  return (
    <>
      <Toolbar />

      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        mt={2}
      >
        <TextField
          id="standard-search"
          label="Search News"
          type="search"
          variant="standard"
          InputLabelProps={{
            style: { color: "black" },
          }}
          sx={{
            width: { lg: "50%", xs: "70%" },
            color: "white",
          }}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </Box>
      <Grid
        container
        spacing={1}
        direction="row"
        rowGap={{ lg: 3, xs: 1 }}
        justify="flex-start"
        alignItems="flex-start"
        mt={1}
        px={4}
      >
        {data
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((curtab, ind) => {
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
      <Paginationext
        totalpost={Records.length}
        postperpage={postperpage}
        setCurrentpage={setCurrentpage}
      />
    </>
  );
}

export default Tesla;
