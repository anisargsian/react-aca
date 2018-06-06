import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ columnNames, row, className }) => {
        return (
            <tr>
                {
                    columnNames.map(name => <td className={className}>{`${row[name]}`}</td>)
                }
            </tr>
        );
};

TableRow.propTypes = {
    columnNames: PropTypes.string.isRequired,
    row: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
}

export default TableRow;