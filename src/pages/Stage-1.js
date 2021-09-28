import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Intro, Step1, Step2, Step3, Step4, Step5, Step6, Confirmation } from '../forms/index';
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
    case 1:
      return <Intro errors={errors} touched={touched} step={step} values={values}/>;
    case 2:
      return <Step1 errors={errors} touched={touched} step={step} values={values}/>;
    case 3:
      return <Step2 errors={errors} touched={touched} step={step} values={values} />;
    case 4:
      return <Step3 errors={errors} touched={touched} step={step} values={values}/>;    
    case 5:
      return <Step4 errors={errors} touched={touched} step={step} values={values}/>;     
    case 6:
      return <Step5 errors={errors} touched={touched} step={step} values={values}/>;
    case 7:
      return <Step6 errors={errors} touched={touched} step={step} values={values}/>;      
    case 8:
      return <Confirmation errors={errors} touched={touched} step={step} values={values}/>;                                    
    default:
      return <Intro errors={errors} touched={touched} step={step} values={values}/>;
  }
};

export const Stage1 = () => {
  const [step, setStep] = useState(1);
  const classes = useStyles();
  const formData = {
    firstName: "",
    gender: "",
    dayOfBirth: "",  
    monthOfBirth: "",   
    yearOfBirth: "", 
    hourOfBirth: "",
    minuteOfBirth: "",
    timeFormat: "pm",
    maritalStatus: "",
    email: "",
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
