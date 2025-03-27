// Import all the images
import convergeImage from "../assets/Converge_Observatory-20.png";
import charliImage from "../assets/charliexcx.png";
import turnstileImage from "../assets/Turnstile-7.png";
import dinosaurJrImage from "../assets/Dinosaur_Jr.png";

// Export the array of gig data
const gigsData = [
  {
    id: 1,
    name: "Converge",
    image: convergeImage,
    description:
      "Converge are back! Playing Electric Brixton with support from IHateGod",
    date: "27th April 2025",
    location: "London - Brixton",
    favorite: false,
  },
  {
    id: 2,
    name: "Charli XCX",
    image: charliImage,
    description:
      "Finishing up her world tour at Wembley Arena. Time for another Brat Summer!!",
    date: "23rd August 2025",
    location: "London - Wembley Arena",
    favorite: false,
  },
  {
    id: 3,
    name: "Turnstile",
    image: turnstileImage,
    description:
      "Turnstile are heading back to the UK for Glastonbury Festival!",
    date: "27th June 2025",
    location: "Glastonbury Farm",
    favorite: false,
  },
  {
    id: 4,
    name: "Dinosaur Jr",
    image: dinosaurJrImage,
    description: "J Mascis and the good buds are back out on a worldwide tour",
    date: "15th November 2025",
    location: "Nottingham - Rescue Rooms",
    favorite: false,
  },
];

export default gigsData;
