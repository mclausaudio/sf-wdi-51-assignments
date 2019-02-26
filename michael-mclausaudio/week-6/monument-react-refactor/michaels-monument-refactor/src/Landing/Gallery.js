import React, { Component } from "react";

import GalleryItem from "./GalleryItem";

class Gallery extends Component {
  render() {
    let imageArray = [
      "images/gallery_1.jpg",
      "images/gallery_3.jpg",
      "images/gallery_4.jpg",
      "images/gallery_2.jpg",
      "images/gallery_5.jpg",
      "images/gallery_6.jpg"
    ];

    let galleryItems = imageArray.map((img, i) => {
      return <GalleryItem image={img} key={i} />;
    });

    return (
      <section id="gallery">
        <div class="wrap">
          <h2>Issue Twenty</h2>
          <h3>A visual guide to the Southwest</h3>
          <div class="masonry">{galleryItems}</div>
        </div>
      </section>
    );
  }
}
export default Gallery;
