import React from "react";
import axios from "axios";
import ReviewStars from "./ReviewStars";
import Miniheader from "./Miniheader";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //function bindings
  }
  render() {
    return (
      <div>
        <ReviewStars />
        <Miniheader />
      </div>
    );
  }
}
