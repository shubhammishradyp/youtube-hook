// youtube application using hook and custom hook
import React, { useState, useEffect } from "react";
import youtube from "../api/youtube";
import SearchBar from "./searchBar";
import VedioDetail from "./vedioDetail";
import VedioList from "./vedioList";
import useVideos from "../hooks/useVideos";

const App = () => {
   //    const [videos, setVideos] = useState([]);
   const [selectedVideo, setSelectedVideo] = useState(null);
   // custom hook               v
   const [videos, search] = useVideos("buildings");
   useEffect(() => {
      setSelectedVideo(videos[0]);
   }, [videos]);

   return (
      <div className="ui container">
         <SearchBar onFormSubmit={search} />
         {/* I have {this.state.videos.length} vedios */}
         <div className="ui grid">
            <div className="ui row">
               <div className="eleven wide column">
                  <VedioDetail video={selectedVideo} />
               </div>
               <div className="five wide column">
                  <VedioList
                     onVedioSelect={(video) => setSelectedVideo(video)}
                     // onVideoSelect={ selectedVideo => onVideoSelect(selectedVideo) }
                     videos={videos}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default App;
