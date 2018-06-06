import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, onMouseEnter, onMouseLeave, children }) => {
    return (
        <button onClick={onClick} 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
        >
            { children }
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.onMouseLeave,
    children: PropTypes.node.isRequired,
}

export default Button;