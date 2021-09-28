import React, { Component, useState } from "react";
import { Processing } from '../forms/index';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { observer } from 'mobx-react';

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
import BackArrow from '../assets/img/Back_arrow.svg';
import BiorithmBig from '../assets/img/biorithm_big2@5x-1.png';
import BiorithmBig2x from '../assets/img/biorithm_big2@5x-1@2x.png';

import HeaderInner from '../components/HeaderInner';
import Footer from '../components/Footer';
import Promo from '../components/Promo';

import '../assets/styles.css';

@observer export class CompatibilitySelect extends React.Component {
    constructor(props) {
        super(props);
        var { person } = this.props
        this.state = {
            isLoading: true,
            currentSlide: '',
            Aries: 0, Taurus: 1, Gemini: 2, Cancer: 3, Leo: 4, Virgo: 5, Libra: 6, Scorpio: 7, Sagittarius: 8, Capricorn: 9, Aquarius: 10, Pisces: 11,
            zodiac: person.zodiac,
            firstZodiac: person.zodiac,
            secondZodiac: 'Aries'
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({isLoading: false})
        $(`#${this.state.zodiac}`).find('.compatibility-title').html(this.state.zodiac + ' (You)');
    }
    render() {
        const settings = {
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            loop: true,
            initialSlide: this.state[this.state.zodiac],
            afterChange: () => {
                this.setState({ firstZodiac: $('.slick-slider:first-child .slick-active').find('.compatibility-item').attr('id') })
                console.log(this.state.firstZodiac)
            }
        };
        const settings1 = {
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            loop: true,
            afterChange: () => {
                this.setState({ secondZodiac: $('.slick-slider:nth-child(2) .slick-active').find('.compatibility-item').attr('id') })
                console.log(this.state.secondZodiac)
            }
        };
        return (
            <div>
                <section className="compatibility">
                    <div className="compatibility-inner section-wrapper">
                        <div className="compatibility-select">
                            <Slider {...settings}>
                                <div className="compatibility-item" id="Aries">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Aries</div>
                                        <div className="compatibility-image">
                                            <img src={Aries} srcSet={Aries2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Taurus">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Taurus</div>
                                        <div className="compatibility-image">
                                            <img src={Taurus} srcSet={Taurus2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Gemini">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Gemini</div>
                                        <div className="compatibility-image">
                                            <img src={Gemini} srcSet={Gemini2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Cancer">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Cancer</div>
                                        <div className="compatibility-image">
                                            <img src={Cancer} srcSet={Cancer2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Leo">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Leo</div>
                                        <div className="compatibility-image">
                                            <img src={Leo} srcSet={Leo2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Virgo">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Virgo</div>
                                        <div className="compatibility-image">
                                            <img src={Virgo} srcSet={Virgo2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Libra">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Libra</div>
                                        <div className="compatibility-image">
                                            <img src={Libra} srcSet={Libra2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Scorpio">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Scorpio</div>
                                        <div className="compatibility-image">
                                            <img src={Scorpio} srcSet={Scorpio2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Sagittarius">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Sagittarius</div>
                                        <div className="compatibility-image">
                                            <img src={Sagittarius} srcSet={Sagittarius2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Capricorn">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Capricorn</div>
                                        <div className="compatibility-image">
                                            <img src={Capricorn} srcSet={Capricorn2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Aquarius">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Aquarius</div>
                                        <div className="compatibility-image">
                                            <img src={Aquarius} srcSet={Aquarius2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Pisces">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-title">Pisces</div>
                                        <div className="compatibility-image">
                                            <img src={Pisces} srcSet={Pisces2x + " 2x"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <Slider {...settings1}>
                                <div className="compatibility-item" id="Aries">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-image">
                                            <img src={Aries} srcSet={Aries2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Aries</div>                                        
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Taurus">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-image">
                                            <img src={Taurus} srcSet={Taurus2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Taurus</div>                                        
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Gemini">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-image">
                                            <img src={Gemini} srcSet={Gemini2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Gemini</div>                                        
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Cancer">
                                    <div className="compatibility-item__wrapper">

                                        <div className="compatibility-image">
                                            <img src={Cancer} srcSet={Cancer2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Cancer</div>                                        
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Leo">
                                    <div className="compatibility-item__wrapper">

                                        <div className="compatibility-image">
                                            <img src={Leo} srcSet={Leo2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Leo</div>                                       
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Virgo">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-image">
                                            <img src={Virgo} srcSet={Virgo2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Virgo</div>                                        
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Libra">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-image">
                                            <img src={Libra} srcSet={Libra2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Libra</div>                                        
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Scorpio">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-image">
                                            <img src={Scorpio} srcSet={Scorpio2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Scorpio</div>                                        
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Sagittarius">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-image">
                                            <img src={Sagittarius} srcSet={Sagittarius2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Sagittarius</div>                                        
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Capricorn">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-image">
                                            <img src={Capricorn} srcSet={Capricorn2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Capricorn</div>                                        
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Aquarius">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-image">
                                            <img src={Aquarius} srcSet={Aquarius2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Aquarius</div>                                        
                                    </div>
                                </div>
                                <div className="compatibility-item" id="Pisces">
                                    <div className="compatibility-item__wrapper">
                                        <div className="compatibility-image">
                                            <img src={Pisces} srcSet={Pisces2x + " 2x"} alt="" />
                                        </div>
                                        <div className="compatibility-title">Pisces</div>                                        
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="compatibility-bottom">
                            <p>
                                Choose two signs to know more about compatibility
                            </p>
                            <Link to={{
                                pathname: '/compatibility',
                                firstZodiac: $('.slick-slider:first-child .slick-current').find('.compatibility-item').attr('id'),
                                firstZodiacImage: $('.slick-slider:first-child .slick-current').find('.compatibility-item').attr('id'),
                                secondZodiac: $('.slick-slider:last-child .slick-current').find('.compatibility-item').attr('id'),
                                secondZodiacImage: $('.slick-slider:last-child .slick-current').find('.compatibility-item').attr('id'),
                                }}
                                className="quiz-button">
                                <span>Continue</span>
                            </Link>
                        </div>
                    </div>
                </section>
                {this.state.isLoading ? <Processing /> : console.log()}
            </div>
        );
    }
};
