import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    return <img src={this.props.image} alt="" />;
  }
}

export default GalleryItem;
