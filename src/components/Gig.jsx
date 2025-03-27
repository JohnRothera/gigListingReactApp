import { useState } from "react";
import "./Gig.css";

const Gig = (props) => {
  const [fave, setFave] = useState("😈");

  const setFavourite = () => {
    if (fave === "😈") {
      setFave("👍");
      alert("You're right, this show's gonna be killer!!");
    } else if (fave === "👍") {
      setFave("😈");
      alert("Bummer man! This was gonna rock!");
    }
  };

  return (
    <div className="gig-card">
      {fave === "👍" && <h4 className="favourited">Favourited!</h4>}
      <h3 className="bandname">{props.name}</h3>
      <img
        className="gigImage"
        src={props.image}
        alt={props.name + " live"}
      ></img>
      <p className="gigDescription">{props.description}</p>
      <p className="gigDate">{props.date}</p>
      <p className="gigLocation">{props.location}</p>
      <button className="favouriteButton" onClick={setFavourite}>
        {fave}
      </button>
    </div>
  );
};

export default Gig;
