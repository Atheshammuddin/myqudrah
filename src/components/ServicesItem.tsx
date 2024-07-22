import { useNavigate } from "react-router-dom";

function ServicesItem() {
  const navigate = useNavigate();

  const ServiceData = [
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
  const handleServiceClick = (serviceName: string) => {
    const formattedName = serviceName.replace(/ /g, "-");
    navigate(`/services/${formattedName}`);
  };
  return (
    <div style={{ backgroundColor: "#f0f0f0", paddingBottom: "30px" }}>
      <div className="container mt-3 ">
        <div className="row space">
          <div className="col-sm-12">
            <h1 className="text-center fw-bold">Our Services</h1>
          </div>
        </div>
        <div className="row">
          {ServiceData.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="serviceItem"
                key={index}
                onClick={() => handleServiceClick(item)}
              >
                <h6> {item}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesItem;
