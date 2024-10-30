import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good || bad || neutral != 0) {
    return (
      <>
        <table>
          <tr>
            <StatisticLine text={"good"} value={good} />
          </tr>
          <tr>
            <StatisticLine text={"neutral"} value={neutral} />
          </tr>
          <tr>
            <StatisticLine text={"bad"} value={bad} />
          </tr>
          <tr>
            <StatisticLine text={"all"} value={good + neutral + bad} />
          </tr>
          <tr>
            <StatisticLine
              text={"avergae"}
              value={(good - bad) / (good + neutral + bad)}
            />
          </tr>
          <tr>
            <StatisticLine
              text={"positive"}
              value={(good * 100) / (good + neutral + bad) + " %"}
            />
          </tr>
        </table>
      </>
    );
  } else {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }
};

const Button = ({ func, value, text }) => {
  return (
    <>
      <button onClick={() => func(value + 1)}>{text}</button>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button func={setGood} value={good} text={"good"} />
      <Button func={setNeutral} value={neutral} text={"neutral"} />
      <Button func={setBad} value={bad} text={"bad"} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
