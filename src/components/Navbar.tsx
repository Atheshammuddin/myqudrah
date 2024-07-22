import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos.png";
function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const services = [
    "EV Charging Solutions",
    "MEP Services",
    "Telecommunication",
    "HVAC Services",
    "Electrical Services",
    "Energy Optimization",
    "Sec Power Connectivity",
    "Low Current Services",
    "Infrastructure",
    "Solar Solutions",
  ];
  return (
    <div className=" nav-head">
      <div className="container mt-0 pt-0">
        <Navbar expand="lg" className="navbar">
          <Navbar.Brand href="/home">
            {" "}
            <img
              src={logo}
              alt="logo"
              className="img-fluid"
              style={{
                maxHeight: "50px",
                // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                // background:
                //   "linear-gradient(to right, rgba(255,255,255,0.8), rgba(200,200,200,0.8))",
                filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))",

                // padding: "5px",
                borderRadius: "5px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/home" className="navitem">
                Home
              </Nav.Link>
              <Nav.Link href="/about-us" className="navitem">
                About Us
              </Nav.Link>
              <NavDropdown
                title="Product & Services"
                id="basic-nav-dropdown"
                show={expanded}
                className="navitem"
                onMouseEnter={() => {
                  setExpanded(true);
                }}
                onMouseLeave={() => {
                  setExpanded(false);
                }}
                onToggle={() => setExpanded(!expanded)}
              >
                {services.map((service, index) => (
                  <NavDropdown.Item
                    as={Link}
                    to={`/services/${service
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    key={index}
                  >
                    {service}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link href="#footer" className="navitem">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default CustomNavbar;
