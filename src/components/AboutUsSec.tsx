import { useState } from "react";
import about from "../assets/images/about.png";

function AboutUsSec() {
  const [showFullMission, setShowFullMission] = useState(false);
  const [showFullVision, setShowFullVision] = useState(false);
  const toggleMission = () => {
    setShowFullMission(true);
  };

  const toggleVision = () => {
    setShowFullVision(true);
  };
  const toggleMission2 = () => {
    setShowFullMission(false);
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row space">
          <div className="col-sm-12">
            <h1 className="text-center fw-bold">About Us</h1>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="aboutImg">
              <img src={about} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutdetails">
              <h4>Our Mission</h4>
              <p>
                QUDRAH COMPANY aims to revolutionize the Kingdom's
                communications infrastructure. We deliver cutting-edge services
                that{" "}
                {showFullMission ? (
                  <>
                    exceed industry standards and customer expectations. Our
                    focus is on unparalleled availability, performance,
                    reliability, and value. We strive to set new benchmarks for
                    quality and innovation in telecommunications.
                  </>
                ) : (
                  <>
                    We deliver cutting-edge services that exceed industry
                    standards and customer expectations.
                    {!showFullMission ? (
                      <span onClick={toggleMission} className="read-more">
                        ... Read more
                      </span>
                    ) : (
                      <span onClick={toggleMission2} className="read-more">
                        ... Show less
                      </span>
                    )}
                  </>
                )}
              </p>
              <h4>Our Vission</h4>
              <p>
                Our vision is to lead in technological advancements, integrating
                innovations to provide top-tier services nationwide. We aim to
                {showFullVision ? (
                  <>
                    {" "}
                    be the preferred partner for our clients and a source of
                    pride for our employees by fostering a culture of innovation
                    and excellence. We strive to set industry standards and
                    exceed expectations in telecommunications.
                  </>
                ) : (
                  <>
                    We strive to set industry standards and exceed expectations
                    in telecommunications.
                    <span onClick={toggleVision} className="read-more">
                      ... Read more
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSec;
