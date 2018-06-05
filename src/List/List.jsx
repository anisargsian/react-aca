import React, { Component } from 'react';
import schedule from '../schedule.js';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemIsClicked: [
                Array(schedule.length).fill(null)
            ]
        };
    }

    handleClick = (i) => {
        let itemIsClicked = this.state.itemIsClicked;
        if (i === 0) {
            itemIsClicked[i] = true;
        } else {
            if (itemIsClicked[i - 1] === true) {
                itemIsClicked[i] = true;
            } 
        }
        this.setState({itemIsClicked: itemIsClicked});
    };

    render() {
        const itemIsClicked = this.state.itemIsClicked;
        return (
            <ol>
                {
                    schedule.map((lsitItem, idx) => {
                        return <li
                                    key={lsitItem}
                                    onClick={() => this.handleClick(idx)} 
                                    className={`ListItem  + ${itemIsClicked[idx] === true ? 'clicked' : ''}`}
                                >
                                    {lsitItem}
                                </li>
                    })                    
                }
            </ol>
        );
    }
}

export default List;