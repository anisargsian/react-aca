import React, { Component } from 'react';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props);
        const { schedule } = this.props;
        this.state = {
            itemIsClicked: []
        };
    }

    handleClick = (i) => {
        let { itemIsClicked } = this.state;
        if (i === 0) {
            itemIsClicked[i] = true;
        } else {
            if (itemIsClicked[i - 1]) {
                itemIsClicked[i] = true;
            } 
        }
        this.setState({ itemIsClicked });
    };

    render() {
        const { itemIsClicked } = this.state;
        const { schedule } = this.props;
        return (
            <ol>
                {
                    schedule.map((lsitItem, idx) => {
                        return <li
                                    key={lsitItem}
                                    onClick={() => this.handleClick(idx)} 
                                    className={`ListItem ${itemIsClicked[idx] ? 'clicked' : ''}`}
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