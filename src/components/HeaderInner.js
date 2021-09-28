import React from "react";
import { Link } from 'react-router-dom';

import ArrowBack from '../assets/img/arrow_back@3x.png';
import ArrowBack2x from '../assets/img/arrow_back@3x@2x.png';

export default class HeaderInner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      title: this.props.pageTitle
    }
  }

  componentDidMount() {
    let scrollpos = window.scrollY
    const header = document.querySelector("header")
    const header_height = header.offsetHeight

    const add_class_on_scroll = () => header.classList.add("scroll")
    const remove_class_on_scroll = () => header.classList.remove("scroll")

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;

      if (scrollpos >= header_height) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
    })
  }
  render() {

    return (
      <header className="header">
        <div className="section-wrapper">
          <div className="header-wrapper">
            <Link to="/" className="header-back">
              <img src={ArrowBack} srcSet={ArrowBack2x + " 2x"} alt=""/>
            </Link>         
            <div className="header-title">
              {this.state.title}
            </div>
          </div>
        </div>
    </header>
    );
  };
};
