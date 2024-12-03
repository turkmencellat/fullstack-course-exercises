const Filter = ({ searchContact, searchedName, setSearched }) => {
  const handleSearched = (event) => {
    setSearched(event.target.value);
  };

  return (
    <>
      <form onSubmit={searchContact}>
        <div>
          filter shown with{" "}
          <input value={searchedName} onChange={handleSearched} />
        </div>
      </form>
    </>
  );
};

export default Filter;
