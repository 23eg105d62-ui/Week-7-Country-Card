import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar.jsx";
import CountryList from "./components/CountryList.jsx";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region"
        );

        if (!res.ok) throw new Error("Failed to fetch countries");

        const data = await res.json();
        //console.log(data);
        setCountries(data);
        setFilteredCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(filtered);
  }, [query, countries]);

  const handleSearch = (term) => {
    setQuery(term);
  };

  if (loading) return <p className="loading">Loading countries...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="app-container">
      <h1>Country Explorer</h1>
      <Searchbar onSearch={handleSearch} />
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;