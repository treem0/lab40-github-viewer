import React from 'react';
import PropTypes from 'prop-types';

const GithubUserInfo = ({ login, name, followers, following }) => (
  <section>
    <span>{login}</span>
    <span>{name}</span>
    <span>{followers}</span>
    <span>{following}</span>
  </section>
);

GithubUserInfo.propTypes = {
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired
};

export default GithubUserInfo;
