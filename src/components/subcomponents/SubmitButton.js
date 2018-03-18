import React from 'react';

const SubmitButton = (props) => {

  const preventDefault = (e) => {
    e.preventDefault();
    props.submit(e);
  }

  // render() {
    return (
      <button className='btn btn-default' onClick={ (e) => { preventDefault(e) }} disabled={!props.ready}>Register</button>
    )
  //}
}
   
export default SubmitButton;

