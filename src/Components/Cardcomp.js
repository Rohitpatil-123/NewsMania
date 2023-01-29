import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: { lg: 5, xs: 2 } }}>
      <CardMedia sx={{ height: 140 }} image={props.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.para2}...
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={props.link}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
