import React from "react";

export const StepButton = props => {
  const { step, values } = props;
  switch (step) {
    case 1:
      return (
        <>
          <button
            variant="contained"
            color="primary"
            type="submit"
            className="quiz-button main-btn"
          >
            Start the quiz
          </button>
        </>
      );
      case 2:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"quiz-button main-btn " + (!(values.firstName) ? 'quiz-button__disabled' : '')}
            >
              Continue
            </button>
          </>
        );      
      case 3:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"quiz-button main-btn " + (!(values.gender) ? 'quiz-button__disabled' : '')}
            >
              Continue
            </button>
          </>
        );  
      case 4:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"quiz-button main-btn " + (!(values.dayOfBirth) || !(values.monthOfBirth) || !(values.yearOfBirth)? 'quiz-button__disabled' : '')}
            >
              Continue
            </button>
          </>
        );  
      case 5:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"quiz-button main-btn " + (!(values.hourOfBirth) || !(values.minuteOfBirth) ? 'quiz-button__disabled' : '')}
            >
              Continue
            </button>
          </>
        ); 
      case 6:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"quiz-button main-btn " + (!(values.maritalStatus) ? 'quiz-button__disabled' : '')}
            >
              Continue
            </button>
          </>
        );  
      case 7:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className={"quiz-button main-btn " + (!(values.email) ? 'quiz-button__disabled' : '')}
            >
              Continue
            </button>
          </>
        ); 
      case 8:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="quiz-button main-btn quiz-button__hidden"
            >
              Continue
            </button>
          </>
        );       
      case 9:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="quiz-button main-btn"
            >
              Take a photo
            </button>
          </>
        );          
      case 10:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="quiz-button main-btn"
            >
              Take a photo
            </button>
          </>
        );  
      case 11:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="quiz-button main-btn"
            >
              Take a photo
            </button>
          </>
        );    
      case 13:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="quiz-button main-btn quiz-button__hidden"
            >
              Continue
            </button>
          </>
        );                
      case 15:
        return (
          <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="quiz-button main-btn"
            >
              Finish sign up
            </button>
          </>
        );                                                               
    default:
      return (
        <>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="quiz-button main-btn"
            >
              Take a photo
            </button>
        </>
      );
  }
};
