//eslint-disable import/first
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import AccountMenu from './AccountMenu';
import ('./AccountIcon.css');

function AccountIcon(props) {
  const { menuOpen, src, closeMenu, openMenu } = props;

  return (
    <div >
      <Avatar
        src={src}
        alt="User avatar thumbnail"
        className="account-icon"
        onClick={openMenu}
      />
      <AccountMenu 
        menuOpen={menuOpen}
        closeMenu={closeMenu}
        openMenu={openMenu}
      />
    </div>
  )
}

AccountIcon.propTypes = {
  src: PropTypes.string,
  menuOpen: PropTypes.bool
};


export default AccountIcon;