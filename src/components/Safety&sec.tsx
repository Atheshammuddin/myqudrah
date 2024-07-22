import safety from "../assets/images/safety.jpg";

function Safetyandsec() {
  return (
    <div className="safety">
      <div className="container ">
        <div className="row space ">
          <div className="col-sm-12">
            <h1 className="text-center fw-bold">Safety & Security</h1>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="saftimg">
              <img src={safety} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutdetails">
              <p>
                We prioritize creating a work environment where every team
                member feels valued, supported, and protected. Through rigorous
                training, adherence to strict safety protocols, and continuous
                monitoring of site conditions, we ensure that all construction
                activities are carried out with the highest regard for the
                well-being of our staff. Our commitment to safety extends beyond
                compliance; it is ingrained in our culture, driving us to
                continuously improve and innovate to mitigate risks and prevent
                accidents.
              </p>
              <p>
                At our construction company, safety and security are paramount.
                We prioritize the well-being of our workers, clients, and the
                community through rigorous safety protocols, comprehensive
                training, and advanced security measures. From risk assessments
                to on-site guidelines, we ensure a secure environment,
                instilling confidence in our clients and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safetyandsec;
