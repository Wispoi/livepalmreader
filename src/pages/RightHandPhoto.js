import React from "react";
import Webcam from "react-webcam";
import { Link } from 'react-router-dom';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "environment"
};

export const RightHandPhoto = formikProps => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );
    return (
        <div className="quiz-step quiz-capture">
            <div className="quiz-header">
                <div className="quiz-header__title h5">
                    We do not collect your biometric data
                </div>
            </div>
            <div className="quiz-capture__image right-hand">
                <Webcam
                    audio={false}
                    height={720}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={1280}
                    videoConstraints={videoConstraints}
                />

            </div>
            <Link onClick={capture} to={{
                pathname: '/palm-reading',
            }}
                className="quiz-capture__button">
                <span>Take a photo</span>
            </Link>
        </div>
    );
};
