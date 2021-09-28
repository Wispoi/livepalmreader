import React, { Component, useState, PropTypes } from "react";
import { Processing } from '../forms/index';
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

import zodiacs from '../components/Zodiacs';

import HeaderInner from '../components/HeaderInner';
import Footer from '../components/Footer';

import '../assets/styles.css';

@observer export class Profile extends React.Component {

    constructor(props) {
        super(props);
        var { person } = this.props
        this.state = {
            isLoading: true,
            disabled: true,
            name: person.name,
            zodiac: person.zodiac,
            gender: person.gender,
            timeFormat: person.timeOfBirth.format,
            dayOfBirth: person.dateOfBirth.day,
            monthOfBirth: person.dateOfBirth.month,
            yearOfBirth: person.dateOfBirth.year,
            hourOfBirth: person.timeOfBirth.hour,
            minuteOfBirth: person.timeOfBirth.minute,
            maritalStatus: person.maritalStatus,
            email: person.email
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleChange = e => {
        if (this.state.disabled) {
            this.setState({
                disabled: false
            });
        }
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleImageLoaded() {
        this.setState({ isLoading: false });
    }

    handleImageErrored() {
        this.setState({ isLoading: true });
    }
    render() {
        return (
            <div>
                <HeaderInner pageTitle={'Profile'}></HeaderInner>
                <section className="hero">
                    <div className="section-wrapper">
                        <div className="hero-wrapper">
                            <div className="hero-profile">
                                <div className="hero-profile__avatar">
                                    <img src={'./assets/img/' + this.state.zodiac + '@2x.png'} alt=""
                                        onLoad={this.handleImageLoaded.bind(this)}
                                        onError={this.handleImageErrored.bind(this)}
                                    />
                                </div>
                                <div className="hero-profile__title">
                                    Hello, <span>{this.state.name}</span>!
                        </div>
                                <div className="hero-profile__zodiac">
                                    Your zodiac sign is <span>{this.state.zodiac}</span>
                                </div>
                                <div className="hero-profile__subtitle">
                                    The correctness of the data you enter affects the sternological
                                    forecast of our specialists
                        </div>
                            </div>
                            <div className="hero-bg"></div>
                        </div>
                    </div>
                </section>

                <section className="profile">
                    <div className="section-wrapper">
                        <div className="profile-wrapper">
                            <form className="tutorial-form" onSubmit={this.handleSubmit}>
                                <div className="tutorial-profile">
                                    <div className="tutorial-payment__field">
                                        <div className="tutorial-payment__label">Name</div>
                                        <div className="tutorial-input tutorial-input--md">
                                            <input
                                                name="name"
                                                placeholder=''
                                                type="text"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="tutorial-payment__field">
                                        <div className="tutorial-payment__label">Gender</div>
                                        <div className="tutorial-switch">
                                            <label className="radio-item tutorial-switch__item">
                                                <input
                                                    id="female"
                                                    value="female"
                                                    checked={this.state.gender === 'female'}
                                                    name="gender"
                                                    type="radio"
                                                    onChange={this.handleChange}
                                                />
                                                <span className="tutorial-switch__text">Female</span>
                                                <label htmlFor="female">Female</label>
                                            </label>

                                            <label className="radio-item tutorial-switch__item">
                                                <input
                                                    id="male"
                                                    value="male"
                                                    name="gender"
                                                    checked={this.state.gender === 'male'}
                                                    type="radio"
                                                    onChange={this.handleChange}
                                                />
                                                <span className="tutorial-switch__text">Male</span>
                                                <label htmlFor="male">Male</label>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="tutorial-payment__field">
                                        <div className="tutorial-payment__label">Date of birth</div>
                                        <div className="quiz-input">
                                            <div className="quiz-input__date">
                                                <div className="select-field">
                                                    <select
                                                        name="dayOfBirth"
                                                        value={this.state.dayOfBirth}
                                                        onChange={this.handleChange}
                                                        as="select">
                                                        <option value="" selected="true" disabled="true">Day</option>
                                                        <option value="1" className="option">1</option>
                                                        <option value="2" className="option">2</option>
                                                        <option value="3" className="option">3</option>
                                                        <option value="4" className="option">4</option>
                                                        <option value="5" className="option">5</option>
                                                        <option value="6" className="option">6</option>
                                                        <option value="7" className="option">7</option>
                                                        <option value="8" className="option">8</option>
                                                        <option value="9" className="option">9</option>
                                                        <option value="10" className="option">10</option>
                                                        <option value="11" className="option">11</option>
                                                        <option value="12" className="option">21</option>
                                                        <option value="13" className="option">13</option>
                                                        <option value="14" className="option">14</option>
                                                        <option value="15" className="option">15</option>
                                                        <option value="16" className="option">16</option>
                                                        <option value="17" className="option">17</option>
                                                        <option value="18" className="option">18</option>
                                                        <option value="19" className="option">19</option>
                                                        <option value="20" className="option">20</option>
                                                        <option value="21" className="option">21</option>
                                                        <option value="22" className="option">22</option>
                                                        <option value="23" className="option">23</option>
                                                        <option value="24" className="option">24</option>
                                                        <option value="25" className="option">25</option>
                                                        <option value="26" className="option">26</option>
                                                        <option value="27" className="option">27</option>
                                                        <option value="28" className="option">28</option>
                                                        <option value="29" className="option">29</option>
                                                        <option value="30" className="option">30</option>
                                                        <option value="31" className="option">31</option>
                                                    </select>
                                                </div>
                                                <div className="select-field">
                                                    <select
                                                        name="monthOfBirth"
                                                        value={this.state.monthOfBirth}
                                                        onChange={this.handleChange}
                                                        as="select">
                                                        <option value="" selected="true" disabled="true">Month</option>
                                                        <option value="1" className="option">January</option>
                                                        <option value="2" className="option">February</option>
                                                        <option value="3" className="option">March</option>
                                                        <option value="4" className="option">April</option>
                                                        <option value="5" className="option">May</option>
                                                        <option value="6" className="option">June</option>
                                                        <option value="7" className="option">July</option>
                                                        <option value="8" className="option">August</option>
                                                        <option value="9" className="option">September</option>
                                                        <option value="10" className="option">October</option>
                                                        <option value="11" className="option">November</option>
                                                        <option value="12" className="option">December</option>
                                                    </select>
                                                </div>
                                                <div className="select-field">
                                                    <select
                                                        name="yearOfBirth"
                                                        value={this.state.yearOfBirth}
                                                        onChange={this.handleChange}
                                                        as="select">
                                                        <option value="" selected="true" disabled="true">Year</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2014">2014</option>
                                                        <option value="2013">2013</option>
                                                        <option value="2012">2012</option>
                                                        <option value="2011">2011</option>
                                                        <option value="2010">2010</option>
                                                        <option value="2009">2009</option>
                                                        <option value="2008">2008</option>
                                                        <option value="2007">2007</option>
                                                        <option value="2006">2006</option>
                                                        <option value="2005">2005</option>
                                                        <option value="2004">2004</option>
                                                        <option value="2003">2003</option>
                                                        <option value="2002">2002</option>
                                                        <option value="2001">2001</option>
                                                        <option value="2000">2000</option>
                                                        <option value="1999">1999</option>
                                                        <option value="1998">1998</option>
                                                        <option value="1997">1997</option>
                                                        <option value="1996">1996</option>
                                                        <option value="1995">1995</option>
                                                        <option value="1994">1994</option>
                                                        <option value="1993">1993</option>
                                                        <option value="1992">1992</option>
                                                        <option value="1991">1991</option>
                                                        <option value="1990">1990</option>
                                                        <option value="1989">1989</option>
                                                        <option value="1988">1988</option>
                                                        <option value="1987">1987</option>
                                                        <option value="1986">1986</option>
                                                        <option value="1985">1985</option>
                                                        <option value="1984">1984</option>
                                                        <option value="1983">1983</option>
                                                        <option value="1982">1982</option>
                                                        <option value="1981">1981</option>
                                                        <option value="1980">1980</option>
                                                        <option value="1979">1979</option>
                                                        <option value="1978">1978</option>
                                                        <option value="1977">1977</option>
                                                        <option value="1976">1976</option>
                                                        <option value="1975">1975</option>
                                                        <option value="1974">1974</option>
                                                        <option value="1973">1973</option>
                                                        <option value="1972">1972</option>
                                                        <option value="1971">1971</option>
                                                        <option value="1970">1970</option>
                                                        <option value="1969">1969</option>
                                                        <option value="1968">1968</option>
                                                        <option value="1967">1967</option>
                                                        <option value="1966">1966</option>
                                                        <option value="1965">1965</option>
                                                        <option value="1964">1964</option>
                                                        <option value="1963">1963</option>
                                                        <option value="1962">1962</option>
                                                        <option value="1961">1961</option>
                                                        <option value="1960">1960</option>
                                                        <option value="1959">1959</option>
                                                        <option value="1958">1958</option>
                                                        <option value="1957">1957</option>
                                                        <option value="1956">1956</option>
                                                        <option value="1955">1955</option>
                                                        <option value="1954">1954</option>
                                                        <option value="1953">1953</option>
                                                        <option value="1952">1952</option>
                                                        <option value="1951">1951</option>
                                                        <option value="1950">1950</option>
                                                        <option value="1949">1949</option>
                                                        <option value="1948">1948</option>
                                                        <option value="1947">1947</option>
                                                        <option value="1946">1946</option>
                                                        <option value="1945">1945</option>
                                                        <option value="1944">1944</option>
                                                        <option value="1943">1943</option>
                                                        <option value="1942">1942</option>
                                                        <option value="1941">1941</option>
                                                        <option value="1940">1940</option>
                                                        <option value="1939">1939</option>
                                                        <option value="1938">1938</option>
                                                        <option value="1937">1937</option>
                                                        <option value="1936">1936</option>
                                                        <option value="1935">1935</option>
                                                        <option value="1934">1934</option>
                                                        <option value="1933">1933</option>
                                                        <option value="1932">1932</option>
                                                        <option value="1931">1931</option>
                                                        <option value="1930">1930</option>
                                                        <option value="1929">1929</option>
                                                        <option value="1928">1928</option>
                                                        <option value="1927">1927</option>
                                                        <option value="1926">1926</option>
                                                        <option value="1925">1925</option>
                                                        <option value="1924">1924</option>
                                                        <option value="1923">1923</option>
                                                        <option value="1922">1922</option>
                                                        <option value="1921">1921</option>
                                                        <option value="1920">1920</option>
                                                        <option value="1919">1919</option>
                                                        <option value="1918">1918</option>
                                                        <option value="1917">1917</option>
                                                        <option value="1916">1916</option>
                                                        <option value="1915">1915</option>
                                                        <option value="1914">1914</option>
                                                        <option value="1913">1913</option>
                                                        <option value="1912">1912</option>
                                                        <option value="1911">1911</option>
                                                        <option value="1910">1910</option>
                                                        <option value="1909">1909</option>
                                                        <option value="1908">1908</option>
                                                        <option value="1907">1907</option>
                                                        <option value="1906">1906</option>
                                                        <option value="1905">1905</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tutorial-payment__field">
                                        <div className="tutorial-payment__label">Time of birth</div>
                                        <div className="quiz-input">
                                            <div className="quiz-input__date quiz-input__time">
                                                <input
                                                    name="hourOfBirth"
                                                    type="number"
                                                    className="quiz-form__input"
                                                    placeholder="12"
                                                    maxLength={2}
                                                    maxvalue={12}
                                                    minvalue={0}
                                                    autoComplete="off"
                                                    value={this.state.hourOfBirth}
                                                    onChange={this.handleChange}
                                                />
                                                <input
                                                    name="minuteOfBirth"
                                                    type="number"
                                                    className="quiz-form__input"
                                                    placeholder="0"
                                                    autoComplete="off"
                                                    maxLength={2}
                                                    maxvalue={60}
                                                    minvalue={0}
                                                    lastinput="true"
                                                    value={this.state.minuteOfBirth}
                                                    onChange={this.handleChange}
                                                />
                                                <div className="quiz-input__date-radio">
                                                    <label className="tutorial-quiz__label tutorial-quiz__label--link">
                                                        <input
                                                            id="am"
                                                            value="am"
                                                            checked={this.state.timeFormat === 'am'}
                                                            name="timeFormat"
                                                            type="radio"
                                                            onChange={this.handleChange}
                                                        />
                                                        <span className="tutorial-quiz__text">AM</span>
                                                    </label>

                                                    <label className="tutorial-quiz__label tutorial-quiz__label--link">
                                                        <input
                                                            id="pm"
                                                            value="pm"
                                                            name="timeFormat"
                                                            checked=""
                                                            type="radio"
                                                            checked={this.state.timeFormat === 'pm'}
                                                            onChange={this.handleChange}
                                                        />
                                                        <span className="tutorial-quiz__text">PM</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tutorial-payment__field">
                                        <div className="tutorial-payment__label">Marital status</div>
                                        <div className="select-field">
                                            <select
                                                name="maritalStatus"
                                                value={this.state.maritalStatus}
                                                onChange={this.handleChange}
                                                as="select">
                                                <option value="single" className="option">Single</option>
                                                <option value="soulmate" className="option">Soulmate</option>
                                                <option value="married" className="option">Married</option>
                                                <option value="difficult" className="option">Difficult</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        className={"quiz-button main-btn " + (this.state.disabled ? 'quiz-button__disabled' : '')}
                                        type="submit"
                                    >
                                        Save changes
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <Footer></Footer>
                {this.state.isLoading ? <Processing /> : console.log('DOM ready')}
            </div>

        );
    }
};
