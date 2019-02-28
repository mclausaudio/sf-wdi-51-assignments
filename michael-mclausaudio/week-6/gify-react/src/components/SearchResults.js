import React from "react";

const SearchResults = props => {
  console.log("inside search results", props.results);
  let results = props.results.map((gif, i) => {
    console.log(gif);
    return (
      <div className="card" key={i} style={{ width: "18em" }}>
        <img
          className="card-img-top"
          src={gif.images.downsized_medium.url}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">uploaded to Giphy by user {gif.username}</p>
        </div>
      </div>
    );
  });
  return <div className="d-flex flex-wrap">{results}</div>;
};

export default SearchResults;
