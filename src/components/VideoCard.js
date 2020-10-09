import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ReactPlayer from "react-player";
import IconButton from "@material-ui/core/IconButton";
import { MoreHoriz } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
 
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
  },
  reactplayer: {
    position: "absolute",
    top: 0,
    left: 0,
  }
}));

export default function VideoCard() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreHoriz />
          </IconButton>
        }
        title="Product Video"
      
      />
      <div className={classes.playerWrapper}>
        <ReactPlayer
          className={classes.reactplayer}
          url=" https://www.youtube.com/watch?v=Oy6hk6Y7VHQ&feature=youtu.be"
          width="100%"
          height="90%"
        />
      </div>
    </Card>
  );
}
