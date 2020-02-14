import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type='text' name='profileName' placeholder='Github username' onChange={onChange} />
    <button>Submit</button>
  </form>
);

UsernameInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default UsernameInput;
