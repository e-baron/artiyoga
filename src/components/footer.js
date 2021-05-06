import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Background from "./background.js";

const Footer = ({ siteTitle, ...otherProps }) => {
  const { className } = otherProps;
  const classValue = `footer ${className ? className : ""}`;

  return (
    <footer className={classValue}>
      <Background imageName="footer.jpg" className="footer__background">
        <div className="">
          <h3>{siteTitle}</h3>
        </div>
        <div className="footer__icons">
          <ul className="menu">
            <li>
              <a
                href="mailto:baroni.kati@gmail.com"
                data-email="baroni.kati@gmail.com"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/artiyoga" target="_blank">
                {/* <i class="fa fa-facebook" aria-hidden="true"></i> */}
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/baroni.kati/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCl_6cWf7A0yPr2GPW4uJ7lw"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </div>
      </Background>
    </footer>
  );
};
export default Footer;
