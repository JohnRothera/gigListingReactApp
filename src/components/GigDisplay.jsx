const GigDisplay = (props) => {
  return (
    <>
      <h3 className="bandname">{props.name}</h3>
      <img
        className="gigImage"
        src={props.image}
        alt={props.name + " live"}
      ></img>
      <p className="gigDescription">{props.description}</p>
      <p className="gigDate">{props.date}</p>
      <p className="gigLocation">{props.location}</p>
    </>
  );
};

export default GigDisplay;
