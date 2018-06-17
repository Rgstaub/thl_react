import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { menuItems } from '../content/menuItems.json';

const styles = {
  list: {
    width: 250,
  }
};

const NavDrawer = ({drawerState, closeDrawer, openDrawer}) => {

    const menuList = menuItems.map( item => {
      return (
        <ListItem><Button>{item.name}</Button></ListItem>
      )
    })


    return (
      <div>
        <SwipeableDrawer
          open={drawerState}
          onClose={closeDrawer}
          onOpen={openDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={closeDrawer}
            onKeyDown={closeDrawer}
          >
            <List>{menuList}</List>
            {drawerState}
          </div>
        </SwipeableDrawer>
      </div>
    );
}

NavDrawer.propTypes = {
  drawerState: PropTypes.boolean,
  closeDrawer: PropTypes.func,
  openDrawer: PropTypes.func,
};

export default withStyles(styles)(NavDrawer);