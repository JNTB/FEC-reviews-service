import React from "react";
import CommentListEntry from "./CommentListEntry";
import pageNumbers from "./PAGENUMBERLOGIC";
import axios from "axios";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentPage: 1,
      reviewsPerPage: 7,
      pagesDisplay: [1, 2, 3, "...", 15, "❯", ""]
    };
    this.handleClick = this.handleClick.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews() {
    axios
      .get(`/reviews/${this.state.currentPage}`)
      .then(data => {
        this.setState({ reviews: data.data });
        console.log(data, "data");
      })
      .catch(err => console.error(err));
  }

  handleClick(e) {
    console.log(e.target.id, "e.target");
    if (!Number(e.target.id) && e.target.id === "...") {
      return;
    }
    if (!Number(e.target.id) && e.target.id === "❯") {
      this.setState(
        {
          currentPage: this.state.currentPage + 1
        },
        () => {
          this.fetchReviews();
          this.setState({
            pagesDisplay: pageNumbers(15, this.state.currentPage)
          });
        }
      );
      return;
    }
    if (!Number(e.target.id) && e.target.id === "❮") {
      this.setState(
        {
          currentPage: this.state.currentPage - 1
        },
        () => {
          this.fetchReviews();
          this.setState({
            pagesDisplay: pageNumbers(15, this.state.currentPage)
          });
        }
      );
      return;
    }
    this.setState(
      {
        currentPage: Number(e.target.id)
      },
      () => {
        this.fetchReviews();
        this.setState({
          pagesDisplay: pageNumbers(15, this.state.currentPage)
        });
      }
    );
  }

  render() {
    const { currentPage, reviewsPerPage } = this.state;
    const comments = this.state.reviews;
    const numbers = this.state.pagesDisplay;
    for (let i = 1; i <= Math.ceil(comments.length / reviewsPerPage); i++) {
      numbers.push(i);
    }
    numbers.pop();

    const renderPageNumbers = numbers.map(number => {
      return (
        <div className="pagination-container">
          <span
            className={currentPage === number ? "blue" : "pageNumbers"}
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </span>
        </div>
      );
    });
    return (
      <div>
        <ul>
          {this.state.reviews.map((comment, index) => (
            <CommentListEntry comment={comment} key={comment.id} />
          ))}
        </ul>

        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}
