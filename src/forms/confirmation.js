import React from "react";
import { StepButton } from "../components/StepButton";
import Mail from '../assets/images/mail.png';
import Mail2x from '../assets/images/mail@2x.png';
export class Confirmation extends React.Component {
    
    render() {

        return (
           <div className="quiz-confirmation">
               <div className="quiz-confirmation__bg">
                <img src={Mail} srcSet={Mail2x + " 2x"} alt="" />
               </div>
               <div className="quiz-confirmation__title h2">
                    Confirm your email address to continue
               </div>
               <div className="quiz-confirmation__subtitle h4">
                    We’ve sended a  confirmation link on your email address. Please open you post application and follow the instructions
               </div>        
               <StepButton step={this.props.step} errors={this.props.errors} values={this.props.values}/>                                           
           </div>
        );
    }   
};
