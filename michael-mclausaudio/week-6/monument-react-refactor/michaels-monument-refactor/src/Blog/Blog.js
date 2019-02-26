import React, { Component } from "react";

import "../css/blog.css";

import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import ArticleContent from "./ArticleContent";
import ArticleAside from "./ArticleAside";
import Comments from "./Comments";

class Blog extends Component {
  render() {
    return (
      <body>
        <Nav />
        <Header title={"Monument"} />
        <div class="wrap grid-wrapper">
          <ArticleContent />
          <ArticleAside />
        </div>
        <Comments />
        <Footer />
      </body>
    );
  }
}

export default Blog;
