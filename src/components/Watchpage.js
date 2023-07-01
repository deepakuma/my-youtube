import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import {YOUTUBE_VIDEO_API_BYID, GOOGLE_API} from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import WatchVideoDetails from './WatchVideoDetails';
import SuggestedVideos from './SuggestedVideos';

const Watchpage = () => {
const [searchParams] = useSearchParams();
const [vidDetails, setVidDetails] = useState();
const vidId = searchParams.get("v");
const dispatch = useDispatch();
useEffect(() => {
  dispatch(closeMenu());
  fetchVideoById(vidId);
}, [vidId]);
const fetchVideoById = async (vidId) => {
  const data = await fetch(
    YOUTUBE_VIDEO_API_BYID + vidId + "&key=" + GOOGLE_API
  );
  const json = await data.json();
  setVidDetails(json.items[0]);
};   
  return !vidDetails ? null : (
    <div className="mt-4 mx-4 w-full h-[90vh] overflow-auto scrollbar-thin scrollbar-thumb-[#ff0000] scrollbar-track-gray-100 scrollbar-thumb-rounded-md ml-10">
        <div className="grid grid-cols-8 gap-4 content-start ml-4">
      <iframe className='w-full h-[525px] col-span-5 ' src={"https://www.youtube.com/embed/"+searchParams.get("v") } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
      <div className='col-span-3 '><LiveChat/></div>
      <div className="col-span-5 row-span-1 ">
            <WatchVideoDetails details={vidDetails} />
          </div>
          <div className="col-span-3 row-span-3">
            <SuggestedVideos details={vidDetails} />
          </div>
    <div className='col-span-5  row-span-1 '>
    <CommentsContainer/>
    </div>
    </div>
    </div>
  )
}

export default Watchpage
