import StatisticsChart from "../components/StatisticsChart";
import PieDonutChart from "../components/PieDonutChart";
import ReferrerTable from "../components/ReferrerTable";
import UsersCard from "../components/UsersCard";
import VideoCard from "../components/VideoCard";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import InputBase from "@material-ui/core/InputBase";
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import NotesIcon from "@material-ui/icons/Menu";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import MailIcon from "@material-ui/icons/Mail";
import {
  AddCircleOutline,
  ExpandMore,
  HomeOutlined,
  SearchSharp,
} from "@material-ui/icons";
import { Avatar, Badge, Box } from "@material-ui/core";

import img from "../assets/Jana Navakova.jpg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#43425D",
    color: "white",
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    // direction: "column",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    marginRight: 10,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  grow: {
    flexGrow: 1,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
  drawerIcons: {
    width: "100%",
    maxWidth: 360,
    //backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    // width: "371px!important",
    // height: "602px!important",
  },
  user: {
    width: "371px!important",
    height: "602px!important",
  },
  statistics: {
    top: "168px!important",
    left: "335px!important",
    width: "370px!important",
    height: "439px!important",
  },
  pie: {
    top: "168px!important",
    left: "735px!important",
    width: "369px!important",
    height: "439px!important",
  },
  table: {
    top: 637,
    left: 336,
    width: 770,
    height: 422,
  },
  video: {
    top: 801,
    left: 1138,
    width: 371,
    height: 258,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth + 40,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 40,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
}));

export default function DashBoard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            //  className={clsx(classes.menuButton, open && classes.hide)}
          >
            <NotesIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchSharp />
            </div>
            <InputBase
              placeholder=" Search Transactions, invoices or help"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
          <Divider orientation="vertical" flexItem style={{ margin: 18 }} />
          <div>
            <Typography variant="h6" noWrap>
              John Doe
            </Typography>
          </div>
          <div>
            <IconButton>
              <ExpandMore />
            </IconButton>
          </div>
          <div>
            <Avatar alt="Remy Sharp" src={img} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <List
          subheader={<ListSubheader color="inherit">Impekable</ListSubheader>}
        >
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeOutlined />{" "}
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SignalCellularAltIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />{" "}
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ViewCarouselIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.appBarSpacer} />

        <div className={classes.container}>
          <Toolbar className={classes.toolbarSecondary}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              Overview
            </Typography>

            <Button variant="contained" color="primary" size="small">
              <IconButton color="inherit">
                <AddCircleOutline color="inherit" /> Add Fund
              </IconButton>
            </Button>
          </Toolbar>
          <div style={{ marginBottom: 20, textAlign: "end", marginRight: 60 }}>
            <Typography component="div">
              <Box fontSize="fontSize" m={1}></Box>
            </Typography>
          </div>
          <Grid container spacing={4}>
            <Grid container item xs={8} spacing={4}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <StatisticsChart />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <PieDonutChart />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <ReferrerTable />
              </Grid>
            </Grid>

            <Grid container item xs={4} spacing={4}>
              <Grid item xs={12}>
                <UsersCard />
              </Grid>
              <Grid item xs={12}>
                <VideoCard />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
      );
    </div>
  );
}
