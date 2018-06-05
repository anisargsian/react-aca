import React from 'react';
import {headers} from '../data';

const HeaderRow = ({className, onClick}) => {
    return (
        <tr>
            {
                headers.map(header => {
                    return <th className={className} onClick={onClick}>{header}</th>
                })
            }
        </tr>
    );
};

export default HeaderRow;