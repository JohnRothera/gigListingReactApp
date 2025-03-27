import "./Gig.css";
import GigFavourite from "./GigFavourite";
import GigDisplay from "./GigDisplay";

const Gig = (props) => {
  // Use the favorite state from the parent App component
  const fave = props.isFavorite ? "👍" : "😈";

  const handleToggleFavorite = () => {
    props.onToggleFavorite();
  };

  return (
    <div className={`gig-card ${props.isFavorite ? "favorited-gig" : ""}`}>
      {props.isFavorite && <h4 className="favourited">Favourited!</h4>}
      <GigDisplay
        name={props.name}
        image={props.image}
        description={props.description}
        date={props.date}
        location={props.location}
      />
      <GigFavourite fave={fave} toggleFavorite={handleToggleFavorite} />
    </div>
  );
};

export default Gig;
