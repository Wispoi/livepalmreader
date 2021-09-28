import React from "react";
import { StepButton } from "../components/StepButton";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
export class Step6 extends React.Component {
    
    onKeyDown = (keyEvent) => {
        if (!(this.props.values.email) && (keyEvent.charCode || keyEvent.keyCode) === 13) {
          keyEvent.preventDefault();
        }
      }

    render() {
        return (
          <div className="quiz-step">
            <div className="quiz-header">
                <div className="quiz-header__counter">
                    Step 6 of 8
                </div>
                <div className="quiz-header__title h2">
                What’s your email?
                </div>                    
            </div>
            <div className="quiz-input">
                <Field
                    name="email"
                    as={TextField}
                    placeholder=""
                    type="email"
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
