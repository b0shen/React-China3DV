import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function TravelCard({ data }) {
  const { title, intro, img, link, type } = data;
  const showAction = ["href"].findIndex((e) => e === type) !== -1;
  const onClick = () => {
    if (type === "href") {
      window.open(link);
    } else {
      console.warn("nav type not support");
    }
  };
  return (
    <Card>
      {img ? <CardMedia image={img} title={title} /> : null}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {intro}
        </Typography>
      </CardContent>
      {showAction ? (
        <CardActions>
          <Button size="small" onClick={onClick}>
            查看
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
}
