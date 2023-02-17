import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import image from "./no-image.png";

const CardMovie = ({ movieData }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={movieData.Poster !== "N/A" ? movieData.Poster : image}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span style={{ fontWeight: "bold" }}>Title:</span> {movieData.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Title:</span> {movieData.Plot}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Title:</span>{" "}
            {movieData.Country}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: "bold" }}>Actors:</span>{" "}
            {movieData.Actors}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardMovie;
