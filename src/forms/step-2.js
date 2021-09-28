import React from "react";
import { StepButton } from "../components/StepButton";
import { Field } from "formik";
import Male from '../assets/images/gender_male@3x.png';
import Male2x from '../assets/images/gender_male@2x.png';
import Female from '../assets/images/gender_female@3x.png';
import Female2x from '../assets/images/gender_female@2x.png';

export class Step2 extends React.Component {
    
    render() {     
          
        return (
          <div className="quiz-step">
            <div className="quiz-header">
                <div className="quiz-header__counter">
                    Step 2 of 8
                </div>
                <div className="quiz-header__title h2">
                  What’s your gender?
                </div>                    
            </div>
            <div className="quiz-input">
              <div className="quiz-input__gender">
                <Field
                  name="gender"
                  render={({ field }) => (
                      <>
                      <label className="tutorial-quiz__label tutorial-quiz__label--link">
                          <input
                          {...field}
                          id="male"
                          value="male"
                          checked={field.value === 'male'}
                          name="gender"
                          type="radio"
                          onClick={this.handleClick}
                          />
                          <span className="tutorial-quiz__text">
                            <img src={Male} srcSet={Male2x + " 2x"} alt="" />
                            male
                          </span>                     
                      </label>

                      <label className="tutorial-quiz__label tutorial-quiz__label--link">
                          <input
                          {...field}
                          id="female"
                          value="female"
                          name="gender"
                          checked={field.value === 'female'}
                          type="radio"
                          onClick={this.handleClick}
                          
                          />
                          <span className="tutorial-quiz__text">
                            <img src={Female} srcSet={Female2x + " 2x"} alt="" />
                            female
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
