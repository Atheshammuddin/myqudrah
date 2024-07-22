import Marquee from "react-fast-marquee";
import alfanar from "../assets/images/Logos/alfanar.png";
import brano from "../assets/images/Logos/brano.png";
import eb from "../assets/images/Logos/eb.png";
import honeywell from "../assets/images/Logos/honeywell.png";
import loxone from "../assets/images/Logos/loxone.png";
import norden from "../assets/images/Logos/norden.png";
import rystad from "../assets/images/Logos/rystad.png";
function Partners() {
  const partners = [alfanar, brano, eb, honeywell, loxone, norden, rystad];
  return (
    <div className="container-fluid mb-3 op">
      <div className="row space">
        <div className="col-sm-12">
          <h1 className="text-center fw-bold">Our Partners</h1>
        </div>
      </div>

      <div className="row">
        <Marquee>
          {partners.map((item, index) => (
            <div className="p-2" key={index}>
              <div className="marq">
                <img src={item} alt="" />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Partners;
