import React from 'react'

const Comment = ({data}) => {
    const {name, text, userAvatar } = data;
  return (
    <div className="my-2 ml-2 p-2 flex justify-start items-start bg-slate-100 rounded-md border border-slate-200 border-l-4  border-l-[#ff0000] ">
    <img className="w-9 h-9" src={userAvatar} alt="comment-user" />
    <div className="text-sm px-2">
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-sm">{text}</p>
    </div>
  </div>
  )
}

export default Comment;
