const Course = (props) => {
  const { courses } = props;
  const total = (arr) =>
    arr.parts.reduce((sum, item) => sum + item.exercises, 0);
  const info = (arr1) => {
    return (
      <>
        {arr1.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} {item.exercises}
            </p>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <h1>Web development cirriculum</h1>
      <h2>{courses[0].name}</h2>
      <p>{info(courses[0].parts)}</p>
      <b>total of {total(courses[0])} exercises</b>
      <h2>{courses[1].name}</h2>
      <p>{info(courses[1].parts)}</p>
      <b>total of {total(courses[1])} exercises</b>
    </>
  );
};

export default Course;
