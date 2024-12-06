import { useState, useEffect } from "react";
import help from "./services/help";
import Filtering from "./Components/Filtering";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchedName, setSearched] = useState("");
  useEffect(() => {
    help.getAll().then((response) => {
      setCountries(response.data);
    });
  }, []);
  return (
    <>
      <div>
        find countries
        <input
          value={searchedName}
          onChange={(e) => setSearched(e.target.value)}
        />
      </div>
      <div>
        <Filtering countries={countries} searchedName={searchedName} />
      </div>
    </>
  );
}

export default App;
