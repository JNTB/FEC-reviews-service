import React from "react";
import axios from "axios";
import ReviewStars from "./ReviewStars";
import Miniheader from "./Miniheader";
import CommentList from "./CommentList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //function bindings
  }

  fetchReviews() {
    axios.get();
  }

  render() {
    return (
      <div>
        <ReviewStars />
        <Miniheader />
        <CommentList comments={this.props.Review} />
      </div>
    );
  }
}
