import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
const [searchQuery, setSearchQuery] = useState("");
const [suggestions, setSuggestions] = useState([]);
const [showSuggestion, setShowSuggestion] = useState(false);

const searchCache = useSelector((store)=>store.search);
const dispatch = useDispatch();

useEffect(() =>{
//API call
//make an api call after every key press
//but if the difference between 2 API calls in <200ms
//decline the API call
const timer = setTimeout(() =>{
  if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery]);
  }
  else{
    getSearchSuggestion()
  }
}, 200);

return()=>{
  clearTimeout(timer);
}

}, [searchQuery]);

  const getSearchSuggestion = async () => {
  const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
  const json = await data.json();
  setSuggestions(json[1]);

  dispatch(cacheResults({
    [searchQuery]:json[1],
  }));
}

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
      <div className='col-span-10 px-10'>
        <div>
        <input className='px-2 w-1/2 border border-gray-400 p-1 rounded-l-full' type='text' value={searchQuery}  onChange={(e)=>setSearchQuery(e.target.value)} 
        onFocus={()=>setShowSuggestion(true)}
        onBlur={()=> setShowSuggestion(false)}/>
        <button className='border border-gray-400 px-2 py-1 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        {showSuggestion && (<div className=' bg-white py-1 px-2 w-[29.5rem] shadow-lg rounded-lg border border-gray-100 absolute'>
          <ul>
            {suggestions.map((s)=>(
              <li className='py-1 px-3 shadow-sm hover:bg-gray-100'>🔍 {s} </li>
            ))}
          </ul>
        </div>)}
        
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt='user=icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
      </div>
    </div>
  )
}

export default Head
