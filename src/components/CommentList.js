import React from 'react';
import Comment from './Comment';

const CommentList = ({comments}) => {
  return comments.map((comment,index) => (
        <div key={index} >
            <Comment data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                {/* <Comment key={index} data={comment}/>
                <Comment key={index} data={comment}/>
                <Comment key={index} data={comment}/> */}
                <CommentList comments={comment.reply}/>
            </div>
        </div>
        ));
       
}

export default CommentList
