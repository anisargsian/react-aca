import React from 'react';
import PropTypes from 'prop-types';
import './Price.css';

const Price = ({text}) => (
  <div className="price">
    {text}
  </div>
);

Price.propTypes = {
  text: PropTypes.string.isRequired
}

export default Price;