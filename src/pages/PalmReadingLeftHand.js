import React from "react";
import Palms from '../assets/images/palms.png';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import { Processing } from '../forms/index';

export class PalmReadingLeftHand extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            images: '',
            imageLoaded: false,
        }
        this.uploadFile = this.uploadFile.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    componentDidMount() {
        console.log(this.props.step)
    }
    onKeyDown = (keyEvent) => {
        if (!(this.props.values.idealWeight) && (keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }

    uploadFile(event) {
        var formData = new FormData();
        formData.append("file", event.target.files[0]);
        formData.append('name', 'some value user types');
        formData.append('description', 'some value user types');
        console.log(event.target.files[0]);
        this.setState({ isLoading: true })
        fetch(`http://content-admin.appyfurious.com/api/v5/analyzeHand`, {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData
        })
            .then((response) => {
                response.json();
            })
            .then((data) => {
                this.inputElement.click();
                this.setState({ images: data.images, isLoading: false, imageLoaded: true });
                this.props.updateImages(data.images);
            })
            .catch(error => {
                this.setState({ error, isLoading: false, imageLoaded: true });
            });
    }

    render() {
        if (this.state.imageLoaded) {
            return <Redirect push to="/right-hand" />;
        }
        return (
            <div className="quiz-step quiz-palms">
                <div className="quiz-header">
                    <div className="quiz-header__title h2">
                        Take a photo of your left palm
                    </div>
                </div>
                <div className="quiz-palms__image">
                    <img src={Palms} alt="" />
                </div>

                <div className="quiz-bottom">
                    <Link to={{
                        pathname: '/left-hand-photo',
                    }}
                        className="quiz-button">
                        <span>Take a photo</span>
                    </Link>
                    <div className="form-group">
                        <input id="photo" name="photo" type="file" className="form-control" accept="image/*"
                            onChange={this.uploadFile.bind(this)}
                        />
                        <div className="quiz-gallery">
                            Choose from gallery
                        </div>
                    </div>
                </div>
                {this.state.isLoading ? <Processing /> : console.log('DOM ready')}
            </div>
        );
    }
};
