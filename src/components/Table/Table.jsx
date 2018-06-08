import React, { Component } from 'react';
import TableRow from '../TableRow';

import './Table.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: []
        }
    }

    componentDidMount() {
        const url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Yerevan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        fetch(url)
            .then(resp => resp.json())
            .then(resp => resp.query.results.channel.item.forecast)
            .then(forecast => this.setState({ forecast }));
    }

    render() {
        const { forecast }  = this.state;
        return (
            <table className='table'>
                 <thead>
                    <tr>
                        <th>Date</th>
                        <th>Day</th>
                        <th>Highest Temp</th>
                        <th>Lowest Temp</th>
                        <th>Description</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        forecast.map(dataRow => 
                            <TableRow 
                                id={dataRow.date} 
                                weatherData={ dataRow }
                             />)
                    }
                </tbody>
            </table>
        );
    }
}

export default Table;