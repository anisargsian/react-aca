import React from 'react';
import PropTypes from 'prop-types';
import {headers} from '../data';

const HeaderRow = ({className, onClick}) => {
    return (
        <tr>
            {
                headers.map(header => <th className={className} onClick={onClick}>{header}</th>)
            }
        </tr>
    );
};

HeaderRow.PropTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
}

export default HeaderRow;