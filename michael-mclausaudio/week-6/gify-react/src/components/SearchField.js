import React from "react";

const SearchField = props => {
  return (
    <div>
      <form onSubmit={props.onSearchSubmit}>
        <input onChange={props.onSearchTermChange} value={props.term} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchField;
