import "./styles.css";
import React from "react";
import { useState } from "react";

const travel = {
  India: [
    {
      name: "Banglore",
      about:
        "Bangalore is famous being the Silicon Valley of India, Karnataka's capital city is a well known IT hub and some of the world's major It corporations operate out of the city"
    },
    {
      name: "Gujarat",
      about:
        "Gujarat is famous for its traditional clothing, food and natural landscape. Asiatic lions, Rann of Kutch (White Desert)"
    }
  ],
  Canada: [
    {
      name: "Toronto",
      about:
        "Toronto is known for its many skyscrapers and high-rise buildings, in particular the tallest free-standing structure in the Western Hemisphere, the CN Tower."
    },
    {
      name: "Vancouver",
      about:
      "Vancouver, a bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse cities. A popular filming location, it’s surrounded by mountains, and also has thriving art, theatre and music scenes"
    }
  ],
  USA: [
    {
      name: "California",
      about:
        "With millions of acres of farmland, California leads the U.S. in agricultural production. The state is also home to famous cultural institutions and national parks including: Hollywood, Disneyland, Yosemite National Park, Alcatraz, Angel Island and the Golden Gate Bridge."
    },
    {
      name: "Washington",
      about:
        "The state of Washington consistently ranks among the top five in various rankings of the most environmentally friendly states. Recent pushes include additional mass transit to keep pace with the job-fueled population growth, especially in the Seattle area"
    }
  ]
};

export default function App() {
  const [selectCountry, setselectCountry] = useState("India");
  function onClickHandler(country) {
    setselectCountry(country);
  }

  return (
    <div className="App">
      <h1
        style={{
          display: "block",
          fontSize: "2.5 rem",
          marginBlockStart: "0.67rem",
          marginBlockEnd: "0.67rem",
          marginInlineStart: "0rem",
          marginInlineEnd: "0rem",
          fontWeight: "bold"
        }}
      >
        Find your Dream Destination
      </h1>
      <p style={{ fontSize: "smaller" }}> </p>
      <div>
        {Object.keys(travel).map((country) => (
          <button
            onClick={() => onClickHandler(country)}
            style={{
              cursor: "pointer",
              background: "lightblue",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "0.5rem 1rem",
            }}
          >
            {country}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travel[selectCountry].map((city) => (
            <li
              key={city.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "80%",
                textAlign: "center",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                color: "purple"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {city.name} </div>
              <div style={{ fontSize: "smaller" }}> {city.about} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
