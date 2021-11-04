import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <div className="chat__header">
    {title}
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
