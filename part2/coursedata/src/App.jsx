import { useState } from "react";
import Note from "./components/Note";
const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [newNumber, setNewNumber] = useState(0);

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <div>
          <input value={newNote} onChange={handleNoteChange} />
        </div>
        <div>
          <input value={newNumber} onChange={handleNumberChange} />
        </div>

        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
