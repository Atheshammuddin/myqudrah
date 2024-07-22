import Marquee from "react-fast-marquee";
import taval from "../assets/images/Logos/tawal.png";
import madon from "../assets/images/Logos/modon.png";
import saudi from "../assets/images/Logos/saudi.png";
import saline from "../assets/images/Logos/saline.png";
import nesma from "../assets/images/Logos/nesma.png";
import mobily from "../assets/images/Logos/mobily.png";

function Clients() {
  const partners = [taval, madon, saudi, saline, nesma, mobily];

  return (
    <div className="container-fluid">
      <div className=" space">
        <div className="row space">
          <div className="col-sm-12">
            <h1 className="text-center fw-bold">Our clients</h1>
          </div>
        </div>

        <div className="row marques">
          <Marquee>
            {partners.map((item, index) => (
              <div className="p-2" key={index}>
                <div className="marq2">
                  <img src={item} alt="" />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Clients;
