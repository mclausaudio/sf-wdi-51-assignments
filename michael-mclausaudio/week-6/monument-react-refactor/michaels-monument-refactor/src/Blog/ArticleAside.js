import React, { Component } from "react";

class ArticleAside extends Component {
  render() {
    let recentIssues = [
      {
        title: "Issue Nineteen - Camping"
      },
      {
        title: "Issue Eighteen - Food"
      },
      {
        title: "Issue Seventeen - Signs"
      },
      {
        title: "Issue Sixteen - Friends"
      },
      {
        title: "Issue Fifteen - Carnivals"
      },
      {
        title: "Issue Fourteen - Gatherings"
      }
    ];

    let recentIssueLis = recentIssues.map((item, i) => {
      return (
        <li>
          <a href="">{item.title}</a>
        </li>
      );
    });

    return (
      <aside>
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat
          illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius,
          accusamus, doloribus dolore at ipsum quaerat molestias.
        </p>
        <p>
          Explicabo consectetur tempora perferendis voluptas itaque, corporis at
          ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum
          fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda,
          saepe excepturi ad voluptatibus. Eveniet.
        </p>
        <img src="images/about.jpg" alt="" />
        <h3>Recent Issues</h3>
        <ul>{recentIssueLis}</ul>
      </aside>
    );
  }
}

export default ArticleAside;
