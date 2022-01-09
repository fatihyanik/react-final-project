import React from "react";
import { useParams } from "react-router-dom";

function Comment({ posts }) {
  const params = useParams();

  const filteredCommentPost = posts.filter((post, index) => {
    return parseInt(params.id) === post.id;
  });

  return (
    <div>
      {filteredCommentPost[0].comments.map((comment, index) => {
        console.log(comment);

        return (
          <div key={index} className="border m-10">
            <div className="flex justify-between">
              <span>
                {" "}
                <span>
                  {comment.commentUser}{" "}
                  <img
                    className="rounded-full"
                    src={comment.commentImage}
                    width="20px"
                    height="20px"
                    alt=""
                  />
                </span>
              </span>

              <span>{comment.commentDate}</span>
            </div>
            <div>{comment.commentContent}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
