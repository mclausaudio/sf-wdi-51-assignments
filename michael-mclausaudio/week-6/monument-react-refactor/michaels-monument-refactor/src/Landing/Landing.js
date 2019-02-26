import React, { Component } from "react";

import "../css/landing.css";

import Header from "../Header";
import Nav from "../Nav";
import ArchiveList from "./ArchiveList";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "../Footer";

class Landing extends Component {
  render() {
    return (
      <body>
        <Header title={"Monument"} subtitle={"A Lifestyle Magazine"} />
        <Nav />
        <ArchiveList />
        <About
          title={"About The Magazine"}
          subtitle={"A Lifestyle Magazine Crafted with Love"}
        />
        <Gallery />
        <Contact />
        <Footer />
      </body>
    );
  }
}

export default Landing;
