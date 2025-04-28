import React, { useState } from "react";

function Comment({ comment, addReply }) {
  const [replyText, setReplyText] = useState("");
  const [showReplyText, setShowReplyText] = useState(false);

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      addReply(comment.id, replyText);
      setReplyText("");
      setShowReplyText(false);
    }
  };

  return (
    <div className="comment">
      <h3>{comment.email}</h3>
      <p>{comment.body}</p>
      <button onClick={() => setShowReplyText((s) => !s)}>
        {showReplyText ? "Cansel Reply" : "Reply"}
      </button>
      {showReplyText && (
        <form onSubmit={handleSubmitReply}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></textarea>
          <button type="submit">submit</button>
        </form>
      )}

      {comment.replies.length > 0 && (
        <div className="replies">
          <h4>Replies</h4>
          {comment.replies.map((reply) => (
            <div key={reply.id} className="reply">
              <h5>{reply.email}</h5>
              <p>{reply.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
