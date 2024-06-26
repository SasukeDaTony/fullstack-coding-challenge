import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="columns-container">
          <div className="widget-container">
            <h3>Visit the Council</h3>
            <p>
              We're located at{" "}
              <a
                className="bold-link"
                href="https://www.google.com/maps/place/New+York+City+Hall/@40.7127744,-74.008253,17z/data=!3m1!4b1!4m2!3m1!1s0x89c258fda88cefb3:0x7f1e88758d210007"
              >
                New York City Hall.
              </a>{" "}
              Council Members each have an office at{" "}
              <a
                className="bold-link"
                href="https://www.google.com/maps/place/250+Broadway,+New+York,+NY+10007/@40.7129838,-74.010099,17z/data=!4m7!1m4!3m3!1s0x89c258828f59541d:0x539864ce22092177!2s250+Broadway,+New+York,+NY+10007!3b1!3m1!1s0x89c258828f59541d:0x539864ce22092177"
              >
                250 Broadway
              </a>
              , as well as offices in each of their districts.
            </p>
          </div>
          <div className="widget-container">
            <h3>We want to hear from you</h3>
            <p>
              You can reach us via social media, email, paper mail, or at your
              district office. For issues specific to a neighborhood, it's best
              to{" "}
              <a
                className="bold-link"
                href="https://council.nyc.gov/districts/"
              >
                contact the Council Member representing that community.
              </a>
            </p>
          </div>{" "}
          <div className="social-container">
            <h3>Have questions, comments or feedback?</h3>
            <a
              className="bold-link"
              href="mailto:correspondence@council.nyc.gov"
            >
              <p className="p-questions"> Click Here to Email Us</p>
            </a>

            <ul className="social-icons">
              <li>
                <a
                  title="New York City Council's Twitter"
                  href="https://twitter.com/NYCCouncil"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  title="New York City Council's Instagram"
                  href="https://instagram.com/NYCCouncil"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  title="New York City Council's Facebook"
                  href="https://www.facebook.com/NYCCouncil"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  title="New York City Council's LinkedIn"
                  href="https://www.linkedin.com/company/new-york-city-council"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  title="New York City Council's YouTube"
                  href="https://www.youtube.com/channel/UCu8AwLHSpgiFtKvHi_TFHog"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-container">
          <div className="column-container">
            <h3>About</h3>
            <ul>
              <li>
                <a className="bold-link" href="https://council.nyc.gov/events">
                  Events
                </a>
              </li>
              <li>
                <a className="bold-link" href="https://council.nyc.gov/about">
                  What we do
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/caucuses/"
                >
                  Caucuses
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/visit-the-council/"
                >
                  Visit the Council
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/district-info/"
                >
                  District Info
                </a>
              </li>
              <li>
                <a className="bold-link" href="https://council.nyc.gov/jobs/">
                  Job Opportunities
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/get-updates/"
                >
                  Subcribe for Updates
                </a>
              </li>
            </ul>
          </div>
          <div className="column-container">
            <h3>Legislation</h3>
            <ul>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/legislation/"
                >
                  Our Legislative Process
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/testify/"
                >
                  Register to Testify
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://legistar.council.nyc.gov/Calendar.aspx"
                >
                  Hearing Calendar and Video Archive
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://legistar.council.nyc.gov/Legislation.aspx"
                >
                  Search legislation
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/legislation/api/"
                >
                  Legislative API
                </a>
              </li>
              <li>
                <a className="bold-link" href="https://council.nyc.gov/data/">
                  Data
                </a>
              </li>
            </ul>
          </div>
          <div className="column-container">
            <h3 className="column-container">Press &amp; News</h3>
            <ul>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/foil-request/"
                >
                  Submit a “Freedom of Information Law” (FOIL) Request
                </a>
              </li>
              <li>
                <a className="bold-link" href="https://council.nyc.gov/press/">
                  Press Releases
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/press/press-photos/"
                >
                  Photos
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/past-featured-content"
                >
                  Past Featured Content
                </a>
              </li>
              <li>
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/news/tag/video/"
                >
                  Videos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="media-accessibility">
          <div className="media-container">
            <div>
              <h3>Media Inquiries</h3>
              <p>
                For media inquiries, please contact{" "}
                <a className="bold-link" href="mailto:press@council.nyc.gov">
                  press@council.nyc.gov
                </a>
              </p>
            </div>
          </div>
          <div className="accessibility-container">
            <div>
              <h3>Accessibility</h3>
              <p className="p-accessibility">
                <a
                  className="bold-link"
                  href="https://council.nyc.gov/accessibility-statement/"
                >
                  Read our Accessibility Statement
                </a>
              </p>
              <a href="https://www.essentialaccessibility.com/new-york-city-council/?utm_source=newyorkcitycouncilhomepage&utm_medium=iconlarge&utm_term=eachannelpage&utm_content=header&utm_campaign=newyorkcitycouncil">
                <img
                  className="accessibility"
                  src="https://council.nyc.gov/wp-content/uploads/2019/08/english-ea-icon.png"
                  alt="Download Essential Accessibility's Assistive Technology"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <span id="copyright">COPYRIGHT © 2023 NEW YORK CITY COUNCIL</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
