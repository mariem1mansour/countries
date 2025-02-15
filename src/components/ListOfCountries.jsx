import { useEffect, useState } from "react";
import axios from "axios";
import SearchCountries from "./SearchCountries";

const ListOfCountries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);
  const handleSearch = (query) => {
    if (!query) {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">List of Countries</h1>
      <SearchCountries onSearch={handleSearch} />
      <div className="row">
        {filteredCountries.map((country) => (
          <div key={country.cca3} className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <img
                src={country.flags.svg}
                className="card-img-top"
                alt={country.name.common}
              />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {country.region}
                </h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Capital:</strong> {country.capital}
                  </li>
                  <li className="list-group-item">
                    <strong>Population:</strong>{" "}
                    {country.population.toLocaleString()}
                  </li>
                </ul>
              </div>
              <div className="card-footer text-muted">Code: {country.cca3}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfCountries;
