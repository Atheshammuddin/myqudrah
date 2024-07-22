import { Link } from "react-router-dom";
// import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
// import { AiFillInstagram } from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-5 col-sm-5">
            <div className="address justify-content-start">
              <div className="icon">
                <MdOutlineEmail />
              </div>

              <p>
                <Link to="mailto:info@qudrah-ltd.com">info@qudrah-ltd.com</Link>{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="address text-center justify-content-center">
              <div className="icon">
                <MdOutlinePhone />
              </div>
              <p>
                <Link to="tel:0112770300">0112770300</Link>{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-3  col-sm-3">
            <div className="address justify-content-end">
              {/* <li>
                <FaFacebookF />
              </li> */}
              <li>
                <Link to="https://www.linkedin.com/company/qudrah-com/">
                  {" "}
                  <FaLinkedinIn />
                </Link>
              </li>
              {/* <li>
                <AiFillInstagram />
              </li> */}
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-0" />
    </div>
  );
}

export default Header;
