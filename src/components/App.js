
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Leh Ladakh', country: 'India' },
    { name: 'Goa', country: 'India' },
    { name: 'Agra', country: 'India' },
    { name: 'Dalhousie', country: 'India' },
    { name: 'Coorg', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Varanasai', country: 'India' },
    { name: 'Jaipur', country: 'India' },
    { name: 'The Hofburg', country: 'Austria' },
    { name: 'Belvedere Palace', country: 'Austria' },
    { name: 'St. Stephen Cathedral', country: 'Austria' },
    { name: 'Kahna National Park', country: 'India' },
    { name: 'Amritsar', country: 'India' },
    { name: 'Mussoorie', country: 'India' },
    { name: 'Mount Abu', country: 'India' },
    { name: 'Tirupati', country: 'India' },
    ];
    
     const isValidCity = (city) => {
    const regex = /^[a-zA-Z\s]+,\s[a-zA-Z\s]+$/;
    return regex.test(city);
  };

  return (
    <div>
      <h1>Explore Domestic Tourism in India</h1>
      <ol type="1">
        {indianCities.map((city, index) => (
          isValidCity(city) ? (
            <li key={`city-${index}`}>{city}</li>
          ) : (
            <li key={`invalid-city-${index}`} style={{color: 'red'}}>Invalid City: {city}</li>
          )
        ))}
      </ol>
    </div>
  );
}

//   }

//   render() {
//     const indianCities = this.cityList.filter(
//       (city) => city.country === "India"
//     );
//     return (
//       <div id="main">
//         {/* Do not remove the main div */}
//          <h1>Indian Cities</h1>
//         <ol class="city">
//           {indianCities.map((city, index) => (
//             <li key={`city${index + 1}`}>{city.name}</li>
//           ))}
//         </ol>
//       </div>
//     )
//   }
// }


export default App;
