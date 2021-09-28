import React from "react";

export default class Footer extends React.Component {

  render() {

    return (
        <footer className="footer">
            <div className="section-wrapper">
                <div className="footer-wrapper">
                    <div className="footer-left">
                        <div className="footer-logo">GalaxyLine</div>
                        <div className="footer-copy">© 2020 All rights reserved</div>
                    </div>
                    <div className="footer-nav">
                        <ul>
                            <li>
                            <a href="">Privacy Policy</a>
                            </li>
                            <li>
                            <a href="">Terms of use</a>
                            </li>
                            <li>
                            <a href="">Billing terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
  };
};
