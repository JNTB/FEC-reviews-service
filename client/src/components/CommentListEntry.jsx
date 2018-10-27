import React from "react";
import comment from "./CommentList";

export default function CommentListEntry(props) {
  return (
    <div>
      <div className="img">{props.comment.user_img}</div>
      <div className="user">
        {props.comment.user}
        {props.comment.date}
      </div>
      <div className="comment">{props.comment.comment}</div>
    </div>
  );
}
