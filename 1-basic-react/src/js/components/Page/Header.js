import React from "react";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div class="header">
        {/* <Title title={this.props.title} /> */}
        <div class='row_one'>
            <input class='' value="Search" onChange={this.handleChange.bind(this)} />
            <span class='buttons'>
                <button class='new_post'>New Post</button>
                <button class='login'>Login</button>
            </span>
        </div>
        <div class='breadcrumbs'>
            <h3>500 Results for: <a>Seattle</a> > <a>For Sale</a> > <a>Computers</a></h3>
        </div>
      </div>
    );
  }
}
