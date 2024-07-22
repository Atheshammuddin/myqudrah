import Carosule from "../../components/Carosule";
import AboutUsSec from "../../components/AboutUsSec";
import ServicesItem from "../../components/ServicesItem";
import Safetyandsec from "../../components/Safety&sec";
import ProjectDelivery from "../../components/ProjectDelivery";
import Partners from "../../components/Partners";
import Clients from "../../components/Clients";
import img5 from "../../assets/images/5.jpg";
import cutting from "../../assets/images/cutting.jpg";
import customization from "../../assets/images/customization.jpg";
import sustainability from "../../assets/images/sustain.jpg";
import reliability from "../../assets/images/relaible.jpg";
import experties from "../../assets/images/experties.jpg";
import customer from "../../assets/images/customer.jpg";
import continues from "../../assets/images/continue.jpg";
import HoverBox from "../../components/HoverBox";

function Home() {
  const data = [
    {
      title: "Integrated Solutions",
      detail:
        "We provide a comprehensive range of services, ensuring seamless coordination and optimized performance across all areas.",
      img: img5,
    },
    {
      title: "Cutting-Edge Technology",
      detail:
        "Leveraging the latest advancements in technology to deliver innovative solutions tailored to our clients' needs.",
      img: cutting,
    },
    {
      title: "Customization",
      detail:
        "Tailoring our services to meet the unique requirements of each project, ensuring maximum effectiveness and efficiency.",
      img: customization,
    },
    {
      title: "Expertise and Experience",
      detail:
        "Our team of professionals brings extensive knowledge and skills to every project, guaranteeing high-quality results.",
      img: experties,
    },
    {
      title: "Sustainability",
      detail:
        "Committed to promoting environmentally friendly practices in all aspects of our operations.",
      img: sustainability,
    },
    {
      title: "Reliability",
      detail:
        "Our track record demonstrates our commitment to delivering dependable solutions on time and within budget.",
      img: reliability,
    },
    {
      title: "Customer-Centric Approach",
      detail:
        "Prioritizing open communication, transparency, and responsiveness to ensure a positive client experience at every stage.",
      img: customer,
    },
    {
      title: "Continuous Improvement",
      detail:
        "Constantly refining our processes and methodologies to stay ahead of industry trends and deliver ever-improving results to our clients.",
      img: continues,
    },
  ];

  return (
    <div className="home-content">
      <Carosule />
      <div className="container-fluid p-0  content  ">
        <div className="row p-0 m-0">
          {data.map((item, index) => (
            <HoverBox item={item} key={index} />
          ))}
        </div>
      </div>
      <AboutUsSec />
      <ServicesItem />
      <Safetyandsec />
      <Partners />
      <ProjectDelivery />
      <Clients />
    </div>
  );
}

export default Home;
