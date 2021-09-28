import React from "react";
import { StepButton } from "../components/StepButton";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

export class Step1 extends React.Component {
    
    onKeyDown = (keyEvent) => {
        if (!(this.props.values.firstName) && (keyEvent.charCode || keyEvent.keyCode) === 13) {
          keyEvent.preventDefault();
        }
      }

    render() { 
          
        return (
          <div className="quiz-step">
            <div className="quiz-header">
                <div className="quiz-header__counter">
                    Step 1 of 8
                </div>
                <div className="quiz-header__title h2">
                    What’s your name?
                </div>                    
            </div>
            <div className="quiz-input">
                <Field
                    name="firstName"
                    as={TextField}
                    placeholder=""
                    type="text"
                    className="quiz-form__input"
                    autoFocus
                    autoComplete="off"
                    onKeyDown={this.onKeyDown}
                />   
            </div>  
            <StepButton step={this.props.step} errors={this.props.errors} values={this.props.values}/>                                                            
        </div>
        );
    }   
};
