import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  dummy: { 
    float: 'right',
    color: '#FFF'
  }
};

const Dummy = (props) => {
  return (
    <div class className='dummy'>
      Hi
    </div>
  )
}

Dummy.propTypes = {
  // classname: PropTypes.string
};

const StyledDummy = withStyles(styles)(Dummy)

export default function CssInJs() {
  return (
    <StyledDummy/>
  )
}