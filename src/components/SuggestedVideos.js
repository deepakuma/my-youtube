import React, { useEffect, useState } from "react";
import { GOOGLE_API, YOUTUBE_RELATED_VIDEO_API } from "../utils/constants";
import TimeAgo from "timeago-react";
import { Link } from "react-router-dom";

const SuggestedVideos = (vidDetails) => {
  const vidName = (vidDetails?.details?.snippet?.localized?.title).replace(
    /[^a-zA-z0-9 ]/g,
    ""
  );
  const [videoDetails, setVideoDetails] = useState([]);
  useEffect(() => {
    getSuggetsedVideo();
  }, []);
  const getSuggetsedVideo = async () => {
    const data = await fetch(
      YOUTUBE_RELATED_VIDEO_API + vidName + "&key=" + GOOGLE_API
    );
    const json = await data.json();
    setVideoDetails(json.items);
  };
  return !videoDetails ? null : videoDetails.length === 0 ? null : (
    <div className="my-4 mx-6 shadow-lg shadow-gray-300 rounded-lg p-2">
      {videoDetails.map((item, index) => {
        return (
          <Link
            key={item?.id.videoId + index}
            to={"/watch?v=" + item?.id?.videoId}
          >
            <VideoTiles vidInfo={item} />
          </Link>
        );
      })}
    </div>
  );
};

const VideoTiles = ({ vidInfo }) => {
  return (
    <div className="w-full my-2 grid grid-flow-col grid-cols-5 gap-3 p-1">
      <div className="col-span-2 content-center">
        <img
          className="rounded-md bg-contain min-w-full h-[100px]"
          src={vidInfo?.snippet?.thumbnails?.medium?.url}
          alt="video-poster"
        />
      </div>
      <div className="col-span-3">
        <p className="text-base font-medium mb-2 line-clamp-2 ">
          {vidInfo?.snippet?.title}
        </p>
        <p className="text-xs font-semibold">{vidInfo.snippet.channelTitle}</p>
        <span className="text-xs font-semibold">
          <TimeAgo date={vidInfo?.snippet?.publishedAt} />
        </span>
      </div>
    </div>
  );
};

export default SuggestedVideos;