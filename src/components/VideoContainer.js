import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCards, { AdVideoCard } from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {

    getVideos();

  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
    console.log(json?.items);
  };

  if (!videos) return null;

  return (
    <div className='w-full h-[79vh] scrollbar-thin scrollbar-thumb-[#ff0000] scrollbar-track-gray-100 scrollbar-thumb-rounded-md overflow-auto mx-2 mt-8 flex flex-wrap justify-start'>
      {videos?.length > 0 && <AdVideoCard key={videos[0]?.id}
        channel={videos[0]?.snippet?.channelTitle}
        title={videos[0]?.snippet?.localized?.title}
        views={videos[0]?.statistics?.viewCount}
        published={videos[0]?.snippet?.publishedAt}
        poster={videos[0]?.snippet?.thumbnails?.medium?.url}
        channelImg={videos[0]?.snippet?.thumbnails?.default?.url}
        duration={videos[0]?.contentDetails?.duration} />}
      {videos.map((item) => {
        return (
          <Link key={"id" + item?.id} to={"/watch?v=" + item?.id}>
            <VideoCards
              key={item?.id}
              channel={item?.snippet?.channelTitle}
              title={item?.snippet?.localized?.title}
              views={item?.statistics?.viewCount}
              published={item?.snippet?.publishedAt}
              poster={item?.snippet?.thumbnails?.medium?.url}
              channelImg={item?.snippet?.thumbnails?.default?.url}
              duration={item?.contentDetails?.duration}
            />
          </Link>
        );
      })}
    </div>
  )
};

export default VideoContainer
