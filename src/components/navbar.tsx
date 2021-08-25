import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import './navbar.css';
export class Navbar extends React.Component {
  render() {
    return <React.Fragment>
    <StylesProvider injectFirst>
      <AppBar position="fixed" className = "navbar-root">
        <Toolbar>
          <Button className = 'navbar-button nav-first'>Blog</Button>
          <Button className = 'navbar-button nav-last'>About</Button>
        </Toolbar>
      </AppBar>
    </StylesProvider>
    </React.Fragment>;
  }
}
