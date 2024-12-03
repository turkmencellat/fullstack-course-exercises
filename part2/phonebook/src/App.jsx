import { useState, useEffect } from "react";
import Persons from "./Components/Persons";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import helperService from "./services/helper";
import Notification from "./Components/Notification";
import Error from "./Components/Error";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [addNotification, setAddNotification] = useState(null);
  const [addError, setAddError] = useState(null);

  useEffect(() => {
    helperService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const [searchedName, setSearched] = useState("");
  const [searchResults, setResult] = useState([]);

  const searchContact = (event) => {
    event.preventDefault();
    const arr = persons.map((element) => element.name);
    const result = arr.filter((element) =>
      element.toLowerCase().includes(searchedName.toLowerCase())
    );
    setResult(persons.filter((person) => result.includes(person.name)));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addNotification} />
      <Error message={addError} />
      <Filter
        searchContact={searchContact}
        setSearched={setSearched}
        searchedName={searchedName}
      />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setAddNotification={setAddNotification}
        setAddError={setAddError}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchResults={searchResults}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
