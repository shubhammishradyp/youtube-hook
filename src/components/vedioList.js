import React from "react";
import VedioItem from "./VedioItem";

const VedioList = ({ videos, onVideoSelect }) => {
   const renderedList = videos.map((video) => {
      return (
         <VedioItem
            key={video.id.videoId}
            onVideoSelect={() => onVideoSelect()}
            video={video}
         />
      );
   });

   return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VedioList;
