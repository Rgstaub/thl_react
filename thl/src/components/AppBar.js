import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import AccountIcon from './AccountIcon';


class TopBar extends React.Component {
  state = {
    drawerOpen: false,
    menuOpen: false
  }

  closeDrawer = () => {
    this.setState({drawerOpen: false});
  }
  openDrawer = () => {
    this.setState({drawerOpen: true});
  }
  openMenu = () => {
    this.setState({menuOpen: true})
  }
  closeMenu = () => {
    this.setState({menuOpen: false})
  }


  render() {

    return (
      <div >
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton aria-label="Menu">
              <MenuIcon 
                onClick={this.openDrawer}
              />
            </IconButton>
            <Typography variant="title" color="inherit">
              Ragnaros League
            </Typography>
            <AccountIcon 
              src={this.props.avatarSrc}
              menuOpen={this.state.menuOpen}
              closeMenu={this.closeMenu}
              openMenu={this.openMenu}
            />
          </Toolbar>
          <MenuDrawer
            drawerState={this.state.drawerOpen}
            closeDrawer={this.closeDrawer}
            openDrawer={this.openDrawer}
          />
        </AppBar>
      </div>
    );
  }
}


export default TopBar;