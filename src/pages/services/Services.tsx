import { useParams } from "react-router-dom";
import SubPageMain from "../../components/SubPageMain";
import evcharging from "../../assets/images/ev-charging.png";
import MEP from "../../assets/images/mep.jpg";
import telecom from "../../assets/images/telecom-tower.jpg";
import hvac from "../../assets/images/hvac.jpg";
import electrical from "../../assets/images/electrical.jpg";
import sec from "../../assets/images/sec-power.jpg";
import energy from "../../assets/images/energy-optimize.jpg";
import low from "../../assets/images/low-current.jpg";
import infrastructure from "../../assets/images/infrastructure.jpg";
import solar from "../../assets/images/solar.jpg";
import { useEffect, useState } from "react";
import solarServ from "../../assets/images/solarserv.jpg";
import evserv from "../../assets/images/evserv.jpg";
import hvacServ from "../../assets/images/hvacserv.jpg";
import electricServ from "../../assets/images/electricserv.jpg";
import lowServ from "../../assets/images/cctvserv.jpeg";
import secServ from "../../assets/images/powersev.jpg";
import energyServ from "../../assets/images/energyser.jpeg";
import inServ from "../../assets/images/infrastructureserv.jpg";
import teleServ from "../../assets/images/teleserv.jpg";
import mepServ from "../../assets/images/mepserv.jpg";
interface Item {
  img: string;
  title: string;
  detail: string;
  subhead: string;
  para: string[];
  list: string[];
  heading2: string;
  para2: string[];
  img2: string;
}
function Services() {
  const { serviceName } = useParams();
  const [item, setItem] = useState<Item>({
    img: "",
    title: "",
    detail: "",
    subhead: "",
    para: [],
    list: [],
    heading2: "",
    para2: [],
    img2: "",
  });
  console.log(serviceName);
  useEffect(() => {
    if (serviceName) {
      const formattedServiceName = serviceName.replace(/-/g, " ").toLowerCase();
      console.log(formattedServiceName);

      switch (formattedServiceName) {
        case "ev charging solutions":
          setItem({
            img: evcharging,
            title: "EV Charging Solutions",
            detail: "Powering the Future of Transportation",
            subhead: "Relible Charges & Outstanding Services",
            para: [
              "QUDRAH prioritizes two things above all: top-tier product quality and exceptional customer service. Our commitment to building lasting partnerships with our customers is unmatched. By consistently setting and surpassing industry standards, we ensure every BESEN charger offers reliability and efficiency.",
              "Our comprehensive suite of services complements our product range, ensuring our customers' satisfaction remains unmatched. Handling the entire project lifespan, from designing the infrastructure and installing the charging stations to providing full-service support and maintenance.",
            ],
            list: [],
            heading2: "services",
            para2: [
              "Smart EV charging stations for homes, businesses, and public places. Our EV charging stations are built using the latest technology, are designed to be well matched with all the major electric vehicles on the market, and go through rigorous quality testing to ensure they are safe and reliable. Keep your EV charging stations up and running at all times.",
              "We do it all—from arranging your site survey to planning installation and setting up your EV charger. We also offer maintenance and support services to ensure your charging stations run efficiently.",
              "Trace, supervise, and optimize your EV charging. Customized EV charging management platform that includes branded web interfaces, end-user mobile apps, and a back-end for your customers and employees.",
            ],
            img2: evserv,
          });
          break;
        case "mep services":
          setItem({
            img: MEP,
            title: "MEP Services",
            detail:
              "Comprehensive Mechanical, Electrical, and Plumbing Solutions",
            subhead:
              "QUDRAH Maintenance Control Department have dedicated teams to provide Preventive Maintenance and Breakdown Repairs during and after warranty period.",
            para: [
              "QUDRAH provides services for mechanical, electrical, plumbing and safety systems, including design, supply, installation, and maintenance for the construction sector throughout the Kingdom of Saudi Arabia.",
            ],
            list: [
              "Central HVAC Systems",
              "Electrical Systems",
              "Low Current & Control Systems",
              "Fire Alarm & Extinguishing Systems",
              "Plumbing Systems",
              "Mechanical Systems",
            ],
            heading2: "Warranty and after-sales maintenance services",
            para2: [],
            img2: mepServ,
          });
          break;
        case "telecommunication":
          setItem({
            img: telecom,
            title: "Telecommunication",
            detail: "Connecting the World with Advanced Communication",
            subhead: "",
            para: [
              "QUDRAH is a leading company in engineering and realization of Telecom Networks and Systems. Our expertise allowing the company to provide our customers with professional turnkey services and solutions in various segments of telecommunication.",
              "Partnering with QUDRAH, guarantees that our clients will find the right services to help them execute their projects.",
            ],
            list: [
              "Site Acquisition Services",
              "Towers Deployment & Implementation",
              "Tower Design",
              "IP Networks",
              "RF Planning",
              "Wireless Networks",
              "IBS Services",
              "TG & DG Supply and installation",
              "AC-DC Solutions",
              "Site Operation & Maintenance",
              "Drive Test and Benchmarking Services",
            ],
            heading2: "  ",
            para2: [],
            img2: teleServ,
          });
          break;
        case "hvac services":
          setItem({
            img: hvac,
            title: "HVAC Services",
            detail: "Heating, Ventilation, and Air Conditioning Experts",
            subhead:
              "QUDRAH Maintenance Control Department have dedicated teams to provide preventive maintenance and breakdown repairs during and after warranty period",
            para: [
              "Contracting and Maintenance services for Central HVAC Systems, including design, supply, installation, and maintenance for construction projects to all sectors throughout the Kingdom of Saudi Arabia",
            ],
            list: [
              "Central Package & Ducted Systems",

              "Central Chilled water Systems",
              "Variable air Volume (VAV)Systems",
              "Design & Installation HVAC Ducting",
              "Exhaust & Ventilation Systems",
              "Air Duct Cleaning Systems",
            ],
            heading2: "After-sales Maintenance services",
            para2: [],
            img2: hvacServ,
          });
          break;
        case "electrical services":
          setItem({
            img: electrical,
            title: "Electrical Services",
            detail: "Reliable and Safe Electrical Solutions",
            subhead: "",
            para: [
              "QUDRAH has a team of Account Managers and Service Engineers & Technicians that provide quality and dependability to our valued clients for electrical & power projects.",
              "In collaboration with its local and international associates, QUDRAH offers Supply, Installation, Testing and Commissioning Services.",
              "QUDRAH provides expertise in all applications of Electrical Industrial, Commercial and Maintenance.",
            ],
            list: [
              "Engineering Services",
              "High & Medium Voltage Installation (Transmission / Generation)",
              "Power Transformers, Switchgear and Ducts",
              "Substation Electrical Works",
              "Tray and Cable Systems (Laying, Pulling, Termination)",
              "All Associated Power Distribution and Control",
              "Lighting (Industrial & Commercial)",
            ],
            heading2: "  ",
            para2: [],
            img2: electricServ,
          });
          break;
        case "energy optimization":
          setItem({
            img: energy,
            title: "Energy Optimization",
            detail: "Maximizing Efficiency, Minimizing Waste",
            subhead: "",
            para: [
              "We partner with clients as a strategic energy adviser, specialty implementer, or both to design, develop, and execute complex energy optimization programs and conservation projects. By leveraging cutting-edge technology and years of engineering expertise, we implement innovative, yet pragmatic investment plans tailored to core business objectives. Our energy optimization services are proven to boost facility performance and lower operating costs",
            ],
            list: [
              "Energy Optimization Program Consulting",
              "Energy Audits",
              "Commissioning",
              "Retro-Commissioning",
              "Distributed Energy and Storage Solutions",
              "VEM Fault Detection and Diagnostics (FDD)",
              "Testing and Balancing (TAB) Services",
            ],
            heading2:
              "Comprehensive Consulting, Engineering, and Implementation Services",
            para2: [],
            img2: energyServ,
          });
          break;
        case "sec power connectivity":
          setItem({
            img: sec,
            title: "Sec Power Connectivity",
            detail: "Ensuring Continuous Power Supply",
            subhead:
              "QUDRAH, Business Process Modeling solutions offer a process-based approach for optimizing client business processes and providing visibility of technology solutions to the relevant business issues.",

            para: [
              "Regulatory, economic, and technological forces are bringing about a multitude of changes for the Energy Industry. To adapt and to capitalize on these changes, energy companies need to understand how to integrate the relevant changes into their business processes. To improve their value offerings, QUDRAH is offering complete Power solutions to end users to cut the cost on running projects and delay in the new projects. QUDRAH's understanding of the power industry and knowledge of the Saudi Electricity Company requirements ensure providing high quality services to our clients.",
            ],
            list: [
              "SEC Request",
              "Design and Design Inspection",
              "Site Survey (Power Connection)",
              "Approval (Govt. Authorities)",
              "SEC Sub contractors (Management)",
              "Implementation Process Review",
              "Project Handover",
              "SLA",
            ],
            heading2: "PROJECT MANAGEMENT (SEC POWER CONNECTIVITY)",
            para2: [],
            img2: secServ,
          });
          break;
        case "low current services":
          setItem({
            img: low,
            title: "Low Current Services",
            detail: "Advanced Low Voltage Solutions",
            subhead: "",
            para: [
              "QUDRAH is a trusted partner for advanced security, communication and audio-visual solutions providing exceptional engineering and technology contracting services to empower and safeguard the Kingdom of Saudi Arabia and its people.",
            ],
            list: [
              "Design Completion",
              "Procurement",
              "Supply",
              "Installation",
              "Commissioning",
              "Acceptance Testing",
              "Training",
              "Warranting",
              "Extended customized maintenance programs",
              "Detailed Design",
              "Systems Technical Specifications",
              "Proof Of Concept",
              "Pilot Programs",
              "Tender Package Preparation & Submittals/ Technical Review",
              "Cost Control & Project Planning",
              "SAT Performance Procedure & Handover Process",
            ],
            heading2: "  ",
            para2: [],
            img2: lowServ,
          });
          break;
        case "infrastructure":
          setItem({
            img: infrastructure,
            title: "Infrastructure",
            detail: "Building the Foundations of Tomorrow",
            subhead: "",
            para: ["We are specialized in infrastructure for utilities."],
            list: [
              "IT & Telecommunications",
              "Potable",
              "Sewage",
              "Firefighting",
              "Irrigation",
              "lighting networks",
              "Storm",
              "Chilled water",
              "Gas",
              "Low and medium voltage",
            ],
            heading2: "Type Of Projects And Systems We Provide & Deliver",
            para2: [],
            img2: inServ,
          });
          break;
        case "solar solutions":
          setItem({
            img: solar,
            title: "Solar Solutions",
            detail: "Harnessing the Power of the Sun",
            subhead: "",
            para: [
              "QUDRAH Solar Solution is a full-service installer and integrator of photovoltaic (PV) systems. Our experience and expertise is in harvesting solar power for home, industrial organizations, educational institutions, municipalities, major utilities, and other large and small applications. We work only with the best products on the market, like Sol Planet, Victron and SMA inverters",
            ],
            list: [
              "Evaluation and design",
              "Permitting",
              "ProcurementSupply & Installation",
              "System Commissioning",
              "Registration",
              "Energy Storage Solutions/Battery Backup",
              "Monitoring and Maintenance",
            ],
            heading2: "Turnkey solar services include",
            para2: [],
            img2: solarServ,
          });
          break;
        default:
          setItem({
            img: "",
            title: "Service Not Found",
            detail: "",
            subhead: "",
            para: [],
            list: [],
            heading2: "  ",
            para2: [],
            img2: "",
          });
          break;
      }
    }
  }, [serviceName]);

  return (
    <div>
      <SubPageMain item={item} />

      <div className="container">
        <div className="row space">
          <div className="col-sm-12">
            <h1 className="text-center fw-bold">{item.title}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="servimg">
              <img src={item.img2} alt="services" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="servdetail">
              {item?.para?.map((p) => (
                <p>{p}</p>
              ))}

              <h4 className="fw-bold">{item.heading2}</h4>
              <p>{item?.subhead}</p>
              <ul>
                {item?.list?.map((l) => (
                  <li>{l}</li>
                ))}
              </ul>
              {item?.para2?.map((p) => (
                <p>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
