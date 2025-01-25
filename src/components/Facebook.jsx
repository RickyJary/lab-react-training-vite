import { useState } from "react";

/* eslint-disable react/prop-types */
function Facebook({ profiles }) {
  console.log(profiles);
  const countries = [];
  profiles.forEach((profile) => {
    if (!countries.includes(profile.country)) {
      countries.push(profile.country);
    }
  });

  const [selectedCountry, setSelectedCountry] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div>
      <div>
        {countries.map((country, index) => {
          return (
            <button
              key={index}
              onClick={() => setSelectedCountry(country)}
              style={{
                margin: "5px",
                backgroundColor:
                  selectedCountry === country ? "lightblue" : "white",
              }}
            >
              {country.slice(0, 3)}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)} // Alternar colapsar
        style={{ margin: "10px", padding: "5px", cursor: "pointer" }}
      >
        {isCollapsed ? "Show Profiles" : "Hide Profiles"}
      </button>
      {!isCollapsed && ( // Mostrar perfiles solo si no está colapsado
        <div>
          {profiles.map((profile, index) => {
            return (
              <div
                key={index}
                style={{
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",
                  backgroundColor:
                    selectedCountry === profile.country
                      ? "lightblue"
                      : "white",
                }}
              >
                <img
                  src={profile.img}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <p>
                  <strong>First Name: </strong> {profile.firstName}{" "}
                </p>
                <p>
                  <strong>Last Name: </strong> {profile.lastName}{" "}
                </p>
                <p>
                  <strong>Country: </strong> {profile.country}{" "}
                </p>
                <p>
                  <strong>Type: </strong>{" "}
                  {profile.isStudent ? "Student" : "Teacher"}{" "}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Facebook;
