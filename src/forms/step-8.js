import React from "react";
import { StepButton } from "../components/StepButton";
import Palms1 from '../assets/images/palms1.png';

import { Processing } from '../forms/index';

export class Step8 extends React.Component {
    constructor(){
        super();
        this.state={
            isLoading: false,
            images: '',
        }
        this.uploadFile = this.uploadFile.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    componentDidMount() {
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
    
        fetch(`http://content-admin.appyfurious.com/api/v5/analyzeHand`, {
            method: 'POST',
            headers: {'Content-Type' : 'multipart/form-data'},
            body: formData
        })
        .then((response) => {
            response.json();
            this.setState({isLoading: true})
        })
        .then((data) => {
            console.log('success')
            setTimeout(this.inputElement.click())
            this.setState({images: data.images, isLoading: false});
            this.props.updateImages(data.images);
            
        })
        .catch(error => {
            this.setState({error, isLoading: false})
            console.log('error')
        });
    }

    render() {

        return (
          <div className="quiz-step quiz-palms">
            <div className="quiz-header">
                <div className="quiz-header__counter">
                    Step 8 of 8
                </div>
                <div className="quiz-header__title h2">
                Take a photo of your right palm
                </div>                    
            </div>
            <div className="quiz-palms__image">
                <img src={Palms1} alt="" />
            </div>
            
            <div className="quiz-bottom"> 
                <button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="quiz-button main-btn quiz-button__hidden"
                    ref={input => this.inputElement = input}
                    >
                    Continue
                </button>                 
                    <StepButton step={this.props.step} errors={this.props.errors} values={this.props.values}/>   
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
