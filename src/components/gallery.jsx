// import { Video } from "./video";
import { TikTokEmbed } from 'react-social-media-embed';
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="row justify-content-md-center">
          {props.data
            ? props.data.slice(0, 3).map((d, i) => (
                // <div key={`${d.title}-${i}`} className="col-sm-4">
                //   <Video title={d.title} src={d.src} />
                // </div>
                <div key={`${d.title}-${i}`} className="col-lg">
                  <TikTokEmbed url={d.url}/>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
