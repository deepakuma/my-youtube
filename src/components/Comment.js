import React from 'react'

const Comment = ({data}) => {
    const {name, text, reply} = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
      <img alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' className='h-6'/>
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment;
