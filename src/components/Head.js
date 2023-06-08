import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={()=> toggleMenuHandler()} className='h-8 cursor-pointer' alt='menu' src='https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg'/>
        <a href='/'>
        <img className='h-10 ml-2' alt='youtube-logo' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'/>
        </a>
      </div>
      <div className='col-span-10 text-center'>
        <input className='w-1/2 border border-gray-400 p-1 rounded-l-full' type='text'/>
        <button className='border border-gray-400 px-2 py-1 rounded-r-full bg-gray-100'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt='user=icon' src='https://img.freepik.com/free-icon/black-male-user-symbol_318-60703.jpg'/>
      </div>
    </div>
  )
}

export default Head
