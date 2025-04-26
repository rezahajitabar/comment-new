import React from 'react'
import {useComments} from '../src/useComments'
import CommentList from './CommentList';
function App() {
  const{comments,loading,error,addReply}=useComments();
  if(loading) return <div className='loading'>Loading comments...</div>;
  if(error) return <div className='error'>Error:{error}</div>
  return (
    <div className='app'>
      <h1>comment Display</h1>
      <CommentList comments={comments} addReply={addReply}/>
    </div>
  )
}

export default App

