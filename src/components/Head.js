import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import logo from "../assets/img/logo.png";
import hamburg from "../assets/img/hamburg.png";
import video from "../assets/img/add-video.png";
import notify from "../assets/img/notification.png";
import user from "../assets/img/user.png";
import search from "../assets/img/search.png";
import { Link } from 'react-router-dom';


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
  console.log(json[1]);

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
        <img onClick={()=> toggleMenuHandler()} className="h-[36px] mx-2 p-2 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={hamburg}
          alt="sidebar-toggle-button"/>
         <Link href='/'>
          <img className="h-[18px] mt-2" src={logo} alt="app-logo" />
        </Link>
      </div>
      <div className='col-span-10 px-10'>
        <input className='px-2 w-1/2 border border-gray-400 p-1 rounded-l-full' type='text' value={searchQuery}  
        placeholder='search'
        onChange={(e)=>setSearchQuery(e.target.value)} 
        onFocus={()=>setShowSuggestion(true)}
        onBlur={()=> setShowSuggestion(false)}/>
         <Link to={"/search?q=" + searchQuery} key={"id" + searchQuery}>
            <button className="p-2 border bg-gray-50 border-l-0  border-slate-400 rounded-tr-full rounded-br-full align-top hover:bg-slate-100">
              <img className="h-[16px] px-3" src={search} alt="" />
            </button>
          </Link>
        {showSuggestion && (<div className=' bg-white py-1 px-2 w-[29.5rem] shadow-lg rounded-lg border border-gray-100 absolute'>
          <ul>
            {suggestions.map((text)=>{
              return (
              <li
              key={text}
              className="flex font-medium mt-1 py-1 px-4 hover:bg-gray-200 hover: cursor-default"
              onClick={() => {
                setSearchQuery(text);
                setShowSuggestion(false);
              }}
            >
              <img className="h-[20px] my-1 mr-4" src={search} alt="" />
              {text}
            </li>
              );
            })}
          </ul>
        </div>)}
        
      </div>
      <div className='col-span-1 flex flex-row'>
      <img
          className="h-[40px] p-2 ml-4 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={video}
          alt=""
        />
        <img
          className="h-[36px] p-2 ml-4 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={notify}
          alt=""
        />
        <img
          className="h-[36px] p-2 ml-4 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer"
          src={user}
          alt=""
        />
      </div>
    </div>
  )
}

export default Head
