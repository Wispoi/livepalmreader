import React, { Component, useState } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Processing } from '../forms/index';

import PalmistryBig from '../assets/img/palmistry_big2@5x-1.png';
import PalmistryBig2x from '../assets/img/palmistry_big2@5x-1@2x.png';
import HoroscopeBig from '../assets/img/horoscope_big2@5x-1.png';
import HoroscopeBig2x from '../assets/img/horoscope_big2@5x-1@2x.png';
import BiorithmBig from '../assets/img/biorithm_big2@5x-1.png';
import BiorithmBig2x from '../assets/img/biorithm_big2@5x-1@2x.png';
import CompatibilityBig from '../assets/img/Compatibility_big2@5x-1.png';
import CompatibilityBig2x from '../assets/img/Compatibility_big2@5x-1@2x.png';
import Palm from '../assets/img/palm@3x-1.png';
import Palm2x from '../assets/img/palm@3x-1@2x.png';
import Aquarius from '../assets/img/aquarius@3x.png';
import Aquarius2x from '../assets/img/aquarius@3x@2x.png';
import Compatibility from '../assets/img/compatibility@3x.png';
import Compatibility2x from '../assets/img/compatibility@3x@2x.png';
import Bio from '../assets/img/bio@3x.png';
import Bio2x from '../assets/img/bio@3x@2x.png';
import Meditation from '../assets/img/meditation@3x-1.png';
import Meditation2x from '../assets/img/meditation@3x-1@2x.png';

import Header from '../components/Header';
import Footer from '../components/Footer'

import '../assets/styles.css';

export class HomePage extends React.Component {
    constructor(){
        super();
        this.state={
            isLoading: true
        }
    }
    componentWillMount() {
        
    }       
    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({isLoading: false})
    }      
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            loop: true,
            fade: true
        };
        return (
            <div>
            <Header></Header>
            <section className="hero">
                <div className="hero-wrapper">

                <div className="hero-slider">
                    <Slider {...settings}>
                        <div className="hero-item">
                            <div className="hero-item__wrapper section-wrapper">
                                <div className="hero-content">
                                <div className="hero-subtitle">Palm Reading</div>
                                <div className="hero-title">Our palm reading experts</div>
                                <Link to="/left-hand" className="hero-button">
                                    <span>Get Answers</span>
                                </Link>
                                </div>
                                <div className="hero-image">
                                    <img src={PalmistryBig} srcSet={PalmistryBig2x + " 2x"} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="hero-item">
                            <div className="hero-item__wrapper section-wrapper">
                                <div className="hero-content">
                                <div className="hero-subtitle">Horoscope</div>
                                <div className="hero-title">Know more about yourself</div>
                                <Link to="/horoscope" className="hero-button">
                                    <span>Get Answers</span>
                                </Link>
                                </div>
                                <div className="hero-image">
                                    <img src={HoroscopeBig} srcSet={HoroscopeBig2x + " 2x"} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="hero-item">
                            <div className="hero-item__wrapper section-wrapper">
                                <div className="hero-content">
                                <div className="hero-subtitle">Biorhythm</div>
                                <div className="hero-title">Our life is a cycle</div>
                                <Link to="/biorhythm" className="hero-button">
                                    <span>Get Answers</span>
                                </Link>                                
                                </div>
                                <div className="hero-image">
                                    <img src={BiorithmBig} srcSet={BiorithmBig2x + " 2x"} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="hero-item">
                            <div className="hero-item__wrapper section-wrapper">
                                <div className="hero-content ">
                                <div className="hero-subtitle">Compatibility</div>
                                <div className="hero-title">Find your perfect match</div>
                                <Link to="/compatibility-select" className="hero-button">
                                    <span>Get Answers</span>
                                </Link>
                                </div>
                                <div className="hero-image">
                                    <img src={CompatibilityBig} srcSet={CompatibilityBig2x + " 2x"} alt=""/>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="hero-bg"></div>
                </div>
            </section>
            <section className="services">
                <div className="section-wrapper">
                <div className="services-wrapper">
                    <Link to="/left-hand" className="services-item">
                        <div className="services-icon">
                            <img src={Palm} srcSet={Palm2x + " 2x"} alt=""/>
                        </div>
                        <div className="services-title">Palm Reading</div>
                        <div className="services-description">
                            Reading the lines of your palm
                        </div>
                    </Link> 
                    <Link to="/horoscope" className="services-item">
                        <div className="services-icon">
                            <img src={Aquarius} srcSet={Aquarius2x + " 2x"} alt=""/>
                        </div>
                        <div className="services-title">Horoscope</div>
                        <div className="services-description">
                            Reading the lines of your palm
                        </div>
                    </Link>
                    <Link to="/biorhythm" className="services-item">
                        <div className="services-icon">
                            <img src={Bio} srcSet={Bio2x + " 2x"} alt=""/>
                        </div>
                        <div className="services-title">Biorhythm</div>
                        <div className="services-description">
                            Reading the lines of your palm
                        </div>
                    </Link>
                    <Link to="/compatibility-select" className="services-item">
                        <div className="services-icon">
                            <img src={Compatibility} srcSet={Compatibility2x + " 2x"} alt=""/>
                        </div>
                        <div className="services-title">Compatibility</div>
                        <div className="services-description">
                            Reading the lines of your palm
                        </div>
                    </Link>
                    <Link to="/meditation" className="services-item disabled">
                        <div className="services-icon">
                            <img src={Meditation} srcSet={Meditation2x + " 2x"} alt=""/>
                        </div>
                        <div className="services-title">Meditation</div>
                        <div className="services-description">Coming soon...</div>
                    </Link>
                </div>
                </div>
            </section>
            <Footer></Footer>
            {this.state.isLoading ? <Processing /> : console.log('DOM ready')}
            </div>

        );
    }
};
