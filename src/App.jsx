import Gig from "./components/Gig";
import convergeImage from "./assets/Converge_Observatory-20.png";
import charliImage from "./assets/charliexcx.png";
import turnstileImage from "./assets/Turnstile-7.png";
import dinosaurJrImage from "./assets/Dinosaur_Jr.png";
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
          name="Turnstile"
          image={turnstileImage}
          description="Turnstile are heading back to the UK for Glastonbury Festival!"
          date="27th June 2025"
          location="Glastonbury Farm"
        />
        <Gig
          name="Dinosaur Jr"
          image={dinosaurJrImage}
          description="J Mascis and the good buds are back out on a worldwide tour"
          date="15th November 2025"
          location="Nottingham - Rescue Rooms"
        />
      </div>
    </div>
  );
}

export default App;