//eslint-disable import/first
import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { accountMenu } from '../content/menuItems.json';
// import ('./AccountMenu.css');


function AccountMenu(props) {
  const { menuOpen, closeMenu, loggedIn, handleLogout } = props;
  const anchorEl = document.querySelector('.account-icon');

  const menuList = accountMenu.map( (item, i) => {
    return(
      <MenuItem key={item.name.toString()}>{item.name}</MenuItem>
    )
  })

  const clickLogout = () => {
    handleLogout();
    closeMenu()
  }
    
  const loginLogout = () => {
    if (loggedIn) {
      return (
        <MenuItem onClick={clickLogout} key={'logout'}>Log Out</MenuItem>
      )
    } else {
      return (
        <MenuItem key={'login'}>Log In</MenuItem>
      )
    }
  }


  return (
    <div>
      <Menu 
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={closeMenu}
      >
      {menuList}
      {loginLogout()}
      </Menu>
    </div>  
  )
}

AccountMenu.propTypes = {
  open: PropTypes.bool
};

export default AccountMenu;