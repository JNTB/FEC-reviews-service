import React from "react";
import axios from "axios";
import ReviewStars from "./ReviewStars";
import Miniheader from "./Miniheader";
import Pagination from "./Pagination";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    //function bindings
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews() {
    axios
      .get("/reviews")
      .then(data => {
        this.setState({ reviews: data.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="app">
        <ReviewStars />
        <Miniheader />
        <Pagination comments={this.state.reviews} />
      </div>
    );
  }
}
