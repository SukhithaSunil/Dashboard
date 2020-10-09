import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import img2 from "../assets/Bavid kames.png";
import img1 from "../assets/Jana Navakova.jpg";
import img3 from "../assets/Drew James.png";
import img4 from "../assets/Lavid Emes.png";
import { MoreHoriz } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    
    display: "flex",
    flexDirection: "column",
     top: 170,
    left: "1138!important",
    // width: "371px!important",
     height: "602px!important",
  },
  large: {
    width: 110,
    height: 110,
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "auto",
  },
}));

export default function UsersCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.avatar} >
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          color="secondary"
          badgeContent=" "
          variant="dot"
        >
          <Avatar aria-label="recipe" src={img1} className={classes.large}/>
        </Badge>
        <Typography variant="h6" noWrap>
        Nick Herasimenka
            </Typography>
            <Typography noWrap variant="subtitle">
       United States
            </Typography>
      </CardMedia>
      <CardContent>
      
            <div></div>
      </CardContent>
      <Divider />

      <CardHeader
        title="Our Users"
        action={
          <IconButton aria-label="settings">
            <MoreHoriz/>
          </IconButton>
        }
      />

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={img2} />
        }
        title="Drew James"
        subheader="United States  Mobile 971.465.1234"
      />
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={img3} />
        }
        title="Bavid Kames"
        subheader="United States  Mobile 971.465.1234"
      />
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={img4} />
        }
        title="Lavid Eames"
        subheader="United States  Mobile 971.465.1234"
      />
    </Card>
  );
}
