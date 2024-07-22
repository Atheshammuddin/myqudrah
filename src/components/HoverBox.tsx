import img5 from "../assets/images/5.jpg";

interface DataItem {
  title: string;
  detail: string;
  img: string; // Change type from File | null to string
}

interface HoverBoxProps {
  item: DataItem;
  key?: number;
}

function HoverBox({ item, key }: HoverBoxProps) {
  return (
    <div className="col-md-3 col-sm-4 m-0 p-0" key={key}>
      <div className="hoverbox">
        <div className="imgbox" style={{ backgroundImage: `url(${img5})` }}>
          {item?.img && <img src={item?.img} alt="" />}
          <div className="text">
            <h4>{item.title}</h4>
            <p>{item.detail} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoverBox;
