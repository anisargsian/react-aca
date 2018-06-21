import React from 'react';
import PropTypes from 'prop-types';
import './Skills.css';

const Skills = ({ children }) => (
    <div className="skills">
        {children}
    </div>
);

Skills.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Skills;