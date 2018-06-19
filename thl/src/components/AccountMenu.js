//eslint-disable import/first
import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { accountMenu } from '../content/menuItems.json';
// import ('./AccountMenu.css');


function AccountMenu(props) {
  const { menuOpen, closeMenu } = props;
  const anchorEl = document.querySelector('.account-icon');

  const menuList = accountMenu.map( item => {
    return (
      <MenuItem key={item.name.toString()}>{item.name}</MenuItem>
    )
  })

  return (
    <div>
      <Menu 
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={closeMenu}
      >
      {menuList}
      </Menu>
    </div>
  )
}

AccountMenu.propTypes = {
  open: PropTypes.bool
};

export default AccountMenu;