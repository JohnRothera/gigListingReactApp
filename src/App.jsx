import { useState } from "react";
import Gig from "./components/Gig";
import gigsData from "./data/gigs-data";
import "./App.css";

function App() {
  // Use the imported gigs data
  const initialGigs = gigsData;

  // State to track gigs
  const [gigs, setGigs] = useState(initialGigs);

  // Function to toggle a gig's favorite status
  const toggleFavorite = (gigId) => {
    setGigs((prevGigs) =>
      prevGigs.map((gig) =>
        gig.id === gigId ? { ...gig, favorite: !gig.favorite } : gig
      )
    );
  };

  // Sort gigs to have favorites at the top
  const sortedGigs = [...gigs].sort((a, b) => {
    if (a.favorite && !b.favorite) return -1;
    if (!a.favorite && b.favorite) return 1;
    return 0;
  });

  return (
    <div className="gigs-container">
      <h1 className="app-title">Upcoming Gigs</h1>
      <div className="gigs-grid">
        {sortedGigs.map((gig) => (
          <Gig
            key={gig.id}
            id={gig.id}
            name={gig.name}
            image={gig.image}
            description={gig.description}
            date={gig.date}
            location={gig.location}
            isFavorite={gig.favorite}
            onToggleFavorite={() => toggleFavorite(gig.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
