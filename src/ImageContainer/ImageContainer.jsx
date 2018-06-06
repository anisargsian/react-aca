import React, { Component } from 'react';
import bike from '../Images/bike.jpg';
import umbrella from '../Images/umbrella.jpg';
import dreamcatcher from '../Images/dreamcatcher.jpg';
import Button from '../Button/Button';
import './imageContainer.css';

class ImageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picIndex: 0,
        }
    }

    componentDidMount() {
        this.sliderPic = setInterval(
            () => this.handleClickNext(),
            3000
        );
    } 

    handleStopAutoPLay = () => {
        clearInterval(this.sliderPic);
    };

    handleSetAutoPLay = () => {
        this.sliderPic = setInterval(
            () => this.handleClickNext(),
            3000
        );
    };

    handleClickNext = () => {
        let picIndex = this.state.picIndex;
        picIndex++;
        if (picIndex > 2) {
            picIndex = 0;
        }
        this.setState({picIndex: picIndex});
    };

    handleClickPrev = () => {       
        let picIndex = this.state.picIndex;
        picIndex--;
        if (picIndex < 0) {
            picIndex = 2;
        }
        this.setState({picIndex: picIndex});
    }

    render() {
        const imageArray = [bike, umbrella, dreamcatcher];
        const picIndex = this.state.picIndex;
        return (
            <div>
                <div className='inline'>
                    <Button 
                        onClick= {this.handleClickPrev} 
                        onMouseEnter={this.handleStopAutoPLay}
                        onMouseLeave={this.handleSetAutoPLay} 
                    >
                        Prev
                    </Button>
                </div>
                <div className='inline'>
                    <img width='900px' height='600px' src={imageArray[picIndex]} />
                </div>
                <div className='inline'>
                    <Button 
                        onClick= {this.handleClickNext} 
                        onMouseEnter={this.handleStopAutoPLay}
                        onMouseLeave={this.handleSetAutoPLay} 
                    >
                        Next
                    </Button>                    
                </div>
            </div>
        );
    }
}

export default ImageContainer;
