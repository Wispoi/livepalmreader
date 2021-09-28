import React, { Component, useState } from "react";
import { observer } from 'mobx-react';
import { Processing } from '../forms/index';

import HoroscopeBig from '../assets/img/horoscope_big2@5x-1.png';
import HoroscopeBig2x from '../assets/img/horoscope_big2@5x-1@2x.png';
import BiorithmBig from '../assets/img/biorithm_big2@5x-1.png';
import BiorithmBig2x from '../assets/img/biorithm_big2@5x-1@2x.png';

import HeaderInner from '../components/HeaderInner';
import Footer from '../components/Footer';
import Promo from '../components/Promo';

import '../assets/styles.css';


@observer export class Horoscope extends React.Component {
    constructor(props) {
        super(props);
        var { person } = this.props
        this.state = {
            isLoading: true,
            zodiac: person.zodiac,
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        var zodiacKey = this.state.zodiac
        var userId = '600987:ca598e14254d03030449387a1182c0a3';
        var apiKey = '6211bd446047bb614a7a7b490fcc80a5';
        var requestOptions = {
            method: 'POST',
            dataType: 'json',
            headers: {
                "authorization": "Basic " + btoa(userId + ":" + apiKey),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ title: 'Horoscope Results' })
        };
        fetch('https://json.astrologyapi.com/v1/sun_sign_prediction/daily/' + zodiacKey, requestOptions)
            .then(resp => resp.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        results: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoading: false,
                        error
                    });
                }
            )
    }
    render() {

        return (
            <div>
                { this.state && this.state.results &&
                <div>
                <HeaderInner pageTitle={'Horoscope'}></HeaderInner>

                <section className="hero">
                    <div className="section-wrapper">
                        <div className="hero-wrapper">
                            <div className="hero-results">
                                <div className="hero-results__image">
                                    <img src={HoroscopeBig} srcSet={HoroscopeBig2x + " 2x"} alt="" />
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
                                <div className="h2">{this.state.zodiac}</div>
                                <p>Know more about yourself with our experts conclusion</p>
                            </div>
                            <div className="results-block">
                                <ul>
                                    {
                                        Object.entries(this.state.results.prediction).map(([key, value]) => {
                                            return (
                                                <li key={key} className={key}>
                                                    <div className="h3">
                                                        {key.charAt(0).toUpperCase() + key.replace(/_/g, " ").slice(1)}
                                                        <span>{key.charAt(0).toUpperCase() + key.replace(/_/g, " ").slice(1)}</span>
                                                    </div>
                                                    <div className="progress-line">
                                                        <span style={{width: `${Math.floor(Math.random() * Math.floor(100))}%`}}/>
                                                    </div>
                                                    <p>
                                                        {value}
                                                    </p>
                                                </li>
                                            );
                                        })
                                    }
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
                </div>
                }
                {this.state.isLoading ? <Processing /> : console.log('DOM ready')}
            </div>

        );
    }
};
