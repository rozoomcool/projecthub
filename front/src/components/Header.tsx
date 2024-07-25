import { DraftsRounded, HomeRounded, InboxRounded, MenuRounded } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Box, Menu, Icon, MenuItem, List, ListItem, ListItemText, Drawer, ListItemButton, ListItemIcon, Divider, Avatar } from '@mui/material';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthService from '../service/AuthService';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const logout = (e: React.FormEvent) => {
    e.preventDefault();
    AuthService.logout();
    navigate("/");
  }

  const drawer = (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Sign In" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeRounded />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsRounded />
              </ListItemIcon>
              <ListItemText primary="StartUps" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsRounded />
              </ListItemIcon>
              <ListItemText primary="AboutUs" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsRounded />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );

  return (
    <AppBar color="inherit" elevation={0} position="sticky">
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Link to={'/'}>
              <Typography variant="h6" component="div" sx={{}}>
                StartupHub
              </Typography>
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2, mr: 2 }}>
              <Button sx={{ mx: 1 }} color="inherit" component={Link} to="/">Home</Button>
              <Button sx={{ mx: 1 }} color="inherit" component={Link} to="/">Startups</Button>
              <Button sx={{ mx: 1 }} color="inherit" component={Link} to="/about">About Us</Button>
              <Button sx={{ mx: 1 }} color="inherit">Contact</Button>
            </Box>
          </Box>
          {
            !AuthService.checkAuthStatusFast() ?
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button sx={{ ml: 1 }} component={Link} to="/login">Sign In</Button>
                <Button sx={{ ml: 1 }} component={Link} to="/register">Sign Up</Button>
              </Box> :
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {/* <Button sx={{ ml: 1 }} component={Link} to="/">Profile</Button> */}
                <Avatar></Avatar>
                <Button sx={{ ml: 1 }} onClick={logout}>LogOut</Button>
              </Box>
          }

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuRounded />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{ width: '100%' }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;