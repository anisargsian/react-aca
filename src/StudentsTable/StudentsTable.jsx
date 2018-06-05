import React, { Component } from 'react';
import Table from '../Table/Table';
import data from '../data';



const columnNames = Object.keys(data[0]);

class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedTimes: 0,
            usersData: data
        }
    }

    handleClick = (event) => {
        if (event.target.innerHTML === "Age") {
            let usersData = this.state.usersData.slice();
            let count = this.state.clickedTimes;
            count++;
            if (count === 1) {
                let sortedData = usersData.sort((a, b) => a.age - b.age);
                this.setState({clickedTimes: count, usersData: sortedData});
            }  else if (count === 2){
                let sortedData = usersData.sort((a, b) => b.age - a.age);
                this.setState({clickedTimes: count, usersData: sortedData});
            } else {
                count = 0;
                this.setState({clickedTimes: count, usersData: data});
            } 
        }
    }

    render() {
        const {usersData, clickedTimes} = this.state;
        return (
            <div>
                <Table onClick={this.handleClick} data={usersData} columnNames={columnNames} />
            </div>)
    };
} 

export default UsersTable;