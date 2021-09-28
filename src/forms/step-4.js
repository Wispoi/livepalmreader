import React from "react";
import { StepButton } from "../components/StepButton";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

export class Step4 extends React.Component {

  constructor(){
    super();
    this.state={
      HourOfBirth:'',
      MonthOfBirth: '',
    }
    this.handleChangeHourOfBirth = this.handleChangeHourOfBirth.bind(this);
    this.handleChangeMinuteOfBirth = this.handleChangeMinuteOfBirth.bind(this);
  }

  handleChangeHourOfBirth(e){
    if(e.target.value >= 0 && e.target.value <= 12) {
      this.setState({HourOfBirth: e.target.value});
      this.props.values.hourOfBirth = e.target.value;
    }
  }
  handleChangeMinuteOfBirth(e){
    if(e.target.value >= 0 && e.target.value <= 59) {
    this.setState({MinuteOfBirth: e.target.value});
    this.props.values.minuteOfBirth = e.target.value;
    }
  }
  onKeyDown = (keyEvent) => {
    if (!(this.props.values.hourOfBirth) && !(this.props.values.minuteOfBirth) && (keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

    render() {
        return (
          <div className="quiz-step">
            <div className="quiz-header">
                <div className="quiz-header__counter">
                    Step 4 of 8
                </div>
                <div className="quiz-header__title h2">
                  What’s your time of birth?
                </div>                    
            </div>
            <div className="quiz-input">
              <div className="quiz-input__date quiz-input__time">
                <Field
                    name="hourOfBirth"
                    as={TextField}
                    type="number"
                    className="quiz-form__input"
                    placeholder="12"
                    value={this.state.HourOfBirth} 
                    onChange={this.handleChangeHourOfBirth}
                    onKeyDown={this.onKeyDown}
                    autoComplete="off"
                />   
                <Field
                    name="minuteOfBirth"
                    as={TextField}
                    type="number"
                    className="quiz-form__input"
                    placeholder="0"
                    autoComplete="off"
                    value={this.state.MinuteOfBirth} 
                    onChange={this.handleChangeMinuteOfBirth}
                    onKeyDown={this.onKeyDown}
                    lastinput="true"
                />   
                <div className="quiz-input__date-radio">

            <Field
                    name="timeFormat"
                    render={({ field }) => (
                        <>
                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="am"
                            value="am"
                            checked={field.value === 'am'}
                            name="timeFormat"
                            type="radio"
                            onClick={this.handleClick}
                            />
                            <span className="tutorial-quiz__text">AM</span>                     
                        </label>

                        <label className="tutorial-quiz__label tutorial-quiz__label--link">
                            <input
                            {...field}
                            id="pm"
                            value="pm"
                            name="timeFormat"
                            checked={field.value === 'pm'}
                            type="radio"
                            />
                            <span className="tutorial-quiz__text">PM</span>                              
                        </label>
                        </>
                    )}
                    />  
                                      
                </div>                                
              </div>  
            </div>
            <StepButton step={this.props.step} errors={this.props.errors} values={this.props.values}/>                                                            
        </div>
        );
    }   
};
