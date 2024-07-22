interface Item {
  img: string;
  title?: string;
  detail?: string;
}
function SubPageMain({ item: item }: { item: Item }) {
  return (
    <div className="subpage-header">
      <div className="subimg">
        <img src={item.img} alt="about" />

        <div className="subpage-title">
          <h1 className="">{item.title}</h1>
          <p>{item.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default SubPageMain;
