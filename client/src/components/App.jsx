import React from "react";
import ReviewStars from "./ReviewStars";
import Miniheader from "./Miniheader";
import Pagination from "./Pagination";
import styles from "../css/app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.app}>
        <ReviewStars />
        <Miniheader />
        <Pagination />
      </div>
    );
  }
}
