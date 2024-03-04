// import { Video } from "./video";
import { TikTokEmbed } from 'react-social-media-embed';
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="row">
          {props.data
            ? props.data.slice(0, 3).map((d, i) => (
                // <div key={`${d.title}-${i}`} className="col-sm-4">
                //   <Video title={d.title} src={d.src} />
                // </div>
                <div key={`${d.title}-${i}`} className="col-sm-4">
                  <TikTokEmbed url={d.url}/>
                </div>
              ))
            : "Loading..."}
        </div>
        <div className="row">
          {props.data
            ? props.data.slice(3, 4).map((d, i) => (
                // <div key={`${d.title}-${i}`} className="col-sm-12">
                //   <Video title={d.title} src={d.src} />
                // </div>
                <div key={`${d.title}-${i}`} className="col-sm-12">
                  <TikTokEmbed url={d.url} height={271}/>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
