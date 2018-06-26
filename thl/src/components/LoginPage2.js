//eslint-disable import/first
import React from 'react';
// import PropTypes from 'prop-types';
// import ('./LoginPage.css');
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

// LoginPage.propTypes = {
//   classname: PropTypes.string
// };

function LoginPage(props) {
  // const {} = props;

  return (
    <div>
      <FormControl>
        <InputLabel>email</InputLabel>
        <Input />
      </FormControl>
    </div>
  )
}



export default LoginPage;