import React from "react";
// import comment from "./CommentList";

export default function CommentListEntry(props) {
  return (
    <div>
      <div className="container">
        <img src={props.comment.user_img} className="image" />
        <div className="user">
          <p className="name">{props.comment.user}</p>
          <p className="date">{props.comment.date}</p>
        </div>
      </div>

      <div className="comment">{props.comment.comment}</div>
    </div>
  );
}
