import React, { Component } from 'react';
import TableRow from './TableRow';
import HeaderRow from './HeaderRow';
import './Table.css';

const Table = ({ data, columnNames, onClick }) => {
    return (
        <table className='table'>
            <HeaderRow className='header-row table' onClick={onClick}/>
            {
                data.map(dataRow => 
                    <TableRow className='table' columnNames={columnNames} row={dataRow} />)
            }
        </table>
    );
};

export default Table;