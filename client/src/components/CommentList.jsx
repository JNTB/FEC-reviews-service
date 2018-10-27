import React from "react";
import comments from "./App";
import CommentListEntry from "./CommentListEntry";

export default function CommentList(props) {
  return (
    <div>
      {props.comments.map(comment => {
        <CommentListEntry comment={comment} key={comment.id} />;
      })}
    </div>
  );
}
