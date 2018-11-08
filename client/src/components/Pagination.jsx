import React from "react";
import CommentListEntry from "./CommentListEntry";
import pageNumbers from "./PAGENUMBERLOGIC";
import axios from "axios";
import $ from "jquery";
import styles from "../css/pagination.css";

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
      $("html, body").animate(
        {
          scrollTop: $("._2a4F6xS7NQm2FuOFE9LEvK").offset().top
        },
        1000
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
      $("html, body").animate(
        {
          scrollTop: $("._2a4F6xS7NQm2FuOFE9LEvK").offset().top
        },
        1000
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
    $("html, body").animate(
      {
        scrollTop: $("._2a4F6xS7NQm2FuOFE9LEvK").offset().top
      },
      1000
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
        <div className={styles.paginationContainer}>
          <span
            className={
              currentPage === number ? styles.blue : styles.pageNumbers
            }
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
      <div className={styles.commentList}>
        <ul>
          {this.state.reviews.map((comment, index) => (
            <CommentListEntry comment={comment} key={index} />
          ))}
        </ul>

        <ul>{renderPageNumbers}</ul>
      </div>
    );
  }
}
