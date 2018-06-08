import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({
    weatherData: { date, day, high, low, text }
}) => (
    <tr>
        <td>{date}</td>
        <td>{day}</td>
        <td>{high}</td>
        <td>{low}</td>
        <td>{text}</td>        
    </tr>
);

TableRow.propTypes = {
    weatherData: PropTypes.shape({
        date: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        highestTemp: PropTypes.string.isRequired,
        lowestTemp: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,        
    }).isRequired,
}

export default TableRow;