import React from "react";
import { Link } from 'react-router-dom';
import Info from '../assets/img/info@3x-1.png';
import Info2x from '../assets/img/info@3x-1@2x.png';
import Profile from '../assets/img/profile@3x-1.png';
import Profile2x from '../assets/img/profile@3x-1@2x.png';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    }
  }
  componentWillMount() {
    this.setState({ isLoading: true })
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
            <Link to="/stage-1" className="header-info">
              <img src={Info} srcSet={Info2x + " 2x"} alt="" />
            </Link>
            <Link to="/profile" className="header-profile">
              <img src={Profile} srcSet={Profile2x + " 2x"} alt="" />
            </Link>
          </div>
        </div>
      </header>
    );
  };
};
