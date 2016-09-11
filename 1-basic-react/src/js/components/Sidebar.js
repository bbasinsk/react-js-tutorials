import React from "react";

import Sidenav from "./Sidebar/Sidenav"

export default class Sidebar extends React.Component {
  render() {
    return (
      <div class='sidebar'>
        <h2>craigslist</h2>
        <hr />
        <Sidenav />
      </div>
    );
  }
}
