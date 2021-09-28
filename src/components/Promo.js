import React from "react";
import { Link } from 'react-router-dom';

export default class Promo extends React.Component {

  render() {

    return (
        <section className="promo">
            <div className="section-wrapper">
                <div className="promo-wrapper">
                    <div className="promo-image">
                        <img src={this.props.image} srcSet={this.props.image2x +' 2x'}  alt=""/>
                    </div>
                    <div className="promo-title">{this.props.page.charAt(0).toUpperCase() + this.props.page.replace(/_/g, " ").slice(1)}</div>
                    <div className="promo-subtitle h2">{this.props.title}</div>
                    <div className="promo-description">
                        {this.props.subtitle}
                    </div>
                    <div className="promo-button">
                        <Link to={"/" + this.props.page} className="header-info">
                            <span>Get answers</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        );
    };
};
