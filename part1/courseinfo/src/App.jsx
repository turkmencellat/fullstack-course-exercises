const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part.parts[0].name} {props.part.parts[0].exercises}
      </p>
      <p>
        {props.part.parts[1].name} {props.part.parts[1].exercises}
      </p>
      <p>
        {props.part.parts[2].name} {props.part.parts[2].exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.number.parts[0].exercises +
          props.number.parts[1].exercises +
          props.number.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content part={course} />
      <Total number={course} />
    </div>
  );
};

export default App;
