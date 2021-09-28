import React from "react";

import Lottie from 'react-lottie';
import * as animationData from '../data/LPR_loader.json';
import processingBg from '../assets/images/tutorial_processing_bgd@3x.png';

export class Processing extends React.Component {
    
    onKeyDown = (keyEvent) => {
        if (!(this.props.values.idealWeight) && (keyEvent.charCode || keyEvent.keyCode) === 13) {
          keyEvent.preventDefault();
        }
      }
    constructor(props) {
        super(props);
        this.state = {
            isStopped: false, 
            isPaused: false,
            percent: 0,
            thousand: Math.floor(Math.random() * 50) + 50,
            hundred: Math.floor(Math.random() * 899) + 100,
        };
        this.increase = this.increase.bind(this);
    }
    componentDidMount() {
        this.increase();
    }     
    increase() {
        const { percent } = this.state;
        const newPercent = percent + Math.floor(Math.random() * 3);
        if (newPercent >= 100) {
            setTimeout(this.inputElement.click())
            return;
        }
        this.setState({ percent: newPercent });
        this.tm = setTimeout(this.increase, 50);
    }   
    render() {
        const defaultOptions = {
            loop: false,
            autoplay: true, 
            animationData: animationData.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };      
        const { percent } = this.state;
        return (
           <div className="quiz-processing">   
                <div className="quiz-processing__wrapper">
                    <img
                        src={processingBg}
                        alt=""
                    />
                    <Lottie options={defaultOptions}
                        height={200}
                        width={200}
                        isStopped={this.state.isStopped}
                        isPaused={this.state.isPaused}
                    /> 
                </div>                 
                <div className="quiz-processing__value">
                    <span className="tutorial-analyze__value">{percent}</span>
                    <span>%</span>
                </div>  
                <button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="quiz-button main-btn quiz-button__hidden"
                    ref={input => this.inputElement = input}
                    >
                    Continue
                </button>              
           </div>
        );
    }   
};
