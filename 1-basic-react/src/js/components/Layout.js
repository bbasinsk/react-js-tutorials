import React from "react";

import Page from "./Page";
import Sidebar from "./Sidebar";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div class='layout clearfix'>
        <Sidebar />
        <Page class='clearfix' changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
      </div>
    );
  }
}
