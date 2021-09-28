import React, { Component, useState } from "react";
import { Processing } from '../forms/index';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { Circle } from 'rc-progress';
import { Redirect } from 'react-router';

import Aquarius from '../assets/img/Aquarius.png';
import Aquarius2x from '../assets/img/Aquarius@2x.png';
import Aries from '../assets/img/Aries.png';
import Aries2x from '../assets/img/Aries@2x.png';
import Cancer from '../assets/img/Cancer.png';
import Cancer2x from '../assets/img/Cancer@2x.png';
import Capricorn from '../assets/img/Capricorn.png';
import Capricorn2x from '../assets/img/Capricorn@2x.png';
import Gemini from '../assets/img/Gemini.png';
import Gemini2x from '../assets/img/Gemini@2x.png';
import Leo from '../assets/img/Leo.png';
import Leo2x from '../assets/img/Leo@2x.png';
import Libra from '../assets/img/Libra.png';
import Libra2x from '../assets/img/Libra@2x.png';
import Pisces from '../assets/img/Pisces.png';
import Pisces2x from '../assets/img/Pisces@2x.png';
import Sagittarius from '../assets/img/Sagittarius.png';
import Sagittarius2x from '../assets/img/Sagittarius@2x.png';
import Scorpio from '../assets/img/Scorpio.png';
import Scorpio2x from '../assets/img/Scorpio@2x.png';
import Taurus from '../assets/img/Taurus.png';
import Taurus2x from '../assets/img/Taurus@2x.png';
import Virgo from '../assets/img/Virgo.png';
import Virgo2x from '../assets/img/Virgo@2x.png';

import Ellipse from '../assets/img/ellipse.png';
import Chart2 from '../assets/img/Chart2.png';
import BackArrow from '../assets/img/arrow-down.png';
import BiorithmBig from '../assets/img/biorithm_big2@5x-1.png';
import BiorithmBig2x from '../assets/img/biorithm_big2@5x-1@2x.png';
import ArrowBack from '../assets/img/arrow_back@3x.png';
import ArrowBack2x from '../assets/img/arrow_back@3x@2x.png';
import HoroscopeBig from '../assets/img/horoscope_big2@5x-1.png';
import HoroscopeBig2x from '../assets/img/horoscope_big2@5x-1@2x.png';

import HeaderInner from '../components/HeaderInner';
import Footer from '../components/Footer';
import Promo from '../components/Promo';

import CompatibilityData from '../data/compatibility.json'

import '../assets/styles.css';

export class Compatibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            firstZodiac: this.props.location.firstZodiac,
            secondZodiac: this.props.location.secondZodiac,
            CompatibilityData: CompatibilityData
        }
        this.changeShow = this.changeShow.bind(this);
    }
    componentWillMount() {

    }
    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.state.firstZodiac) {
            this.timer = setInterval(() => {
                this.setState({ isLoading: false })
                clearInterval(this.timer);
            }, 3000,
            );
        } else {
            this.setState({ redirect: true });
        }

    }

    changeShow(event) {
        $(event.target).parent().toggleClass('active')
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/compatibility-select" />;
        }

        const obj = { Aquarius: Aquarius, Aries: Aries, Cancer: Cancer, Capricorn: Capricorn, Gemini: Gemini, Leo: Leo, Libra: Libra, Pisces: Pisces, Sagittarius: Sagittarius, Scorpio: Scorpio, Taurus: Taurus, Virgo: Virgo };
        var firstZodiacs = this.props.location.secondZodiacImage;
        return (
            <div>
                {this.state && this.state.firstZodiac &&
                    <div>
                        <HeaderInner pageTitle={'Compatibility'}></HeaderInner>
                        <section className="hero">
                            <div className="section-wrapper">
                                <div className="hero-wrapper">
                                    <div className="hero-results">
                                        <div className="hero-compatibility">
                                            <div className="hero-compatibility__col">
                                                <div className="hero-compatibility__title">{this.state.firstZodiac}</div>
                                                <div className="hero-compatibility__image">
                                                    <img src={'./assets/img/'+this.props.location.firstZodiacImage+'@2x.png'} alt="" />
                                                </div>
                                            </div>
                                            <div className="hero-compatibility__col">
                                                <div className="compatibility-result">
                                                    <div className="compatibility-block__svg">
                                                        <Circle className="first-circle" strokeColor="#8D8BFF" percent={this.state.CompatibilityData[this.state.firstZodiac][this.state.secondZodiac].Summary.Value} strokeWidth="4" />
                                                        <div className="percent">
                                                            {this.state.CompatibilityData[this.state.firstZodiac][this.state.secondZodiac].Summary.Value}%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hero-compatibility__col">
                                                <div className="hero-compatibility__title">{this.state.secondZodiac}</div>
                                                <div className="hero-compatibility__image">
                                                    <img src={'./assets/img/'+this.props.location.secondZodiacImage+'@2x.png'} alt="" />
                                                </div>
                                            </div>
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
                                        <div className="h2">Compatibility</div>
                                        <p>Know more about yourself with our experts conclusion</p>
                                    </div>
                                    {
                                        Object.entries(this.state.CompatibilityData[this.state.firstZodiac][this.state.secondZodiac]).map(([key, value]) => {
                                            return (
                                                <div key={key} className={"compatibility-block " + key.toLowerCase()}>
                                                    <div className="compatibility-block__header">
                                                        <div className="compatibility-block__svg">
                                                            <Circle className="first-circle" percent={value.Value} strokeWidth="4" />
                                                            <span>{value.Value}%</span>
                                                        </div>
                                                        <div className="h3">
                                                            {key}
                                                            <span>{key}</span>
                                                        </div>
                                                    </div>
                                                    <div className="compatibility-block__content">
                                                        <p>
                                                            {value.Description}
                                                        </p>
                                                        <button className="compatibility-block__button" onClick={this.changeShow}>
                                                            Read more <img src={BackArrow} alt="" />
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </section>

                        <Promo
                            page={'horoscope'}
                            title={'Our life is a cycle'}
                            subtitle={'Know more about yourself with our experts conclusion'}
                            image={HoroscopeBig}
                            image2x={HoroscopeBig2x}
                        >
                        </Promo>

                        <Footer></Footer>
                    </div >
                }
                {this.state.isLoading ? <Processing /> : console.log('DOM ready')}

            </div>
        );
    }
};
