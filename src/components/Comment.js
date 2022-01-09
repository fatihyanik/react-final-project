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
          <div key={index} className="border m-10 shadow-lg">
            <div className="flex justify-between h-[50px] bg-gray-200 items-center">
     
                <span className="flex items-center">
                <img
                    className="w-[40px] h-[40px] rounded-[50%] object-cover mr-[15px]"
                    src={comment.commentImage}
                    width="50px"
                    height="50px"
                    alt=""
                  />
                  <span>{comment.commentUser}</span>
                 
                </span>
             
        
              <span>{comment.commentDate}</span>
            </div>
            <hr/>
            <div className="p-3">{comment.commentContent}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
