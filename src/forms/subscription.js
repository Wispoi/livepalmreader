import React from "react";
import Visa2x from '../assets/images/visa-mastercard@2x.png';
import Visa from '../assets/images/visa-mastercard.png';
import AmExpress2x from '../assets/images/american-express@2x.png';
import AmExpress from '../assets/images/american-express.png';

export class Subscription extends React.Component {
    
    render() {

        return (
            <div className="quiz-subscription">
                <div className="quiz-subscription__wrapper">
                    <div className="quiz-subscription__header">
                        <div className="quiz-subscription__sliding">
                        </div>
                    </div>
                    <div className="quiz-subscription__inner">
                        <div className="quiz-subscription__results">
                            <div className="quiz-subscription__title">Your results are ready</div>
                            <div className="quiz-subscription__subtitle">
                                Use our smart predictions by industry experts to be prepared to
                                challenges your encounter every day.
                            </div>
                        </div>
                        <div className="quiz-subscription__free">
                            <div className="quiz-subscription__free-title">
                                Try everything for free
                            </div>
                            <div className="quiz-subscription__free-list">
                                <div>Unlimited access to features</div>
                                <div>Fast Palm Reading Results</div>
                                <div>Daily Horoscope &amp; Biorythms</div>
                                <div>100% Ads FREE</div>
                            </div>
                        </div>
                        <div className="quiz-subscription__details">
                            <div className="quiz-subscription__details-list">
                                <div className="tutorial-plan">
                                    <div className="parts-row parts-justify parts-md parts-space">
                                    <div className="col">
                                        <span className="tutorial-plan__title">7-Day Trial </span>
                                    </div>
                                    <div className="col">
                                        <span className="tutorial-plan__title">1$</span>
                                    </div>
                                    </div>
                                    <div className="parts-row parts-justify parts-md parts-space">
                                    <div className="col">
                                        <span className="tutorial-plan__title">After trial  </span>
                                    </div>
                                    <div className="col">
                                        <span className="tutorial-plan__title">90$ / 2 months</span>
                                    </div>
                                    </div>                
                                    <div className="parts-row parts-justify parts-md parts-space">
                                    <div className="col">
                                        <span className="tutorial-plan__title"> <strong>Total Today </strong></span>
                                    </div>
                                    <div className="col">
                                        <span className="tutorial-plan__title"><strong>1$</strong></span>
                                    </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>                   
                    <div className="quiz-subscription__payment">
                        <form>
                            <div className="tutorial-payment__title">Payment method</div>
                            <div className="tutorial-payment__nav">
                                <div className="tutorial-payment__item tutorial-active">
                                    <img
                                        src={Visa}
                                        srcSet={Visa2x + " 2x"}
                                        alt=""
                                    />
                                </div>
                                <a
                                className="tutorial-payment__item"
                                href="https://www.americanexpress.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    <img
                                        src={AmExpress}
                                        srcSet={AmExpress2x + " 2x"}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="tutorial-payment__field">
                                <div className="tutorial-payment__label">Card number</div>
                                <div className="tutorial-input tutorial-input--md">
                                <input
                                    type="tel"
                                    name="card_number"
                                    placeholder="9999 9999 9999 9999"
                                    data-inputmask="'mask': '9999 9999 9999 9999'"
                                />
                                </div>
                            </div>
                            <div className="tutorial-payment__field">
                                <div className="parts-row parts-4 parts-space-md">
                                <div className="col part-2">
                                    <div className="tutorial-payment__label">Expires on</div>
                                    <div className="tutorial-input tutorial-input--md">
                                    <input
                                        type="tel"
                                        placeholder="MM/YY"
                                        name="expires_on"
                                        data-inputmask="'mask': '99/99'"
                                    />
                                    </div>
                                </div>
                                <div className="col part-2">
                                    <div className="tutorial-payment__label">Security Code</div>
                                    <div className="tutorial-input tutorial-input--md">
                                    <input
                                        type="tel"
                                        placeholder="3 Digits"
                                        name="security_code"
                                        data-inputmask="'mask': '999'"
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="tutorial-payment__field tutorial-payment__field--submit">
                                <button
                                className="quiz-button main-btn"
                                type="submit"
                                >
                                Get my results
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="quiz-subscription__footer">
                        <p>6901 Narrows ave 3A, Brooklyn, NY, 11209</p>
                        <p>
                            Have a question? <br />
                            Reach our friendly support team <a href>here</a>
                        </p>
                    </div>
                </div>
            </div>

        );
    }   
};
