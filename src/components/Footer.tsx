import { Link } from "react-router-dom";
import logo from "../assets/images/logos.png";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
function Footer() {
  // const services = [
  //   "EV Charging Solutions",
  //   "MEP Services",
  //   "Telecommunication",
  //   "HVAC Services",
  //   "Electrical Services",
  //   "Energy Optimization",
  //   "Sec Power Connectivity",
  //   "Low Current Services",
  //   "Infrastructure",
  //   "Solar Solutions",
  // ];
  const latitude = 24.784107208251953;
  const longitude = 46.747169494628906;

  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="row ">
          <div className=" col-md-4">
            <div className="footerimg">
              <img src={logo} alt="logos" />
            </div>
            <div className="footerlist">
              {/* <h3>Services</h3> */}
              {/* <ul>
                {services.map((item) => (
                  <li>
                    {" "}
                    <Link to={`/services/${item.replace(/\s+/g, "-")}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul> */}
              <h5> Address :</h5>
              <p>
                <span>
                  {" "}
                  <IoLocationOutline />
                </span>
                4514 abdullah ibn saud ibn abdulaziz branch 6839 Al shoda dist
                13241 RIYADH
              </p>
              <h5>Email :</h5>
              <p>
                <span>
                  {" "}
                  <MdOutlineEmail />
                </span>
                <Link to={"mailto:info@qudrah-ltd.com"}>
                  {"info@qudrah-ltd.com"}
                </Link>
              </p>
              <h5>Phone :</h5>
              <p>
                <span>
                  {" "}
                  <MdOutlinePhone />
                </span>
                <Link to={"tel:0112770300"}>0112770300</Link>
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="map">
              <iframe
                title="Location Map"
                width="100%"
                height="350"
                frameBorder="0"
                scrolling="no"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.117085245323!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e03e6b14f3%3A0x8e1dbb3c8e93be7e!2sBadshahi%20Mosque!5e0!3m2!1sen!2sbd!4v1631311993396!5m2!1sen!2sbd`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
