import helperService from "../services/helper";

const Persons = ({ persons, searchResults, setPersons }) => {
  const deleteContact = (element) => {
    if (window.confirm(`Delete ${element.name} ?`)) {
      helperService.deleteAll(element.id).then(() => {
        setPersons(persons.filter((item) => item.id !== element.id));
      });
    }
  };

  if (searchResults.length == 0) {
    return (
      <div>
        {persons.map((element) => (
          <div key={element.id}>
            <p>
              {element.name} {element.number}
              <button onClick={() => deleteContact(element)}>delete</button>
            </p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {searchResults.map((element) => (
          <div key={element.id}>
            <p>
              {element.name} {element.number}
              <button onClick={() => deleteContact(element)}>delete</button>
            </p>
          </div>
        ))}
      </div>
    );
  }
};

export default Persons;
