import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header class="vertical-center">
        <div>
          <h1>
            <a href="">{this.props.title}</a>
          </h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      </header>
    );
  }
}

export default Header;
