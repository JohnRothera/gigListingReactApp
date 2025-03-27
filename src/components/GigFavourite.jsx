const GigFavourite = (props) => {
  const handleClick = () => {
    props.toggleFavorite();

    if (props.fave === "😈") {
      alert("You're right, this show's gonna be killer!!");
    } else if (props.fave === "👍") {
      alert("Bummer man! This was gonna rock!");
    }
  };

  return (
    <button className="favouriteButton" onClick={handleClick}>
      {props.fave}
    </button>
  );
};

export default GigFavourite;
