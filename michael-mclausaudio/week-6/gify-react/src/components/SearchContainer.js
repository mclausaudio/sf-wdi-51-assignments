import React, { Component } from "react";
import axios from "axios";

import SearchField from "./SearchField";
import SearchResults from "./SearchResults";

export default class SearchContainer extends Component {
  state = {
    term: "",
    results: []
  };

  onSearchTermChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  onSearchSubmit = e => {
    e.preventDefault();
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=ebZaNTs7nYUFw5m5X87u1ixBL2pIp9Bw&q=${
          this.state.term
        }&limit=20&offset=0&rating=PG&lang=en`
      )
      .then(result => {
        this.setState({
          results: result.data
        });
        console.log("state results", this.state.results);
        console.log("before term setState", this.state.term);
        this.setState({
          term: ""
        });
        console.log("after term setState", this.state.term);
      });
  };

  render() {
    let results;
    if (this.state.results.length === 0) {
      results = <p>Enter a search</p>;
    } else {
      results = (
        <SearchResults className="d-flex" results={this.state.results.data} />
      );
    }
    console.log(results);
    return (
      <div>
        <p>Search</p>
        <SearchField
          term={this.state.term}
          onSearchTermChange={this.onSearchTermChange}
          onSearchSubmit={this.onSearchSubmit}
        />
        <p>Search Term: {this.state.term}</p>
        {results}
      </div>
    );
  }
}
