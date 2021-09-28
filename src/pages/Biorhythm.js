import React, { Component, useState } from "react";
import { Processing } from '../forms/index';
import { observer } from 'mobx-react';

import Basement from '../assets/img/Basement.png';
import Basement2x from '../assets/img/Basement@2x.png';
import BiorithmBig from '../assets/img/biorithm_big2@5x-1.png';
import BiorithmBig2x from '../assets/img/biorithm_big2@5x-1@2x.png';
import HoroscopeBig from '../assets/img/horoscope_big2@5x-1.png';
import HoroscopeBig2x from '../assets/img/horoscope_big2@5x-1@2x.png';
import Chart from '../assets/img/Chart1.png';
import Chart2x from '../assets/img/Chart1@2x.png';

import HeaderInner from '../components/HeaderInner';
import Footer from '../components/Footer';
import Promo from '../components/Promo';

import '../assets/styles.css';

@observer export class Biorhythm extends React.Component {
    constructor(props) {
        super(props);
        var { person } = this.props
        this.state = {
            isLoading: true,
            todayDate: '',
            birthDay: person.dateOfBirth.day,
            birthMonth: person.dateOfBirth.month,
            birthYear: person.dateOfBirth.year,
            birthMonthName: ''
        };
        this.bioRhythmCalculator = this.bioRhythmCalculator.bind(this);
        this.dateCalculator = this.dateCalculator.bind(this);
        this.graphDrawing = this.graphDrawing.bind(this);
    }
    componentWillMount() {

    }
    componentDidMount() {
        window.scrollTo(0, 0)
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 3000)
        this.dateCalculator();
        this.bioRhythmCalculator();
        this.graphDrawing();
    }
    dateCalculator() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var month = monthNames[today.getMonth()];
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = month + ' ' + dd;
        var todayFull = dd + '.' + mm + '.' + yyyy;
        var nextDay = new Date((new Date).valueOf() + 86350989);
        var prevDay = new Date((new Date).valueOf() - 86350989);
        var ddNext = String(nextDay.getDate()).padStart(2, '0');
        var ddPrev = String(prevDay.getDate()).padStart(2, '0');
        var mmNext = String(nextDay.getMonth() + 1).padStart(2, '0');
        var mmPrev = String(prevDay.getMonth() + 1).padStart(2, '0');
        var prevDate = ddPrev + '.' + mmPrev;
        var nextDate = ddNext + '.' + mmNext;
        var birthMonthName = monthNames[this.state.birthMonth - 1];
        this.setState({
            todayDate: today,
            todayFull: todayFull,
            prevDate: prevDate,
            nextDate: nextDate,
            birthMonthName: birthMonthName
        })
    }
    bioRhythmCalculator() {
        var today = new Date();
        var birthday = new Date(this.state.birthYear, this.state.birthMonth, this.state.birthDay);
        var t = Math.floor((Date.parse(today) - Date.parse(birthday)) / 86400000);
        var getPhysicalValue = parseInt(Math.round(100 * Math.sin(2 * Math.PI * t / 23)));
        var getEmotionalValue = parseInt(Math.round(100 * Math.sin(2 * Math.PI * t / 28)));
        var getIntellectualValue = parseInt(Math.round(100 * Math.sin(2 * Math.PI * t / 33)));
        var getAverageValue = parseInt(Math.round(100 * (Math.sin(2 * Math.PI * t / 28) + Math.sin(2 * Math.PI * t / 23) + Math.sin(2 * Math.PI * t / 33)) / 3));
        this.setState({
            PhysicalValue: getPhysicalValue,
            EmotionalValue: getEmotionalValue,
            IntellectualValue: getIntellectualValue,
            AverageValue: getAverageValue
        })
    }
    graphDrawing() {

    }
    render() {
        const { person } = this.props
        return (
            <div>
                <HeaderInner pageTitle={'Biorhythm'}></HeaderInner>

                <section className="hero">
                    <div className="section-wrapper">
                        <div className="hero-wrapper">
                            <div className="hero-results">
                                <div className="hero-results__image">
                                    <img src={BiorithmBig} srcSet={BiorithmBig2x + " 2x"} alt="" />
                                </div>
                            </div>
                            <div className="hero-bg"></div>
                        </div>
                    </div>
                </section>

                <section className="biorhythm">
                    <div className="section-wrapper">
                        <div className="today-biorhythm">
                            <div className="biorhythm-title">Your biorhythm for today, {this.state.todayDate}</div>
                            <div className="biorhythm-subtitle">
                                Know more about yourself with our experts conclusion
                            </div>
                            <div className={"today-biorhythm__col physical " + (this.state.PhysicalValue > 0 ? 'positive' : 'negative')}>
                                <div className="today-biorhythm__title">{this.state.PhysicalValue}%</div>
                                <div className="today-biorhythm__line">
                                    <span style={{ width: `${Math.abs(this.state.PhysicalValue / 2)}` + "%" }} />
                                </div>
                                <div className="today-biorhythm__tag">Physical</div>
                            </div>
                            <div className={"today-biorhythm__col emotional " + (this.state.EmotionalValue > 0 ? 'positive' : 'negative')}>
                                <div className="today-biorhythm__title">{this.state.EmotionalValue}%</div>
                                <div className="today-biorhythm__line">
                                    <span style={{ width: `${Math.abs(this.state.EmotionalValue / 2)}` + "%" }} />
                                </div>
                                <div className="today-biorhythm__tag">Emotional</div>
                            </div>
                            <div className={"today-biorhythm__col intellectual " + (this.state.IntellectualValue > 0 ? 'positive' : 'negative')}>
                                <div className="today-biorhythm__title">{this.state.IntellectualValue}%</div>
                                <div className="today-biorhythm__line">
                                    <span style={{ width: `${Math.abs(this.state.IntellectualValue / 2)}` + "%" }} />
                                </div>
                                <div className="today-biorhythm__tag">Intellectual</div>
                            </div>
                            <div className={"today-biorhythm__col average " + (this.state.AverageValue > 0 ? 'positive' : 'negative')}>
                                <div className="today-biorhythm__title">{this.state.AverageValue}%</div>
                                <div className="today-biorhythm__line">
                                    <span style={{ width: `${Math.abs(this.state.AverageValue / 2)}` + "%" }} />
                                </div>
                                <div className="today-biorhythm__tag">Average</div>
                            </div>
                        </div>
                        <div className="biorhythm-wrapper">
                            <div className="biorhythm-wrapper__title">You Birthday: {this.state.birthDay} {this.state.birthMonthName} {this.state.birthYear}</div>
                            <div className="biorhythm-wrapper__image">
                                <div className="biorhythm-wrapper__bg">
                                    <span className="line">100</span>
                                    <span className="line">50</span>
                                    <span className="line">0</span>
                                    <span className="line">-50</span>
                                    <span className="line">-100</span>
                                </div>
                                <div className="biorhythm-wrapper__prev">
                                    <span>{this.state.prevDate}</span>
                                </div>
                                <div className="biorhythm-wrapper__next">
                                    <span>{this.state.nextDate}</span>
                                </div>
                                <div className="biorhythm-wrapper__chart">
                                    <svg
                                        style={{ marginLeft: "calc(-140px - " + `${this.state.EmotionalValue / 3}` + "px)", overflow: "visible", enableBackground: "new 0 0 1172.8 160.1"  }}
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        width="1172.8px"
                                        height="160.1px"
                                        viewBox="0 0 1172.8 160.1"
                                        xmlSpace="preserve"
                                    >
                                        <style
                                            type="text/css"
                                            dangerouslySetInnerHTML={{
                                                __html: ".st1{fill:none;stroke:#50E3C2;stroke-width:1.5;}"
                                            }}
                                        />
                                        <defs />
                                        <path
                                            className="st1"
                                            d="M1172.7,108.1c-6.4-0.8-7.4-4.8-9.4-8.8c-5-10-8-19-9-30c-5-22-10-43-23-61c-4-5-11-6-17-5c-8,2-13,9-16,15c-15,36-26,72-39,109c-4,11-10,20-19,27c-8,5-18,2-24-5c-22-30-26-65-38-98c-5-14-9-26-18-39c-5-7-12-12-21-10c-6,2-11,6-15,11c-21,40-29,84-45,125c-5,10-12,22-25,21c-28-19-32-56-44-85c-7-19-9.6-37.9-19.7-55.1l1,2c-2.6-4.9-7.5-14.1-12.6-17.1C774.5,1.4,768,1,763.2,3c-11.7,4.8-15.5,18.9-19.7,29.6c-10.6,27.2-19.5,55.1-29,82.7c-4.2,12.2-8.3,24-17.6,33.4c-4.2,4.2-8.6,7.3-14.8,7c-5.4-0.3-10.8-3.1-14.2-7.3c-8.3-9.8-13.9-22.8-18.3-34.7c-4.5-11.9-7.9-24.2-11.4-36.5c-3.6-12.5-7.5-24.7-12-36.9c-4.2-11.5-9.3-24.7-18.1-33.5c-9.4-9.3-21.2-6.4-29.7,2.4c-4.7,4.8-7.2,12-9.9,18.1c-2.8,6.3-5.4,12.8-7.8,19.3c-9.6,25.9-16.4,52.7-25.6,78.8c-3.6,10.2-7.6,21.8-16.4,28.7c-3.4,2.7-9.7,5.7-13.8,3.5c-4.4-2.3-8.5-7-11.7-10.8c-13.9-16.5-19.2-38.2-25.8-58.2c-3.8-11.4-8.2-22.6-11.8-34.1c-4-12.8-8.1-25.8-14.9-37.5l0.2,0.3c-4.1-6.1-8.1-14.1-16.1-16.1s-14,3-17,8c-19,29-25,60-35,91c-6,16-11,31-21,45c-4,5-9,9-15,10c-15,1-22-14-27-25c-14-29-20-59-32-88c-6-15-11-34-28-41c-21-2-28,23-34,38c-13,32-20,64-33,96c-5,10-11,23-23,22c-8,0-14-8-18-15c-17-31-24-65-38-97c-6-16-9-37-27-44c-5-1-11,1-15,5c-16,15-19,36-32,55c-7,10-17,19-29.6,18.3"
                                        />
                                    </svg>
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        width="1109.2px"
                                        height="158.7px"
                                        viewBox="0 0 1109.2 158.7"
                                        style={{ marginLeft: "calc(-190px - " + `${this.state.PhysicalValue / 3}` + "px)", overflow: "visible", enableBackground: "new 0 0 1109.2 158.7" }}
                                        xmlSpace="preserve"
                                    >
                                        <style
                                            type="text/css"
                                            dangerouslySetInnerHTML={{
                                                __html: ".st2{fill:none;stroke:#479CFF;stroke-width:1.5;}"
                                            }}
                                        />
                                        <defs />
                                        <path
                                            className="st2"
                                            d="M560.7,1.8c-52,14.9-58.7,181.1-127.1,148.3c-43-26.2-53-160.7-112-147.6c-49.6,19.9-54,146.8-105.4,155.4C161.9,154,148.8-6,93.2,1.6C53.7,15.9,48.8,79.9,0,79.5 M536,23c44.1-63,73.5,24,90.9,59.7c14.8,32.5,49.8,113.5,86.3,53.8c25.9-31.9,52.6-180.3,112-121.9c32.6,28.7,55,177.2,114.7,131.7c36.5-24.4,58.3-178.4,113-138.5C1081,27.3,1082,99.9,1109,107"
                                        />
                                    </svg>
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        width="1291.2px"
                                        height="158.9px"
                                        viewBox="0 0 1291.2 158.9"
                                        style={{ marginLeft: "calc(-195px - " + `${this.state.IntellectualValue / 3}` + "px)", overflow: "visible", enableBackground: "new 0 0 1291.2 158.9" }}
                                        xmlSpace="preserve"
                                    >
                                        <style
                                            type="text/css"
                                            dangerouslySetInnerHTML={{
                                                __html: ".st3{fill:none;stroke:#FF3B62;stroke-width:1.5;}"
                                            }}
                                        />
                                        <defs />
                                        <path
                                            className="st3"
                                            d="M1291.2,0.8c-39.2,0-54.8,154.5-99.7,154.5c-44.9,0-57.8-154.5-102.7-154.5s-59.2,157-98.8,157c-39.6,0-66.1-156.1-101.3-156.1c-39.2,0-54.7,154.1-99.7,154.1C744,155.7,731.2,1.2,686.3,1.2s-59.2,157-98.8,157c-39.6,0-64.8-157-100-157h0.2c-39.2,0-54.8,154.5-99.7,154.5C343,155.7,330.2,1.2,285.3,1.2s-59.2,157-98.8,157s-64.8-157-100-157C51.3,1.2,47.3,79.7,0,79.8"
                                        />
                                    </svg>
                                </div>
                                <div className="biorhythm-wrapper__future">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                                <div className="biorhythm-wrapper__current">
                                    Today: <span>{this.state.todayFull}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <Promo
                    page={'horoscope'}
                    title={'Know more about yourself'}
                    subtitle={'Know more about yourself with our experts conclusion'}
                    image={HoroscopeBig}
                    image2x={HoroscopeBig2x}
                >
                </Promo>

                <Footer></Footer>
                {this.state.isLoading ? <Processing /> : console.log('DOM ready')}
            </div>

        );
    }
};
