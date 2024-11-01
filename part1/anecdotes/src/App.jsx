import { useState } from "react";

const NextButton = ({ func, max }) => {
  return (
    <>
      <button onClick={() => func(Math.floor(Math.random() * max))}>
        next anecdote
      </button>
    </>
  );
};

const Vote = ({ num, funct }) => {
  return (
    <>
      <button onClick={() => funct(num)}>votes</button>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const increaseVote = (index) => {
    const newVotes = votes.map((num, ind) => {
      if (ind === index) {
        return num + 1;
      } else {
        return num;
      }
    });
    setVotes(newVotes);
  };
  let biggestValue = Math.max.apply(null, votes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Vote num={selected} funct={increaseVote} />
      <NextButton func={setSelected} max={anecdotes.length} />
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[votes.indexOf(biggestValue)]}</p>
      <p>has {biggestValue} votes</p>
    </div>
  );
};

export default App;
