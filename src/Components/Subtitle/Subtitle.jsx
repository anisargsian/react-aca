import React from 'react';
import PropTypes from 'prop-types';
const Subtitle = ({children, className}) => (
    <h5 className={className}>
        {children}
    </h5>
);

Subtitle.PropTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

Subtitle.defaultProps = {
    className: '',
}

export default Subtitle;