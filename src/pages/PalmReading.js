import React, { Component, useState } from "react";
import { Processing } from '../forms/index';

import PalmistryBig from '../assets/img/palmistry_big2@5x-1.png';
import PalmistryBig2x from '../assets/img/palmistry_big2@5x-1@2x.png';
import Chart from '../assets/img/Chart.png';
import Chart2x from '../assets/img/Chart@2x.png';
import PalmLifeLine from '../assets/img/palm_life_line@3x-1.png';
import PalmLifeLine2x from '../assets/img/palm_life_line@3x-1@2x.png';
import PalmHeadLine from '../assets/img/palm_head_line@3x-1.png';
import PalmHeadLine2x from '../assets/img/palm_head_line@3x-1@2x.png';
import PalmHeartLine from '../assets/img/palm_heart_line@3x-1.png';
import PalmHeartLine2x from '../assets/img/palm_heart_line@3x-1@2x.png';
import PalmSpecialMarks from '../assets/img/palm_special_marks@3x-1.png';
import PalmSpecialMarks2x from '../assets/img/palm_special_marks@3x-1@2x.png';
import BiorithmBig from '../assets/img/biorithm_big2@5x-1.png';
import BiorithmBig2x from '../assets/img/biorithm_big2@5x-1@2x.png';

import HeaderInner from '../components/HeaderInner';
import Footer from '../components/Footer';
import Promo from '../components/Promo';

import PalmReadingData from '../data/palm.json'


import '../assets/styles.css';

export class PalmReading extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            PalmReadingData: PalmReadingData.plist.dict,
            randomNumber:  Math.floor(Math.random() * (+19 - +0)) + +0
        }
    }
    componentWillMount() {
        this.setState({ isLoading: true })
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 3000)
        console.log(this.state.PalmReadingData)
    }
    render() {

        return (
            <div>
                <HeaderInner pageTitle={'Palm Reading'}></HeaderInner>

                <section className="hero">
                    <div className="section-wrapper">
                        <div className="hero-wrapper">
                            <div className="hero-results">
                                <div className="hero-results__image">
                                    <img src={PalmistryBig} srcSet={PalmistryBig2x + " 2x"} alt="" />
                                </div>
                            </div>
                            <div className="hero-bg"></div>
                        </div>
                    </div>
                </section>

                <section className="results">
                    <div className="section-wrapper">
                        <div className="results-wrapper">
                            <div className="results-block">
                                <div className="h2">Astrology Conclusion</div>
                                <p>
                                    Remember that sweat is just fat crying, time to get on your feet and
                                    make some changes to your health life. Stay on a path that, although
                                    hard at first, will bring long lasting benefits for you future.
                                </p>
                            </div>
                            <div className="results-block">
                                <div className="h3">Value of life time</div>
                                <img src={Chart} srcSet={Chart2x + " 2x"} alt="" />
                                <p>
                                    {this.state.PalmReadingData.value_of_life_time[this.state.randomNumber]}
                                </p>
                            </div>
                            <div className="results-block">
                                <div className="h3">Life Line</div>
                                <img src={PalmLifeLine} srcSet={PalmLifeLine2x + " 2x"} alt="" />
                                <p>
                                    {this.state.PalmReadingData.palm_lines[0].array.string[this.state.randomNumber]}
                                </p>
                            </div>
                            <div className="results-block">
                                <div className="h3">Head Line</div>
                                <img src={PalmHeadLine} srcSet={PalmHeadLine2x + " 2x"} alt="" />
                                <p>
                                {this.state.PalmReadingData.palm_lines[1].array.string[this.state.randomNumber]}
                                </p>
                            </div>
                            <div className="results-block">
                                <div className="h3">Heart Line</div>
                                <img src={PalmHeartLine} srcSet={PalmHeartLine2x + " 2x"} alt="" />
                                <p>
                                    {this.state.PalmReadingData.palm_lines[2].array.string[this.state.randomNumber]}
                                </p>
                            </div>
                            <div className="results-block">
                                <div className="h3">Special Marks</div>
                                <img src={PalmSpecialMarks} srcSet={PalmSpecialMarks2x + " 2x"} alt="" />
                                <p>
                                    {this.state.PalmReadingData.palm_lines[3].array.string[this.state.randomNumber]}
                                </p>
                            </div>
                            <div className="results-block">
                                <div className="h2">Things that matter</div>
                                <ul>
                                    <li className="relationship">
                                        <div className="h3">
                                            Relationship
                                            <span>Relationship</span>
                                        </div>
                                        <div className="progress-line">
                                            <span className="w50" />
                                        </div>
                                        <p>
                                            {this.state.PalmReadingData.things_that_matter[0].array.string[this.state.randomNumber]}
                                        </p>
                                    </li>
                                    <li className="success">
                                        <div className="h3">
                                            Success
                                            <span>Success</span>
                                        </div>                                        
                                        <div className="progress-line">
                                            <span className="w80" />
                                        </div>
                                        <p>
                                            {this.state.PalmReadingData.things_that_matter[1].array.string[this.state.randomNumber]}
                                        </p>
                                    </li>
                                    <li className="career">
                                        <div className="h3">
                                            Career                                            
                                            <span>Career</span>
                                        </div>  
                                        <div className="progress-line">
                                            <span className="w60" />
                                        </div>
                                        <p>
                                            {this.state.PalmReadingData.things_that_matter[2].array.string[this.state.randomNumber]}
                                        </p>
                                    </li>
                                    <li className="health">
                                        <div className="h3">
                                            Health                                            
                                            <span>Health</span>
                                        </div>  
                                        <div className="progress-line">
                                            <span className="w80" />
                                        </div>
                                        <p>
                                            {this.state.PalmReadingData.things_that_matter[3].array.string[this.state.randomNumber]}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <Promo
                    page={'biorhythm'}
                    title={'Our life is a cycle'}
                    subtitle={'Know more about yourself with our experts conclusion'}
                    image={BiorithmBig}
                    image2x={BiorithmBig2x}
                >
                </Promo>

                <Footer></Footer>
                {this.state.isLoading ? <Processing /> : console.log('DOM ready')}
            </div>

        );
    }
};
