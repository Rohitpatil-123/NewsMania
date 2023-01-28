import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NewspaperIcon from "@mui/icons-material/Newspaper";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "saturate(180%) blur(10px)",
        }}
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
