import React, { Component } from "react";

//To toggle between Landing and Blog..
//We need to comment out the others css, as well as element within return

// import Landing from "./Landing/Landing";
import Blog from "./Blog/Blog";

// import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="">
        {/* <Landing /> */}
        <Blog />
      </div>
    );
  }
}

export default App;
