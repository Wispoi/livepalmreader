import React from "react";
import { StepButton } from "../components/StepButton";
import IntroBg from '../assets/images/Intro_bgd@3x 1.png';
import GoogleLogo from '../assets/img/Google_logo.png';
import AppleLogo from '../assets/img/Apple_logo.png';
import FBLogo from '../assets/img/Facebook_logo.png';

export class Intro extends React.Component {

    render() {

        return (
           <div className="quiz-intro">
               <div className="quiz-intro__bg">
                    <img
                        src={IntroBg}
                        alt=""
                    />
               </div>
               <div className="quiz-intro__title h1">
                    Find peace of mind and know yourself better
               </div>
               <div className="quiz-intro__subtitle h3">
                    Feel refreshed, full of energy and ready to the challenge
               </div>        
               <StepButton step={this.props.step} errors={this.props.errors} values={this.props.values}/>      
                <div className="quiz-intro__socials">
                    <ul>
                        <li>
                            <a href="" target="_blank"> 
                                <img src={AppleLogo} alt="" />
                            </a>                           
                        </li>                        
                        <li>
                            <a href="" target="_blank"> 
                                <img src={GoogleLogo} alt="" />
                            </a>                           
                        </li>
                        <li>
                            <a href="" target="_blank"> 
                                <img src={FBLogo} alt="" />
                            </a>                           
                        </li>                                                
                    </ul>
               </div>                                         
           </div>
        );
    }   
};
