import React from 'react';

import AppleLogo from '../assets/images/Apple_logo.png';
import FacebookLogo from '../assets/images/Facebook_logo.png';
import GoogleLogo from '../assets/images/Google_logo.png';
import AppleLogo2x from '../assets/images/Apple_logo@2x.png';
import FacebookLogo2x from '../assets/images/Facebook_logo@2x.png';
import GoogleLogo2x from '../assets/images/Google_logo@2x.png';
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';

export const Profile = (formikProps) => {
    const { firstName, gender, loggedIn, maritalStatus, yearOfBirth, monthOfBirth, dayOfBirth, minuteOfBirth, hourOfBirth, timeFormat} = formikProps.values;
    return (
        <div className="quiz-profile">
            <div className="quiz-profile__inner">
                <div className="quiz-profile__title">
                    Your custom course has been <span>activated</span> and starts today!
            </div>
                <div className="quiz-profile__subtitle">
                    Now create your account. Input the information below to begin your  journey.
            </div>
                <div className={"quiz-profile__login " + ((loggedIn) ? 'tutorial-login__hidden' : '')}>
                    <div className="tutorial-payment__title">Create an account</div>
                    <div className="tutorial-login__button apple">
                        <a href="#">
                            <img
                                src={AppleLogo}
                                srcSet={AppleLogo2x + " 2x"}
                                alt=""
                            />
                        Sign in with apple
                    </a>
                    </div>
                    <div className="tutorial-login__button google">
                        <a href="#">
                            <img
                                src={GoogleLogo}
                                srcSet={GoogleLogo2x + " 2x"}
                                alt=""
                            />
                        Sign in with Google
                    </a>
                    </div>
                    <div className="tutorial-login__button facebook">
                        <a href="#">
                            <img
                                src={FacebookLogo}
                                srcSet={FacebookLogo2x + " 2x"}
                                alt=""
                            />
                        Sign in with Facebook
                    </a>
                    </div>

                </div>
                <div className="tutorial-form">
                    <div className="tutorial-profile">
                        <div className="tutorial-payment__title">Create your profile</div>
                        <div className="tutorial-payment__field">
                            <div className="tutorial-payment__label">Name</div>
                            <div className="tutorial-input tutorial-input--md">
                                <Field
                                    name="firstName"
                                    as={TextField}
                                    placeholder={JSON.stringify(firstName).replace(/['"]+/g, '')}
                                    type="text"
                                    value={JSON.stringify(firstName).replace(/['"]+/g, '')}
                                />
                            </div>
                        </div>
                        <div className="tutorial-payment__field">
                            <div className="tutorial-payment__label">Gender</div>
                            <div className="tutorial-switch">
                                <Field
                                    name="gender"
                                    value={gender}
                                    render={({ field }) => (
                                        <>
                                            <label className="radio-item tutorial-switch__item">
                                                <input
                                                    {...field}
                                                    id="female"
                                                    value="female"
                                                    checked={field.value === 'female'}
                                                    name="gender"
                                                    type="radio"
                                                />
                                                <span className="tutorial-switch__text">Female</span>
                                                <label htmlFor="female">Female</label>
                                            </label>

                                            <label className="radio-item tutorial-switch__item">
                                                <input
                                                    {...field}
                                                    id="male"
                                                    value="male"
                                                    name="gender"
                                                    checked={field.value === 'male'}
                                                    type="radio"
                                                />
                                                <span className="tutorial-switch__text">Male</span>
                                                <label htmlFor="male">Male</label>
                                            </label>
                                        </>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="tutorial-payment__field">
                            <div className="tutorial-payment__label">Date of birth</div>
                            <div className="quiz-input">
                                <div className="quiz-input__date">
                                    <div className="select-field">
                                        <Field
                                            name="dayOfBirth"
                                            value={dayOfBirth}
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
                                        </Field>
                                    </div>
                                    <div className="select-field">
                                        <Field
                                            name="monthOfBirth"
                                            value={monthOfBirth}
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
                                        </Field>
                                    </div>
                                    <div className="select-field">
                                        <Field
                                            name="yearOfBirth"
                                            value={yearOfBirth}
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
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tutorial-payment__field">
                            <div className="tutorial-payment__label">Time of birth</div>
                            <div className="quiz-input">
                                <div className="quiz-input__date quiz-input__time">
                                    <Field
                                        name="hourOfBirth"
                                        as={TextField}
                                        type="number"
                                        className="quiz-form__input"
                                        value={hourOfBirth}
                                        maxLength={2}
                                        maxvalue={12}
                                        minvalue={0}
                                        autoComplete="off"
                                    />
                                    <Field
                                        name="minuteOfBirth"
                                        as={TextField}
                                        type="number"
                                        className="quiz-form__input"
                                        placeholder="0"
                                        autoComplete="off"
                                        maxLength={2}
                                        maxvalue={60}
                                        minvalue={0}
                                        value={minuteOfBirth}
                                        lastinput="true"
                                    />
                                    <div className="quiz-input__date-radio">

                                        <Field
                                            name="timeFormat"
                                            render={({ field }) => (
                                                <>
                                                    <label className="tutorial-quiz__label tutorial-quiz__label--link">
                                                        <input
                                                            {...field}
                                                            id="am"
                                                            value="am"
                                                            checked={field.value === 'am'}
                                                            name="timeFormat"
                                                            type="radio"
                                                        />
                                                        <span className="tutorial-quiz__text">AM</span>
                                                    </label>

                                                    <label className="tutorial-quiz__label tutorial-quiz__label--link">
                                                        <input
                                                            {...field}
                                                            id="pm"
                                                            value="pm"
                                                            name="timeFormat"
                                                            checked={field.value === 'pm'}
                                                            type="radio"
                                                        />
                                                        <span className="tutorial-quiz__text">PM</span>
                                                    </label>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tutorial-payment__field">
                            <div className="tutorial-payment__label">Marital status</div>
                            <div className="select-field">
                                <Field
                                    name="maritalStatus"
                                    value={maritalStatus}
                                    as="select">
                                    <option value="free" className="option">Free</option>
                                    <option value="soulmate" className="option">Soulmate</option>
                                    <option value="married" className="option">Married</option>
                                    <option value="difficult" className="option">Difficult</option>
                                </Field>
                            </div>
                        </div>
                        <Link to={{
                            pathname: '/',
                        }}
                            className="quiz-button main-btn">
                            <span>Finish sign up</span>
                        </Link>

                        <p>
                            By clicking «Finish Sign Up» i confirm that i have read and agree to <a href="">privacy policy</a>, <a href="">terms of service</a> and <a href="">billing terms</a>.
                    </p>
                    </div>
                </div>
                <div className="quiz-subscription__footer">
                    <p>6901 Narrows ave 3A, Brooklyn, NY, 11209</p>
                    <p>
                        Have a question? <br />
                    Reach our friendly support team <a href>here</a>
                    </p>
                </div>
            </div>
        </div >
    );
};