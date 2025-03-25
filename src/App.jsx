import Gig from "./components/Gig";
import convergeImage from "./assets/Converge_Observatory-20.png";
import charliImage from "./assets/charliexcx.png";
import "./App.css";

function App() {
  return (
    <div className="gigs-container">
      <h1 className="app-title">Upcoming Gigs</h1>
      <div className="gigs-grid">
        <Gig 
          name="Converge"
          image={convergeImage}
          description="Converge are back! Playing Electric Brixton with support from IHateGod"
          date="27th April 2025"
          location="London - Brixton"
        />
        <Gig
          name="Charli XCX"
          image={charliImage}
          description="Finishing up her world tour at Wembley Arena. Time for another Brat Summer!!"
          date="23rd August 2025"
          location="London - Wembley Arena"
        />
        <Gig
          name="Charli XCX"
          image={charliImage}
          description="Finishing up her world tour at Wembley Arena. Time for another Brat Summer!!"
          date="23rd August 2025"
          location="London - Wembley Arena"
        />
        <Gig
          name="Charli XCX"
          image={charliImage}
          description="Finishing up her world tour at Wembley Arena. Time for another Brat Summer!!"
          date="23rd August 2025"
          location="London - Wembley Arena"
        />
      </div>
    </div>
  );
}

export default App;