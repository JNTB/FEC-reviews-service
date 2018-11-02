import React from "react";
import CommentListEntry from "./CommentListEntry";
import pageNumbers from "./PAGENUMBERLOGIC";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentPage: 1,
      reviewsPerPage: 7,
      pagesDisplay: [1, 2, 3, "...", 15, "❯"]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.id === NaN) {
      if (e.target === "...") {
        return;
      }
      if (e.target === "❯") {
        this.setState({
          currentPage: this.state.currentPage + 1
        });
      }
      if (e.target === "❮") {
        this.setState({
          currentPage: this.state.currentPage - 1
        });
      }
    }

    this.setState(
      {
        currentPage: Number(e.target.id)
      },
      () => {
        this.setState({
          pagesDisplay: pageNumbers(15, this.state.currentPage)
        });
      }
    );
  }

  render() {
    const { currentPage, reviewsPerPage } = this.state;
    const { comments } = this.props;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = comments.slice(
      indexOfFirstReview,
      indexOfLastReview
    );
    const numbers = this.state.pagesDisplay;
    // for (let i = 1; i <= Math.ceil(comments.length / reviewsPerPage); i++) {
    //   numbers.push(i);
    // }
    const renderPageNumbers = numbers.map(number => {
      return (
        <div className="pagination-container">
          <span>
            <span
              className={
                this.state.currentPage === number ? "blue" : "pageNumbers"
              }
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </span>
          </span>
        </div>
      );
    });
    return (
      <div>
        <ul>
          {currentReviews.map((comment, index) => (
            <CommentListEntry comment={comment} key={comment.id} />
          ))}
        </ul>

        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}
