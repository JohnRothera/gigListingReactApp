import "./Gig.css";

const Gig = (props) => {
  return (
    <div className="gig-card">
      <h3 className="bandname">{props.name}</h3>
      <img
        className="gigImage"
        src={props.image}
        alt={props.name + " live"}
      ></img>
      <p className="gigDescription">{props.description}</p>
      <p className="gigDate">{props.date}</p>
      <p className="gigLocation">{props.location}</p>
    </div>
  );
};

export default Gig;
