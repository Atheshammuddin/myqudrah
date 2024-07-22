import aboutImg from "../../assets/images/About-us-5.jpg";
import SubPageMain from "../../components/SubPageMain";
import aboutus from "../../assets/images/About-us-4.jpg";
import telecom from "../../assets/images/telcom-t.png";
import certificate1 from "../../assets/images/certificate1.png";
import certificate2 from "../../assets/images/certificate2.png";
function About() {
  const item = {
    img: aboutImg,
    title: "About Us",
    detail: "Leading Innovations in Telecommunications and Beyond",
  };
  return (
    <div>
      <SubPageMain item={item} />

      <div className="container ">
        <div className="row space">
          <div className="col-sm-12 mt-3">
            <h1 className="text-center fw-bold">Who We Are</h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <div className="aboutImg">
              <img src={aboutus} alt="who we are" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-details">
              <div data-aos="fade-up">
                <p>
                  QUDRAH Limited Company is a privately owned infrastructure
                  provider in the Telecommunications and Energy Services sector,
                  delivering turnkey solutions to its clients. QUDRAH takes
                  pride in delivering projects on time, within budget, and to
                  the required quality, while maintaining a focus on continuous
                  improvement to internationally accepted standards.
                </p>
              </div>

              <div data-aos="fade-up">
                <p>
                  QUDRAH delivers one of telecommunications and energy
                  industries’ broadest portfolios of engineering, materials, and
                  services to operators, as well as partnering with equipment
                  manufacturers and infrastructure providers to further provide
                  value-added services to its clients.
                </p>
              </div>

              <div data-aos="fade-up">
                <p>
                  Recognizing the Kingdom’s need for groundbreaking expertise in
                  the telecom and energy markets, QUDRAH is focusing its
                  extensive engineering expertise and resources on providing
                  innovative and practical solutions to clients' power
                  consumption reduction projects.
                </p>
              </div>

              <div data-aos="fade-up">
                <p>
                  QUDRAH will continue to provide creative solutions to reduce
                  carbon footprint and curtail rising maintenance costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experienece">
        <div className="container ">
          <div className="row space">
            <div className="col-sm-12 mt-3">
              <h1 className="text-center fw-bold">Our Experience</h1>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6">
              <div className="about-details">
                <div data-aos="fade-up">
                  <p>
                    As a leading provider of telecommunications, electrical, SEC
                    power connectivity, MEP, HVAC, energy optimization, low
                    current, and solar solutions, we offer comprehensive
                    expertise and innovation tailored to our clients' needs.
                  </p>
                </div>

                <div data-aos="fade-up">
                  <p>
                    Our telecommunications services ensure seamless connectivity
                    and communication networks, while our electrical services
                    guarantee top-notch installations and maintenance for both
                    residential and commercial clients.
                  </p>
                </div>

                <div data-aos="fade-up">
                  <p>
                    We excel in SEC power connectivity, facilitating secure and
                    efficient power distribution systems. Our MEP services
                    integrate advanced technologies for sustainable solutions,
                    optimizing performance while minimizing energy consumption.
                  </p>
                </div>

                <div data-aos="fade-up">
                  <p>
                    With our HVAC services, we prioritize indoor air quality and
                    thermal comfort, focusing on energy efficiency and occupant
                    comfort. Energy optimization is central to our offerings,
                    where we analyze and improve energy usage across various
                    systems.
                  </p>
                </div>
                <div data-aos="fade-up">
                  <p>
                    In low current services, we provide advanced solutions for
                    security, communication, and automation systems.
                    Additionally, our solar solutions harness renewable energy
                    for sustainability and cost savings.
                  </p>
                </div>

                <div data-aos="fade-up">
                  <p>
                    Committed to excellence and sustainability, we drive
                    positive change in the industries we serve with our
                    client-centric approach and dedication to innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="aboutImg">
                <img src={telecom} alt="who we are" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="certificate">
        <div className="container ">
          <div className="row space">
            <div className="col-sm-12">
              <h1 className="text-center fw-bold">Our Certificates</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              {" "}
              <img src={certificate1} alt="" />
            </div>
            <div className="col-sm-6">
              {" "}
              <img src={certificate2} alt="" />
            </div>
          </div>
          <div className="row space"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
