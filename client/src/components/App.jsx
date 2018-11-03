import React from "react";
import ReviewStars from "./ReviewStars";
import Miniheader from "./Miniheader";
import Pagination from "./Pagination";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <ReviewStars />
        <Miniheader />
        <Pagination />
      </div>
    );
  }
}
