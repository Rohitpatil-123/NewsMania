import { Button } from "@mui/material";
import Box from "@mui/material/Box";

import React from "react";

function Paginationext({ totalpost, postperpage, setCurrentpage }) {
  let pages = [];
  for (let i = 1; i < Math.ceil(totalpost / postperpage); i++) {
    pages.push(i);
  }
  return (
    <Box
      mt={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
      }}
    >
      {pages.map((page, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              setCurrentpage(page);
            }}
            sx={{
              borderRadius: "20%",
              backgroundColor: "rgb(255, 185, 21)",
              color: "white",
            }}
          >
            {page}
          </Button>
        );
      })}
    </Box>
  );
}

export default Paginationext;
