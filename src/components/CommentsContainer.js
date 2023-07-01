import React from 'react'
import CommentList from './CommentList'
import { commentsData } from "../utils/config";

const CommentsContainer = () => {
  return (
      <div>
      <h1 className='text-lg font-bold p-2 underline underline-offset-4 decoration-red-400'>Comments:</h1>
       {<CommentList comments = {commentsData}/>}
    </div>
  )
}

export default CommentsContainer
