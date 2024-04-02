import React from "react";
import "./FourOFour.css";
function FourOFour() {
  return (
    <div>
      <div className="error-container">
        <h1>
          <b>Sorry...</b> An <span className="red">HTTP:404</span> Error
          Occured!
        </h1>
        <h5>We Can't find the page you are looking for!</h5>
        <img
          alt="404 robot"
          width="400px"
          height="400px"
          src="https://www.vizion.com/wp-content/uploads/2018/09/shutterstock_479042983.jpg"
        />
      </div>
      <div className="error-context">
        <p>
          We've recently updated our website, so pages you've bookmarked may
          have moved. There are new pages for our{" "}
          <strong>
            <a href="https://council.nyc.gov/legislation/">legislative</a>
          </strong>
          ,{" "}
          <strong>
            <a href="https://council.nyc.gov/budget/">budgetary</a>
          </strong>
          , and{" "}
          <strong>
            <a href="https://council.nyc.gov/land-use/">land use</a>
          </strong>{" "}
          processes, as well as for your{" "}
          <strong>
            <a href="https://council.nyc.gov/districts/">Council Members</a>
          </strong>
          . You can also find feeds for{" "}
          <strong>
            <a href="https://council.nyc.gov/press/">press releases</a>
          </strong>{" "}
          and{" "}
          <strong>
            <a href="https://council.nyc.gov/news/">general news</a>
          </strong>
          .
        </p>
        <p>
          If you still can’t find what you’re looking for, send us a{" "}
          <strong>
            <a href="https://twitter.com/NYCCouncil">tweet</a>
          </strong>
          ,{" "}
          <strong>
            <a href="https://www.facebook.com/NYCCouncil/">Facebook message</a>
          </strong>
          , or{" "}
          <strong>
            <a href="mailto:labs@council.nyc.gov">email</a>
          </strong>
          .
        </p>
      </div>
    </div>
  );
}

export default FourOFour;
