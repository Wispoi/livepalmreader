import React from "react";
import { StepButton } from "../components/StepButton";
import { Field } from "formik";
export class Step5 extends React.Component {
    
    onKeyDown = (keyEvent) => {
        if (!(this.props.values.idealWeight) && (keyEvent.charCode || keyEvent.keyCode) === 13) {
          keyEvent.preventDefault();
        }
      }

    render() {
          
        return (
          <div className="quiz-step">
            <div className="quiz-header">
                <div className="quiz-header__counter">
                    Step 5 of 8
                </div>
                <div className="quiz-header__title h2">
                  What’s your marital status?
                </div>                    
            </div>
            <div className="quiz-input">
              <div className="quiz-input__marital">
                <Field
                  name="maritalStatus"
                  render={({ field }) => (
                      <>
                      <label className="tutorial-quiz__label tutorial-quiz__label--link">
                          <input
                          {...field}
                          id="free"
                          value="free"
                          checked={field.value === 'free'}
                          name="maritalStatus"
                          type="radio"
                          onClick={this.handleClick}
                          />
                          <span className="tutorial-quiz__text">
                            Free
                          </span>                     
                      </label>

                      <label className="tutorial-quiz__label tutorial-quiz__label--link">
                          <input
                          {...field}
                          id="soulmate"
                          value="soulmate"
                          name="maritalStatus"
                          checked={field.value === 'soulmate'}
                          type="radio"
                          onClick={this.handleClick}
                          
                          />
                          <span className="tutorial-quiz__text">
                            Soulmate
                          </span>                              
                      </label>

                      <label className="tutorial-quiz__label tutorial-quiz__label--link">
                          <input
                          {...field}
                          id="marriedree"
                          value="married"
                          checked={field.value === 'married'}
                          name="maritalStatus"
                          type="radio"
                          onClick={this.handleClick}
                          />
                          <span className="tutorial-quiz__text">
                            Married
                          </span>                     
                      </label>

                      <label className="tutorial-quiz__label tutorial-quiz__label--link">
                          <input
                          {...field}
                          id="difficult"
                          value="difficult"
                          name="maritalStatus"
                          checked={field.value === 'difficult'}
                          type="radio"
                          onClick={this.handleClick}
                          
                          />
                          <span className="tutorial-quiz__text">
                            Difficult
                          </span>                              
                      </label>                      
                      </>
                  )}
                />         
              </div>
            </div>  
            <StepButton step={this.props.step} errors={this.props.errors} values={this.props.values}/>                                                            
        </div>
        );
    }   
};
