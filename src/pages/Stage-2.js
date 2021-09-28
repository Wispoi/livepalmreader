import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Step7, LeftHandPhoto, RightHandPhoto, Step8, Processing, Subscription, Profile } from '../forms/index';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const renderStep = (step, values, errors, touched, setFieldValue) => {
  switch (step) {  
    case 9:
      return <Step7 errors={errors} touched={touched} step={step} values={values} setFieldValue={setFieldValue}/>;  
    case 10:
      return <LeftHandPhoto errors={errors} touched={touched} step={step} values={values} setFieldValue={setFieldValue} />;  
    case 11:
      return <Step8 errors={errors} touched={touched} step={step} values={values}/>;         
    case 12:
      return <RightHandPhoto errors={errors} touched={touched} step={step} values={values} setFieldValue={setFieldValue} />;  
    case 13:
      return <Processing errors={errors} touched={touched} step={step} values={values} setFieldValue={setFieldValue} />;   
    case 14:
      return <Subscription errors={errors} touched={touched} step={step} values={values} setFieldValue={setFieldValue} />;  
    case 15:
      return <Profile errors={errors} touched={touched} step={step} values={values} setFieldValue={setFieldValue} />;                                    
    default:
      return <Step7 errors={errors} touched={touched} step={step} values={values}/>;
  }
};

export const Stage2 = () => {
  const [step, setStep] = useState(9);
  const classes = useStyles();
  const formData = {
    firstName: "Konstantinus",
    gender: "male",
    dayOfBirth: "20",  
    monthOfBirth: "9",   
    yearOfBirth: "1985", 
    hourOfBirth: "12",
    minuteOfBirth: "00",
    timeFormat: "am",
    maritalStatus: "Single",
    email: "test@gmail.com",
    photo: null,
  };
  const handleSubmit = () => {
    setStep(step => step + 1);
    window.scrollTo(0, 0)
  };

  const validate = values => {
    const errors = {};
    return errors;
  };
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ values, errors, touched, setFieldValue}) => (
        <div className="quiz-wrapper">
          <div className="quiz-wrapper__inner">
            <Form className="quiz-form">
                {renderStep(step, values, errors, touched, setFieldValue )}
            </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
