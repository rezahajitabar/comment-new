import React, { useState } from 'react'

function Comment({comment,addReply}) {
  const [repyText,setReplyText]=useState('');
  const [showReplyText,setShowReplyText]=useState(false);

  const handleSubmitReply=(e)=>{
    e.preventDefault();
    if(repyText.trim()){
      addReply(comment.id,repyText);
      setReplyText('');
      setShowReplyText(false);
    }
  }

  return (
    <div className='comment'>
        <h3>{comment.email}</h3>
        <p>{comment.body}</p>
        <button onClick={()=>setShowReplyText((s)=>!s)}>
          {showReplyText ? "Cansel Reply" : "Reply"}
        </button>
    </div>
  )
}

export default Comment



