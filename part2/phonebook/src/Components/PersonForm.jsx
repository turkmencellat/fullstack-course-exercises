import { useState } from "react";
import helperService from "../services/helper";

const PersonForm = ({
  persons,
  setPersons,
  setAddNotification,
  setAddError,
}) => {
  const [newNumber, setNewNumber] = useState(0);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addContact = (event) => {
    event.preventDefault();
    const newID = persons.length + 1;
    const nameObject = {
      name: newName,
      number: newNumber,
      id: newID.toString(),
    };

    const updateNumber = (event) => {
      event.preventDefault();
      const element = persons.find((item) => item.name === newName);
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        helperService
          .updateAll(element.id, nameObject)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id === element.id ? response.data : person
              )
            );
          })
          .catch(() => {
            setAddError(
              `Information of ${element.name} has already been removed from server`
            );
            setTimeout(() => {
              setAddError(null);
            }, 3000);
          });
        setNewName("");
        setNewNumber(0);
      }
    };

    persons.some((item) => item.name === newName)
      ? updateNumber(event)
      : helperService.create(nameObject).then((response) => {
          setPersons(persons.concat(response.data));
          setAddNotification(`
            Added ${newName}
          `);
          setTimeout(() => {
            setAddNotification(null);
          }, 3000);
          setNewName("");
          setNewNumber(0);
        });
  };

  return (
    <>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
