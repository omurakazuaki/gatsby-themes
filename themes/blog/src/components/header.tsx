import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider } from '@material-ui/core';
import { Menu, Home, Face, GitHub } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      marginRight: 32
    },
    menu: {
      marginRight: 8
    },
    link: {
      marginLeft: 'auto'
    },
    list: {
      width: 250
    }
  })
);

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setMenuOpen(open);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Hidden only={['md', 'lg', 'xl']}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu onClick={toggleDrawer(true)}/>
              </IconButton>
            </Hidden>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">{siteTitle}</Link>
            </Typography>
            <Hidden  only={['xs', 'sm']}>
              <Button className={classes.menu} color="inherit">
                <Link to="/">Home</Link>
              </Button>
              <Button className={classes.menu} color="inherit">
                <Link to="/about">About</Link>
              </Button>
              <IconButton className={classes.link} color="inherit" aria-label="menu">
                <GitHub/>
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleDrawer(false)}>
        <List className={classes.list}>
          <Link to="/">
            <ListItem button key="HOME">
                <ListItemIcon><Home/></ListItemIcon>
                <ListItemText primary="HOME" />
            </ListItem>
          </Link>
          <Link to="/about">
            <ListItem button key="ABOUT">
              <ListItemIcon><Face/></ListItemIcon>
              <ListItemText primary="ABOUT" />
            </ListItem>
          </Link>
          <Divider />
          <ListItem button key="GITHUB">
            <ListItemIcon><GitHub/></ListItemIcon>
            <ListItemText primary="GITHUB" />
          </ListItem>
        </List>
      </Drawer>
    </div>);
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
