import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import AccountIcon from './AccountIcon';
//import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class TopBar extends React.Component {
  state = {
    drawerOpen: false
  }

  closeDrawer = () => {
    this.setState({drawerOpen: false});
  }

  openDrawer = () => {
    this.setState({drawerOpen: true});
  }

  render() {

    return (
      <div >
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton  color="inherit" aria-label="Menu">
              <MenuIcon 
                onClick={this.openDrawer}
              />
            </IconButton>
            <Typography variant="title" color="inherit">
              Ragnaros League
            </Typography>
            <AccountIcon />
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


export default withStyles(styles)(TopBar);