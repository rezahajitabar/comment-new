import { useState,useEffect } from "react";

export const useComments=()=>{
    const [comments,setComments]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const fetchcomment=async()=>{
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
                if(!response.ok) throw new Error('fail fetch to comment');
                const data=await response.json();
                setComments(data.map((comment)=>({...comment,replies:[]})))
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
          
        }
        fetchcomment()
    },[])
    const addReply=(commentId,replyText)=>{
        setComments(prevComment=>prevComment.map(comment=>comment.id===commentId? {
              ...comment,replies:[
                comment.replies,
                {id:Date.now(),body:replyText,email:'reza@email.com'}
              ]
        }: comment)) 
    }
    return({comments,loading,error,addReply})
}

export default useComments