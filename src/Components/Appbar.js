import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Toggl from "./Toggl";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgba(86, 127, 213, 0.805)" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NewspaperIcon size="large" />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, fontSize: { xs: 25, lg: 30 } }}
          >
            News_Menia
          </Typography>
          <Toggl />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
