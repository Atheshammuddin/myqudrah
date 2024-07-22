import React from "react";

interface DataItem {
  title: string;
  detail: string;
  img: JSX.Element;
}

interface HoverBoxProps {
  item: DataItem;
  key?: number;
}
function HeroBox({ item, key }: HoverBoxProps) {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(true);
  // };

  return (
    <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
      <div
        className="hero"
        key={key}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <div className="iconsHero">
          <svg width="0" height="0">
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="#ff5722" offset="0%" />
              <stop stopColor="#9c27b0" offset="100%" />{" "}
            </linearGradient>
          </svg>
          {React.cloneElement(item.img, {
            style: {
              stroke: "#ffffff",
              strokeWidth: "2",
              fill: "none",
              width: "50px",
              height: "50px",
            },
          })}
        </div>

        <h5>{item.title}</h5>
        <p>{item.detail} </p>
      </div>
    </div>
  );
}

export default HeroBox;
