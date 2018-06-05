import React, { Component } from 'react';

const TableRow = ({ columnNames, row, className }) => {
        return (
            <tr>
                {
                    columnNames.map(name => {
                    return <td className={className}>{`${row[name]}`}</td>
                    })
                }
            </tr>
        );
};


export default TableRow;